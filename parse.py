import requests
from bs4 import BeautifulSoup

BASE_URL = "https://www.wien.gv.at/wahlergebnis/de/BV201/gesamtansicht.html"
party_color_dict = {
    'SPÖ': "PartyColoursAT.SPOE",
    'FPÖ': "PartyColoursAT.FPOE",
    'GRÜNE': "PartyColoursAT.GRUENE",
    'ÖVP': "PartyColoursAT.OEVP",
    'NEOS': "PartyColoursAT.NEOS",
    'KPÖ': "PartyColoursAT.KPOE",
    'HC': "PartyColoursAT.THC",
    'LINKS': "PartyColoursAT.LINKS",
    'BIER': "PartyColoursAT.BIER",
    'SÖZ': "PartyColoursAT.SOEZ",
    'VOLT': "'#8A2BE2'",
}

party_color_dict_trans = {
    'SPÖ': "PartyColoursTransAT.SPOE",
    'FPÖ': "PartyColoursTransAT.FPOE",
    'GRÜNE': "PartyColoursTransAT.GRUENE",
    'ÖVP': "PartyColoursTransAT.OEVP",
    'NEOS': "PartyColoursTransAT.NEOS",
    'KPÖ': "PartyColoursTransAT.KPOE",
    'HC': "PartyColoursTransAT.THC",
    'LINKS': "PartyColoursTransAT.LINKS",
    'BIER': "PartyColoursTransAT.BIER",
    'SÖZ': "PartyColoursTransAT.SOEZ",
    'VOLT': "'#8A2BE2'",
}

running_parties = {
    1: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "KPÖ", "BESTE"],
    2: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "HERZ", "KPÖ", "HC", "SÖZ"],
    3: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "KPÖ", "HERZ", "HC", "SÖZ", "FREIE"],
    4: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "KPÖ"],
    5: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "KPÖ", "SÖZ", "HC"],
    6: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "KPÖ"],
    7: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "KPÖ", "VOLT"],
    8: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "KPÖ"],
    9: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "DWA", "KPÖ", "HC"],
    10: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "HERZ", "KPÖ", "POSCH", "HC", "SÖZ"],
    11: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "KPÖ", "HC", "SÖZ"],
    12: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "PH", "HERZ", "KPÖ", "SÖZ", "HC", "STRACHE"],
    13: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "KPÖ", "HC"],
    14: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "KPÖ", "HC", "SÖZ", "FAIR"],
    15: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "HERZ", "KPÖ", "SÖZ", "HC", "PDA"],
    16: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "KPÖ", "HERZ", "SÖZ", "HC"],
    17: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "KPÖ", "SÖZ", "HC", "dbö"],
    18: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "KPÖ", "WIR", "HC"],
    19: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "KPÖ", "HC"],
    20: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "SÖZ", "KPÖ", "HC"],
    21: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "WIFF", "KPÖ", "SÖZ", "HC", "LMP"],
    22: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "KPÖ", "HC", "SÖZ", "LMP"],
    23: ["SPÖ", "ÖVP", "GRÜNE", "NEOS", "FPÖ", "HC", "SÖZ", "KPÖ", "PRO"]
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
    district_id = int(table_id[1:])
    rows = table.find("tbody").find_all("tr", {"class": ["row0", "row1"]})

    party_percentages = {}
    
    for row in rows:
        party_name_elem = row.find("th", {"class": "first"})
        if party_name_elem:
            party_name = party_name_elem.text.strip()
            if party_name in running_parties[district_id] or party_name == "LINKS":
                if party_name == "LINKS":
                    party_name = "KPÖ"
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

    for party in running_parties[district_id]:
        if party not in party_percentages:
            party_percentages[party] = 0

    district_data.append((table_id, party_percentages))

mandates_by_district = {}

for district_id in range(901, 924):  # districts 1 to 23
    district_url = f"https://www.wien.gv.at/wahlergebnis/de/BV201/{district_id}.html"
    response = requests.get(district_url)
    response.encoding = response.apparent_encoding
    soup = BeautifulSoup(response.text, "html.parser")

    mandate_section = soup.find("section", class_="tables")
    if not mandate_section:
        continue

    mandate_divs = mandate_section.find_all("div", class_="mandate-party")
    mandate_data = {}

    for mandate_div in mandate_divs:
        abbr_elem = mandate_div.find("abbr")
        num_elem = mandate_div.find("div", class_="mandate-num")

        if abbr_elem and num_elem:
            party_abbr = abbr_elem.text.strip()
            mandate_count_raw = num_elem.text.strip().split()[0]  # Just the number before (±x)
            try:
                mandate_count = int(mandate_count_raw)
                if mandate_count > 0:
                    mandate_data[party_abbr] = mandate_count
            except ValueError:
                continue

    mandates_by_district[str(district_id)] = mandate_data

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
    majority_data = ""

    for party, percentage in zip(party_list, percentage_list):
        background_color = party_color_dict.get(party, "'rgb(170, 170, 170)'")
        majority_data += f"""
            {{
                "label": '{party}',
                "data": [{percentage}],
                "backgroundColor": {background_color}
            }},"""

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
                backgroundColor: {party_color_dict.get(party, "'rgb(170, 170, 170)'")},
            }},"""

    data_text += f"""
        ],
    }},"""

    sorted_mandates = {key: mandates_by_district[district_id].get(key, 0) for key in party_list}
    sorted_mandates.update({k: v for k, v in mandates_by_district[district_id].items() if k not in sorted_mandates})

    mandate_values = [sorted_mandates.get(party, 0) for party in sorted_mandates]

    color_values = [party_color_dict.get(party, '"rgb(170, 170, 170)"') for party in sorted_mandates]
    background_colors_js = "[" + ", ".join(color_values) + "]"

    color_values_trans = [party_color_dict_trans.get(party, '"rgba(170, 170, 170, 0.5)"') for party in sorted_mandates]
    background_colors_js_trans = "[" + ", ".join(color_values_trans) + "]"


    mandata_data_text += f"""
    {{
        labels: {list(sorted_mandates.keys())},
        datasets: [
            {{
                label: 'Mandate (2020)',
                data: {mandate_values},
                backgroundColor: {background_colors_js_trans},
                weight: 0.4,
            }},
            {{
                label: 'Mandate',
                data: {percentage_list},
                backgroundColor: {background_colors_js},
            }},
        ],
    }},"""

    majority_data_text += f"""
    {{
        labels: ['Mandate'],
        datasets: [{majority_data}
        ],
    }},"""

data_text += f"""
]"""

mandata_data_text += f"""
]"""

majority_data_text += f"""
]"""

content = f"""import {{ PartyColoursAT, PartyColoursTransAT }} from "$lib/partyColours";

export const name = 'Bezirksvertretungswahlen Wien 2025';
export const date = '2025-04-27'

{data_text}

{mandata_data_text}

{majority_data_text}
"""

with open("data.js", "w", encoding="utf-8") as file:
    file.write(content)

print(f"Data file created!")
