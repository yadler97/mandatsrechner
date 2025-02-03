import requests
from bs4 import BeautifulSoup

BASE_URL = "https://www.wien.gv.at/wahlergebnis/de/BV201/gesamtansicht.html"
PARTY_NAMES = ["SPÖ", "FPÖ", "GRÜNE", "ÖVP", "NEOS", "HC", "LINKS", "BIER", "SÖZ", "VOLT", "KURZ", "VOLK", "WANDL", "PH", "WIR", "PdA", "WIFF", "WIEN", "PRO"]
party_color_dict = {
    'SPÖ': "#E31E2D",
    'FPÖ': "#205CA5",
    'GRÜNE': "#51A51E",
    'ÖVP': "#63c3d0",
    'NEOS': "#E84188",
    'HC': "#173253",
    'LINKS': "#5C0AA3",
    'BIER': "#FFCC00",
    'SÖZ': "#3C2D82",
    'VOLT': "#8A2BE2",
    'KURZ': "#00FFFF",
    'VOLK': "#FF69B4",
    'WANDL': "#4B0082",
    'PH': "#7FFF00",
    'WIR': "#D2691E",
    'PdA': "#DC143C",
    'WIFF': "#00008B",
    'WIEN': "#B8860B",
    'PRO': "#006400"
}

response = requests.get(BASE_URL)
response.encoding = response.apparent_encoding
response.raise_for_status()
soup = BeautifulSoup(response.text, "html.parser")

# Locate all tables with IDs in the range 901-923
tables = [
    table for table in soup.find_all("table")
    if table.get("id") and table["id"].isdigit() and 901 <= int(table["id"]) <= 923
]

if not tables:
    raise ValueError("No tables found with IDs between 901 and 923.")

district_data = []

for table in tables:
    table_id = table["id"]
    rows = table.find("tbody").find_all("tr", {"class": ["row0", "row1"]})

    party_percentages = {}
    
    for row in rows:
        party_name_elem = row.find("th", {"class": "first"})
        if party_name_elem:
            party_name = party_name_elem.text.strip()
            if party_name in PARTY_NAMES:
                percentage_td = row.find_all("td")[3]
                percentage_value = float(percentage_td.text.strip().replace(",", ".").replace("%", ""))
                
                sum_percentages = sum(party_percentages.values())

                deviation = 100.00 - (sum_percentages + percentage_value)

                # Check if adding the new percentage would exceed 100
                if deviation >= 0:
                    # If the total percentage is less than or equal to 100, add the value
                    party_percentages[party_name] = percentage_value
                else:
                    # If adding the new percentage would exceed 100, subtract deviation and add
                    party_percentages[party_name] = round(percentage_value - abs(deviation), 2)

    district_data.append((table_id, party_percentages))

districts_sorted = {}

for district, results in district_data:
    sorted_parties = sorted(results.items(), key=lambda x: x[1], reverse=True)
    parties = [party for party, _ in sorted_parties]
    percentages = [percent for _, percent in sorted_parties]
    
    districts_sorted[district] = (parties, percentages)

districts_sorted = sorted(districts_sorted.items())

data_text = f"""export const data = ["""
mandata_data_text = f"""export const mandateData = ["""
majority_data_text = f"""export const majorityData = ["""

for index, (district_id, (party_list, percentage_list)) in enumerate(districts_sorted, start=1):
    majority_data = []

    for party, percentage in zip(party_list, percentage_list):
        majority_data.append({
            "label": party,
            "data": [percentage],
            "backgroundColor": party_color_dict.get(party, "#FFFFFF")
        })

    data_text += f"""
    {{
        labels: {party_list},
        datasets: ["""

    for idx, party in enumerate(party_list):
    # Create the dataset for each party
        data_text += f"""
        {{
            label: '{party}',
            index: {idx},
            data: [{', '.join(['0' if i != idx else str(percentage_list[i]) for i in range(len(party_list))])}],
            backgroundColor: '{party_color_dict.get(party, "#FFFFFF")}',
        }},
        """

    data_text += f"""
        ],
    }},"""


    mandata_data_text += f"""
    {{
        labels: {party_list},
        datasets: [
            {{
                label: 'Mandate',
                data: {percentage_list},
                backgroundColor: {[party_color_dict.get(party, "#FFFFFF") for party in party_list]},
            }},
        ],
    }},"""

    majority_data_text += f"""
    {{
        labels: ['Mandate'],
        datasets: {majority_data},
    }},"""

data_text += f"""
]"""

mandata_data_text += f"""
]"""

majority_data_text += f"""
]"""

content = f"""{data_text}

{mandata_data_text}

{majority_data_text}
"""

with open("data.js", "w", encoding="utf-8") as file:
    file.write(content)

print(f"Data file created!")
