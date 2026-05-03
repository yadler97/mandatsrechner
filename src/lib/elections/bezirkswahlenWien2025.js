import { PartyColours } from "$lib/partyColours";

export const name = 'Bezirksvertretungswahlen Wien 2025';
export const date = ['2025-04-27'];
export const countryCode = 'AT';

export const data = [
    {
        labels: ['ÖVP', 'SPÖ', 'Grüne', 'NEOS', 'FPÖ', 'KPÖ', 'BESTE'],
        datasets: [
            {
                label: 'ÖVP',
                index: 0,
                data: [40.52, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'SPÖ',
                index: 1,
                data: [0, 22.97, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'Grüne',
                index: 2,
                data: [0, 0, 17.38, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 11.06, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 4.85, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'KPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 1.62, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'BESTE',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [35.38, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'Grüne',
                index: 1,
                data: [0, 30.56, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 12.44, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 6.63, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 5.03, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'KPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 4.45, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 2.27, 0, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 0.87, 0],
                backgroundColor: PartyColours[countryCode]['SÖZ'].normal,
            },
            {
                label: 'HERZ',
                index: 8,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ', 'FREIE'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [37.02, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'Grüne',
                index: 1,
                data: [0, 23.1, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 17.07, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 8.8, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 4.73, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'KPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.73, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 2.28, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 0.72, 0, 0],
                backgroundColor: PartyColours[countryCode]['SÖZ'].normal,
            },
            {
                label: 'HERZ',
                index: 8,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
            {
                label: 'FREIE',
                index: 9,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [33.23, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'Grüne',
                index: 1,
                data: [0, 28.1, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 19.79, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 8.63, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'KPÖ',
                index: 4,
                data: [0, 0, 0, 0, 3.66, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'FPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.44],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'HC', 'SÖZ'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [35.31, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'Grüne',
                index: 1,
                data: [0, 28.22, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 13.84, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 7.49, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'KPÖ',
                index: 4,
                data: [0, 0, 0, 0, 5.27, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'FPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 4.66, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 1.95, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.05],
                backgroundColor: PartyColours[countryCode]['SÖZ'].normal,
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [37.2, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'Grüne',
                index: 1,
                data: [0, 30.43, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 14.87, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 7.05, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'KPÖ',
                index: 4,
                data: [0, 0, 0, 0, 3.81, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'FPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.58],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
        ],
    },
    {
        labels: ['Grüne', 'SPÖ', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'VOLT'],
        datasets: [
            {
                label: 'Grüne',
                index: 0,
                data: [44.91, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'SPÖ',
                index: 1,
                data: [0, 20.6, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 13.72, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 7.87, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'KPÖ',
                index: 4,
                data: [0, 0, 0, 0, 4.76, 0, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'FPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 2.98, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'VOLT',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 0.31],
                backgroundColor: '#8A2BE2',
            },
        ],
    },
    {
        labels: ['Grüne', 'ÖVP', 'SPÖ', 'NEOS', 'KPÖ', 'FPÖ'],
        datasets: [
            {
                label: 'Grüne',
                index: 0,
                data: [33.59, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'ÖVP',
                index: 1,
                data: [0, 30.55, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'SPÖ',
                index: 2,
                data: [0, 0, 18.58, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 7.25, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'KPÖ',
                index: 4,
                data: [0, 0, 0, 0, 4.01, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'FPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.4],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'HC', 'DWA'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [31.45, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'Grüne',
                index: 1,
                data: [0, 29.21, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 18.32, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 9.57, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'KPÖ',
                index: 4,
                data: [0, 0, 0, 0, 4.38, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'FPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.66, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 1.26, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'DWA',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'HC', 'NEOS', 'SÖZ', 'KPÖ', 'HERZ', 'POSCH'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [47.4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'ÖVP',
                index: 1,
                data: [0, 18.0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'FPÖ',
                index: 2,
                data: [0, 0, 10.52, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'Grüne',
                index: 3,
                data: [0, 0, 0, 8.98, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'HC',
                index: 4,
                data: [0, 0, 0, 0, 4.32, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'NEOS',
                index: 5,
                data: [0, 0, 0, 0, 0, 4.15, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'SÖZ',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 3.17, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SÖZ'].normal,
            },
            {
                label: 'KPÖ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.57, 0, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'HERZ',
                index: 8,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
            {
                label: 'POSCH',
                index: 9,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
        ],
    },
    {
        labels: ['SPÖ', 'FPÖ', 'ÖVP', 'Grüne', 'NEOS', 'HC', 'SÖZ', 'KPÖ'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [41.49, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'FPÖ',
                index: 1,
                data: [0, 28.44, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 11.3, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'Grüne',
                index: 3,
                data: [0, 0, 0, 6.72, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'NEOS',
                index: 4,
                data: [0, 0, 0, 0, 3.53, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'HC',
                index: 5,
                data: [0, 0, 0, 0, 0, 2.99, 0, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'SÖZ',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 2.12, 0],
                backgroundColor: PartyColours[countryCode]['SÖZ'].normal,
            },
            {
                label: 'KPÖ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.1],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'Grüne', 'FPÖ', 'NEOS', 'HC', 'PH', 'KPÖ', 'SÖZ', 'HERZ', 'STRACHE'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [42.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'ÖVP',
                index: 1,
                data: [0, 16.85, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'Grüne',
                index: 2,
                data: [0, 0, 15.91, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'FPÖ',
                index: 3,
                data: [0, 0, 0, 6.85, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'NEOS',
                index: 4,
                data: [0, 0, 0, 0, 5.84, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'HC',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.21, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'PH',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 3.06, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
            {
                label: 'KPÖ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 2.46, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'SÖZ',
                index: 8,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 1.77, 0, 0],
                backgroundColor: PartyColours[countryCode]['SÖZ'].normal,
            },
            {
                label: 'HERZ',
                index: 9,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
            {
                label: 'STRACHE',
                index: 10,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
        ],
    },
    {
        labels: ['ÖVP', 'SPÖ', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ'],
        datasets: [
            {
                label: 'ÖVP',
                index: 0,
                data: [44.25, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'SPÖ',
                index: 1,
                data: [0, 22.28, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'Grüne',
                index: 2,
                data: [0, 0, 15.06, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 8.87, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 3.9, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'HC',
                index: 5,
                data: [0, 0, 0, 0, 0, 1.76, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'KPÖ',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 1.23],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ', 'SÖZ', 'FAIR'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [36.94, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'ÖVP',
                index: 1,
                data: [0, 23.57, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'Grüne',
                index: 2,
                data: [0, 0, 18.32, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 7.44, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 6.44, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'HC',
                index: 5,
                data: [0, 0, 0, 0, 0, 2.53, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'KPÖ',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 1.96, 0, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 0.85, 0],
                backgroundColor: PartyColours[countryCode]['SÖZ'].normal,
            },
            {
                label: 'FAIR',
                index: 8,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'FPÖ', 'KPÖ', 'NEOS', 'HC', 'SÖZ', 'HERZ', 'PDA'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [38.53, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'Grüne',
                index: 1,
                data: [0, 23.89, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 13.4, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'FPÖ',
                index: 3,
                data: [0, 0, 0, 6.12, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'KPÖ',
                index: 4,
                data: [0, 0, 0, 0, 5.71, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'NEOS',
                index: 5,
                data: [0, 0, 0, 0, 0, 5.49, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 2.62, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.88, 0, 0],
                backgroundColor: PartyColours[countryCode]['SÖZ'].normal,
            },
            {
                label: 'HERZ',
                index: 8,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
            {
                label: 'PDA',
                index: 9,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [39.03, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'Grüne',
                index: 1,
                data: [0, 20.01, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 16.83, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 6.07, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 6.02, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'KPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 4.33, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 2.82, 0, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.95, 0],
                backgroundColor: PartyColours[countryCode]['SÖZ'].normal,
            },
            {
                label: 'HERZ',
                index: 8,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'dbö'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [33.21, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'Grüne',
                index: 1,
                data: [0, 24.28, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 19.71, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 8.28, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 5.56, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'KPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.96, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 2.06, 0, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.24, 0],
                backgroundColor: PartyColours[countryCode]['SÖZ'].normal,
            },
            {
                label: 'dbö',
                index: 8,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
        ],
    },
    {
        labels: ['Grüne', 'ÖVP', 'SPÖ', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'WIR'],
        datasets: [
            {
                label: 'Grüne',
                index: 0,
                data: [38.7, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'ÖVP',
                index: 1,
                data: [0, 27.48, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'SPÖ',
                index: 2,
                data: [0, 0, 17.86, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 8.07, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 2.74, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'KPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 2.14, 0, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 1.24, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'WIR',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
        ],
    },
    {
        labels: ['ÖVP', 'SPÖ', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ'],
        datasets: [
            {
                label: 'ÖVP',
                index: 0,
                data: [36.89, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'SPÖ',
                index: 1,
                data: [0, 26.92, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'Grüne',
                index: 2,
                data: [0, 0, 16.02, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 9.77, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 5.1, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'HC',
                index: 5,
                data: [0, 0, 0, 0, 0, 1.88, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'KPÖ',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 1.42],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'FPÖ', 'NEOS', 'KPÖ', 'HC', 'SÖZ'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [45.02, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'Grüne',
                index: 1,
                data: [0, 17.27, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 14.78, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'FPÖ',
                index: 3,
                data: [0, 0, 0, 7.35, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'NEOS',
                index: 4,
                data: [0, 0, 0, 0, 4.99, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'KPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.64, 0, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 3.1, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.77],
                backgroundColor: PartyColours[countryCode]['SÖZ'].normal,
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'WIFF', 'NEOS', 'HC', 'SÖZ', 'KPÖ', 'LMP'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [44.52, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'ÖVP',
                index: 1,
                data: [0, 18.11, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'FPÖ',
                index: 2,
                data: [0, 0, 9.64, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'Grüne',
                index: 3,
                data: [0, 0, 0, 9.19, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'WIFF',
                index: 4,
                data: [0, 0, 0, 0, 5.23, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
            {
                label: 'NEOS',
                index: 5,
                data: [0, 0, 0, 0, 0, 4.65, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 4.46, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.03, 0, 0],
                backgroundColor: PartyColours[countryCode]['SÖZ'].normal,
            },
            {
                label: 'KPÖ',
                index: 8,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0.89, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'LMP',
                index: 9,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'Grüne', 'FPÖ', 'NEOS', 'HC', 'KPÖ', 'SÖZ', 'LMP'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [45.08, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'ÖVP',
                index: 1,
                data: [0, 19.81, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'Grüne',
                index: 2,
                data: [0, 0, 10.99, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'FPÖ',
                index: 3,
                data: [0, 0, 0, 9.76, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'NEOS',
                index: 4,
                data: [0, 0, 0, 0, 5.98, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'HC',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.86, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'KPÖ',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 1.22, 0, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.01, 0],
                backgroundColor: PartyColours[countryCode]['SÖZ'].normal,
            },
            {
                label: 'LMP',
                index: 8,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'Grüne', 'FPÖ', 'NEOS', 'HC', 'PRO', 'KPÖ', 'SÖZ'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [40.4, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
            },
            {
                label: 'ÖVP',
                index: 1,
                data: [0, 22.85, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
            },
            {
                label: 'Grüne',
                index: 2,
                data: [0, 0, 12.16, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['Grüne'].normal,
            },
            {
                label: 'FPÖ',
                index: 3,
                data: [0, 0, 0, 7.99, 0, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
            },
            {
                label: 'NEOS',
                index: 4,
                data: [0, 0, 0, 0, 7.28, 0, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['NEOS'].normal,
            },
            {
                label: 'HC',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.16, 0, 0, 0],
                backgroundColor: PartyColours[countryCode]['HC'].normal,
            },
            {
                label: 'PRO',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 2.28, 0, 0],
                backgroundColor: 'rgb(170, 170, 170)',
            },
            {
                label: 'KPÖ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.0, 0],
                backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
            },
            {
                label: 'SÖZ',
                index: 8,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0.96],
                backgroundColor: PartyColours[countryCode]['SÖZ'].normal,
            },
        ],
    },
]

export const mandateData = [
    {
        labels: ['ÖVP', 'SPÖ', 'Grüne', 'NEOS', 'FPÖ', 'KPÖ', 'BESTE'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [17, 10, 7, 4, 2, 0, 0],
                backgroundColor: [PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['KPÖ'].trans, "rgba(170, 170, 170, 0.5)"],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [40.52, 22.97, 17.38, 11.06, 4.85, 1.62, 0],
                backgroundColor: [PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['KPÖ'].normal, "rgb(170, 170, 170)"],
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [23, 19, 8, 4, 3, 0, 1, 0, 0, 2],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['HC'].trans, PartyColours[countryCode]['SÖZ'].trans, "rgba(170, 170, 170, 0.5)", PartyColours[countryCode]['LINKS'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [35.38, 30.56, 12.44, 6.63, 5.03, 4.45, 2.27, 0.87, 0],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['HC'].normal, PartyColours[countryCode]['SÖZ'].normal, "rgb(170, 170, 170)", PartyColours[countryCode]['LINKS'].normal],
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ', 'FREIE', 'LINKS', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [22, 13, 10, 5, 2, 0, 1, 0, 0, 0, 2, 1],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['HC'].trans, PartyColours[countryCode]['SÖZ'].trans, "rgba(170, 170, 170, 0.5)", "rgba(170, 170, 170, 0.5)", PartyColours[countryCode]['LINKS'].trans, PartyColours[countryCode]['BIER'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [37.02, 23.1, 17.07, 8.8, 4.73, 3.73, 2.28, 0.72, 0, 0],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['HC'].normal, PartyColours[countryCode]['SÖZ'].normal, "rgb(170, 170, 170)", "rgb(170, 170, 170)", PartyColours[countryCode]['LINKS'].normal, PartyColours[countryCode]['BIER'].normal],
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [15, 12, 8, 3, 0, 1, 1],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['LINKS'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [33.23, 28.1, 19.79, 8.63, 3.66, 3.44],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['LINKS'].normal],
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'HC', 'SÖZ', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [15, 12, 6, 3, 0, 2, 0, 0, 2],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['HC'].trans, PartyColours[countryCode]['SÖZ'].trans, PartyColours[countryCode]['LINKS'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [35.31, 28.22, 13.84, 7.49, 5.27, 4.66, 1.95, 1.05],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['HC'].normal, PartyColours[countryCode]['SÖZ'].normal, PartyColours[countryCode]['LINKS'].normal],
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [16, 13, 6, 3, 0, 1, 1],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['LINKS'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [37.2, 30.43, 14.87, 7.05, 3.81, 3.58],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['LINKS'].normal],
            },
        ],
    },
    {
        labels: ['Grüne', 'SPÖ', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'VOLT', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [19, 9, 6, 3, 0, 1, 0, 2],
                backgroundColor: [PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['FPÖ'].trans, '#8A2BE2', PartyColours[countryCode]['LINKS'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [44.91, 20.6, 13.72, 7.87, 4.76, 2.98, 0.31],
                backgroundColor: [PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['FPÖ'].normal, '#8A2BE2', PartyColours[countryCode]['LINKS'].normal],
            },
        ],
    },
    {
        labels: ['Grüne', 'ÖVP', 'SPÖ', 'NEOS', 'KPÖ', 'FPÖ', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [14, 13, 8, 3, 0, 1, 1],
                backgroundColor: [PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['LINKS'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [33.59, 30.55, 18.58, 7.25, 4.01, 3.4],
                backgroundColor: [PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['LINKS'].normal],
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'HC', 'DWA', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [13, 13, 8, 4, 0, 1, 0, 0, 1],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['HC'].trans, "rgba(170, 170, 170, 0.5)", PartyColours[countryCode]['LINKS'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [31.45, 29.21, 18.32, 9.57, 4.38, 3.66, 1.26, 0],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['HC'].normal, "rgb(170, 170, 170)", PartyColours[countryCode]['LINKS'].normal],
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'HC', 'NEOS', 'SÖZ', 'KPÖ', 'HERZ', 'POSCH', 'LINKS', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [30, 11, 6, 5, 2, 2, 2, 0, 0, 0, 1, 1],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['HC'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['SÖZ'].trans, PartyColours[countryCode]['KPÖ'].trans, "rgba(170, 170, 170, 0.5)", "rgba(170, 170, 170, 0.5)", PartyColours[countryCode]['LINKS'].trans, PartyColours[countryCode]['BIER'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [47.4, 18.0, 10.52, 8.98, 4.32, 4.15, 3.17, 1.57, 0, 0],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['HC'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['SÖZ'].normal, PartyColours[countryCode]['KPÖ'].normal, "rgb(170, 170, 170)", "rgb(170, 170, 170)", PartyColours[countryCode]['LINKS'].normal, PartyColours[countryCode]['BIER'].normal],
            },
        ],
    },
    {
        labels: ['SPÖ', 'FPÖ', 'ÖVP', 'Grüne', 'NEOS', 'HC', 'SÖZ', 'KPÖ', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [26, 18, 7, 4, 2, 1, 1, 0, 1],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['HC'].trans, PartyColours[countryCode]['SÖZ'].trans, PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['BIER'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [41.49, 28.44, 11.3, 6.72, 3.53, 2.99, 2.12, 1.1],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['HC'].normal, PartyColours[countryCode]['SÖZ'].normal, PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['BIER'].normal],
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'Grüne', 'FPÖ', 'NEOS', 'HC', 'PH', 'KPÖ', 'SÖZ', 'HERZ', 'STRACHE', 'LINKS', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [26, 10, 9, 4, 3, 2, 1, 0, 1, 0, 0, 1, 1],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['HC'].trans, "rgba(170, 170, 170, 0.5)", PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['SÖZ'].trans, "rgba(170, 170, 170, 0.5)", "rgba(170, 170, 170, 0.5)", PartyColours[countryCode]['LINKS'].trans, PartyColours[countryCode]['BIER'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [42.0, 16.85, 15.91, 6.85, 5.84, 3.21, 3.06, 2.46, 1.77, 0, 0],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['HC'].normal, "rgb(170, 170, 170)", PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['SÖZ'].normal, "rgb(170, 170, 170)", "rgb(170, 170, 170)", PartyColours[countryCode]['LINKS'].normal, PartyColours[countryCode]['BIER'].normal],
            },
        ],
    },
    {
        labels: ['ÖVP', 'SPÖ', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [19, 10, 6, 4, 1, 0, 0],
                backgroundColor: [PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['HC'].trans, PartyColours[countryCode]['KPÖ'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [44.25, 22.28, 15.06, 8.87, 3.9, 1.76, 1.23],
                backgroundColor: [PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['HC'].normal, PartyColours[countryCode]['KPÖ'].normal],
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ', 'SÖZ', 'FAIR', 'BIER', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [22, 14, 10, 4, 3, 1, 0, 0, 0, 1, 1],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['HC'].trans, PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['SÖZ'].trans, "rgba(170, 170, 170, 0.5)", PartyColours[countryCode]['BIER'].trans, PartyColours[countryCode]['LINKS'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [36.94, 23.57, 18.32, 7.44, 6.44, 2.53, 1.96, 0.85, 0],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['HC'].normal, PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['SÖZ'].normal, "rgb(170, 170, 170)", PartyColours[countryCode]['BIER'].normal, PartyColours[countryCode]['LINKS'].normal],
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'FPÖ', 'KPÖ', 'NEOS', 'HC', 'SÖZ', 'HERZ', 'PDA', 'LINKS', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [20, 12, 7, 3, 0, 2, 1, 1, 0, 0, 3, 1],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['HC'].trans, PartyColours[countryCode]['SÖZ'].trans, "rgba(170, 170, 170, 0.5)", "rgba(170, 170, 170, 0.5)", PartyColours[countryCode]['LINKS'].trans, PartyColours[countryCode]['BIER'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [38.53, 23.89, 13.4, 6.12, 5.71, 5.49, 2.62, 1.88, 0, 0],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['HC'].normal, PartyColours[countryCode]['SÖZ'].normal, "rgb(170, 170, 170)", "rgb(170, 170, 170)", PartyColours[countryCode]['LINKS'].normal, PartyColours[countryCode]['BIER'].normal],
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ', 'LINKS', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [25, 13, 11, 3, 3, 0, 1, 1, 0, 2, 1],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['HC'].trans, PartyColours[countryCode]['SÖZ'].trans, "rgba(170, 170, 170, 0.5)", PartyColours[countryCode]['LINKS'].trans, PartyColours[countryCode]['BIER'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [39.03, 20.01, 16.83, 6.07, 6.02, 4.33, 2.82, 1.95, 0],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['HC'].normal, PartyColours[countryCode]['SÖZ'].normal, "rgb(170, 170, 170)", PartyColours[countryCode]['LINKS'].normal, PartyColours[countryCode]['BIER'].normal],
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'dbö', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [15, 11, 8, 3, 2, 0, 0, 0, 0, 1],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['HC'].trans, PartyColours[countryCode]['SÖZ'].trans, "rgba(170, 170, 170, 0.5)", PartyColours[countryCode]['LINKS'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [33.21, 24.28, 19.71, 8.28, 5.56, 3.96, 2.06, 1.24, 0],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['HC'].normal, PartyColours[countryCode]['SÖZ'].normal, "rgb(170, 170, 170)", PartyColours[countryCode]['LINKS'].normal],
            },
        ],
    },
    {
        labels: ['Grüne', 'ÖVP', 'SPÖ', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'WIR'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [17, 12, 7, 3, 1, 0, 0, 0],
                backgroundColor: [PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['HC'].trans, "rgba(170, 170, 170, 0.5)"],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [38.7, 27.48, 17.86, 8.07, 2.74, 2.14, 1.24, 0],
                backgroundColor: [PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['HC'].normal, "rgb(170, 170, 170)"],
            },
        ],
    },
    {
        labels: ['ÖVP', 'SPÖ', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [19, 14, 8, 5, 2, 0, 0],
                backgroundColor: [PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['HC'].trans, PartyColours[countryCode]['KPÖ'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [36.89, 26.92, 16.02, 9.77, 5.1, 1.88, 1.42],
                backgroundColor: [PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['HC'].normal, PartyColours[countryCode]['KPÖ'].normal],
            },
        ],
    },
    {
        labels: ['SPÖ', 'Grüne', 'ÖVP', 'FPÖ', 'NEOS', 'KPÖ', 'HC', 'SÖZ', 'LINKS', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [27, 10, 8, 4, 2, 0, 1, 1, 2, 1],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['HC'].trans, PartyColours[countryCode]['SÖZ'].trans, PartyColours[countryCode]['LINKS'].trans, PartyColours[countryCode]['BIER'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [45.02, 17.27, 14.78, 7.35, 4.99, 3.64, 3.1, 1.77],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['HC'].normal, PartyColours[countryCode]['SÖZ'].normal, PartyColours[countryCode]['LINKS'].normal, PartyColours[countryCode]['BIER'].normal],
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'WIFF', 'NEOS', 'HC', 'SÖZ', 'KPÖ', 'LMP', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [29, 11, 6, 5, 3, 3, 2, 0, 0, 0, 1],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['Grüne'].trans, "rgba(170, 170, 170, 0.5)", PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['HC'].trans, PartyColours[countryCode]['SÖZ'].trans, PartyColours[countryCode]['KPÖ'].trans, "rgba(170, 170, 170, 0.5)", PartyColours[countryCode]['BIER'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [44.52, 18.11, 9.64, 9.19, 5.23, 4.65, 4.46, 1.03, 0.89, 0],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['Grüne'].normal, "rgb(170, 170, 170)", PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['HC'].normal, PartyColours[countryCode]['SÖZ'].normal, PartyColours[countryCode]['KPÖ'].normal, "rgb(170, 170, 170)", PartyColours[countryCode]['BIER'].normal],
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'Grüne', 'FPÖ', 'NEOS', 'HC', 'KPÖ', 'SÖZ', 'LMP', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [29, 12, 7, 6, 3, 2, 0, 0, 0, 1],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['HC'].trans, PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['SÖZ'].trans, "rgba(170, 170, 170, 0.5)", PartyColours[countryCode]['BIER'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [45.08, 19.81, 10.99, 9.76, 5.98, 3.86, 1.22, 1.01, 0],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['HC'].normal, PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['SÖZ'].normal, "rgb(170, 170, 170)", PartyColours[countryCode]['BIER'].normal],
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'Grüne', 'FPÖ', 'NEOS', 'HC', 'PRO', 'KPÖ', 'SÖZ', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [26, 14, 7, 5, 4, 2, 1, 0, 0, 1],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].trans, PartyColours[countryCode]['ÖVP'].trans, PartyColours[countryCode]['Grüne'].trans, PartyColours[countryCode]['FPÖ'].trans, PartyColours[countryCode]['NEOS'].trans, PartyColours[countryCode]['HC'].trans, "rgba(170, 170, 170, 0.5)", PartyColours[countryCode]['KPÖ'].trans, PartyColours[countryCode]['SÖZ'].trans, PartyColours[countryCode]['BIER'].trans],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [40.4, 22.85, 12.16, 7.99, 7.28, 3.16, 2.28, 1.0, 0.96],
                backgroundColor: [PartyColours[countryCode]['SPÖ'].normal, PartyColours[countryCode]['ÖVP'].normal, PartyColours[countryCode]['Grüne'].normal, PartyColours[countryCode]['FPÖ'].normal, PartyColours[countryCode]['NEOS'].normal, PartyColours[countryCode]['HC'].normal, "rgb(170, 170, 170)", PartyColours[countryCode]['KPÖ'].normal, PartyColours[countryCode]['SÖZ'].normal, PartyColours[countryCode]['BIER'].normal],
            },
        ],
    },
]

export const majorityData = [
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'ÖVP',
                "data": [40.52],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'SPÖ',
                "data": [22.97],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'Grüne',
                "data": [17.38],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'NEOS',
                "data": [11.06],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'FPÖ',
                "data": [4.85],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'KPÖ',
                "data": [1.62],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'BESTE',
                "data": [0],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [35.38],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'Grüne',
                "data": [30.56],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'ÖVP',
                "data": [12.44],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'NEOS',
                "data": [6.63],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'FPÖ',
                "data": [5.03],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'KPÖ',
                "data": [4.45],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'HC',
                "data": [2.27],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'SÖZ',
                "data": [0.87],
                "backgroundColor": PartyColours[countryCode]['SÖZ'].normal
            },
            {
                "label": 'HERZ',
                "data": [0],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [37.02],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'Grüne',
                "data": [23.1],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'ÖVP',
                "data": [17.07],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'NEOS',
                "data": [8.8],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'FPÖ',
                "data": [4.73],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'KPÖ',
                "data": [3.73],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'HC',
                "data": [2.28],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'SÖZ',
                "data": [0.72],
                "backgroundColor": PartyColours[countryCode]['SÖZ'].normal
            },
            {
                "label": 'HERZ',
                "data": [0],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
            {
                "label": 'FREIE',
                "data": [0],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [33.23],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'Grüne',
                "data": [28.1],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'ÖVP',
                "data": [19.79],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'NEOS',
                "data": [8.63],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'KPÖ',
                "data": [3.66],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'FPÖ',
                "data": [3.44],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [35.31],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'Grüne',
                "data": [28.22],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'ÖVP',
                "data": [13.84],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'NEOS',
                "data": [7.49],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'KPÖ',
                "data": [5.27],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'FPÖ',
                "data": [4.66],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'HC',
                "data": [1.95],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'SÖZ',
                "data": [1.05],
                "backgroundColor": PartyColours[countryCode]['SÖZ'].normal
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [37.2],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'Grüne',
                "data": [30.43],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'ÖVP',
                "data": [14.87],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'NEOS',
                "data": [7.05],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'KPÖ',
                "data": [3.81],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'FPÖ',
                "data": [3.58],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'Grüne',
                "data": [44.91],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'SPÖ',
                "data": [20.6],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'ÖVP',
                "data": [13.72],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'NEOS',
                "data": [7.87],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'KPÖ',
                "data": [4.76],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'FPÖ',
                "data": [2.98],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'VOLT',
                "data": [0.31],
                "backgroundColor": '#8A2BE2'
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'Grüne',
                "data": [33.59],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'ÖVP',
                "data": [30.55],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'SPÖ',
                "data": [18.58],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'NEOS',
                "data": [7.25],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'KPÖ',
                "data": [4.01],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'FPÖ',
                "data": [3.4],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [31.45],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'Grüne',
                "data": [29.21],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'ÖVP',
                "data": [18.32],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'NEOS',
                "data": [9.57],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'KPÖ',
                "data": [4.38],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'FPÖ',
                "data": [3.66],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'HC',
                "data": [1.26],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'DWA',
                "data": [0],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [47.4],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'ÖVP',
                "data": [18.0],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'FPÖ',
                "data": [10.52],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'Grüne',
                "data": [8.98],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'HC',
                "data": [4.32],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'NEOS',
                "data": [4.15],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'SÖZ',
                "data": [3.17],
                "backgroundColor": PartyColours[countryCode]['SÖZ'].normal
            },
            {
                "label": 'KPÖ',
                "data": [1.57],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'HERZ',
                "data": [0],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
            {
                "label": 'POSCH',
                "data": [0],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [41.49],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'FPÖ',
                "data": [28.44],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'ÖVP',
                "data": [11.3],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'Grüne',
                "data": [6.72],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'NEOS',
                "data": [3.53],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'HC',
                "data": [2.99],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'SÖZ',
                "data": [2.12],
                "backgroundColor": PartyColours[countryCode]['SÖZ'].normal
            },
            {
                "label": 'KPÖ',
                "data": [1.1],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [42.0],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'ÖVP',
                "data": [16.85],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'Grüne',
                "data": [15.91],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'FPÖ',
                "data": [6.85],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'NEOS',
                "data": [5.84],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'HC',
                "data": [3.21],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'PH',
                "data": [3.06],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
            {
                "label": 'KPÖ',
                "data": [2.46],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'SÖZ',
                "data": [1.77],
                "backgroundColor": PartyColours[countryCode]['SÖZ'].normal
            },
            {
                "label": 'HERZ',
                "data": [0],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
            {
                "label": 'STRACHE',
                "data": [0],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'ÖVP',
                "data": [44.25],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'SPÖ',
                "data": [22.28],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'Grüne',
                "data": [15.06],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'NEOS',
                "data": [8.87],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'FPÖ',
                "data": [3.9],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'HC',
                "data": [1.76],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'KPÖ',
                "data": [1.23],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [36.94],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'ÖVP',
                "data": [23.57],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'Grüne',
                "data": [18.32],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'NEOS',
                "data": [7.44],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'FPÖ',
                "data": [6.44],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'HC',
                "data": [2.53],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'KPÖ',
                "data": [1.96],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'SÖZ',
                "data": [0.85],
                "backgroundColor": PartyColours[countryCode]['SÖZ'].normal
            },
            {
                "label": 'FAIR',
                "data": [0],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [38.53],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'Grüne',
                "data": [23.89],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'ÖVP',
                "data": [13.4],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'FPÖ',
                "data": [6.12],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'KPÖ',
                "data": [5.71],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'NEOS',
                "data": [5.49],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'HC',
                "data": [2.62],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'SÖZ',
                "data": [1.88],
                "backgroundColor": PartyColours[countryCode]['SÖZ'].normal
            },
            {
                "label": 'HERZ',
                "data": [0],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
            {
                "label": 'PDA',
                "data": [0],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [39.03],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'Grüne',
                "data": [20.01],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'ÖVP',
                "data": [16.83],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'NEOS',
                "data": [6.07],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'FPÖ',
                "data": [6.02],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'KPÖ',
                "data": [4.33],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'HC',
                "data": [2.82],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'SÖZ',
                "data": [1.95],
                "backgroundColor": PartyColours[countryCode]['SÖZ'].normal
            },
            {
                "label": 'HERZ',
                "data": [0],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [33.21],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'Grüne',
                "data": [24.28],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'ÖVP',
                "data": [19.71],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'NEOS',
                "data": [8.28],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'FPÖ',
                "data": [5.56],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'KPÖ',
                "data": [3.96],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'HC',
                "data": [2.06],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'SÖZ',
                "data": [1.24],
                "backgroundColor": PartyColours[countryCode]['SÖZ'].normal
            },
            {
                "label": 'dbö',
                "data": [0],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'Grüne',
                "data": [38.7],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'ÖVP',
                "data": [27.48],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'SPÖ',
                "data": [17.86],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'NEOS',
                "data": [8.07],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'FPÖ',
                "data": [2.74],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'KPÖ',
                "data": [2.14],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'HC',
                "data": [1.24],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'WIR',
                "data": [0],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'ÖVP',
                "data": [36.89],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'SPÖ',
                "data": [26.92],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'Grüne',
                "data": [16.02],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'NEOS',
                "data": [9.77],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'FPÖ',
                "data": [5.1],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'HC',
                "data": [1.88],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'KPÖ',
                "data": [1.42],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [45.02],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'Grüne',
                "data": [17.27],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'ÖVP',
                "data": [14.78],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'FPÖ',
                "data": [7.35],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'NEOS',
                "data": [4.99],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'KPÖ',
                "data": [3.64],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'HC',
                "data": [3.1],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'SÖZ',
                "data": [1.77],
                "backgroundColor": PartyColours[countryCode]['SÖZ'].normal
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [44.52],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'ÖVP',
                "data": [18.11],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'FPÖ',
                "data": [9.64],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'Grüne',
                "data": [9.19],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'WIFF',
                "data": [5.23],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
            {
                "label": 'NEOS',
                "data": [4.65],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'HC',
                "data": [4.46],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'SÖZ',
                "data": [1.03],
                "backgroundColor": PartyColours[countryCode]['SÖZ'].normal
            },
            {
                "label": 'KPÖ',
                "data": [0.89],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'LMP',
                "data": [0],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [45.08],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'ÖVP',
                "data": [19.81],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'Grüne',
                "data": [10.99],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'FPÖ',
                "data": [9.76],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'NEOS',
                "data": [5.98],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'HC',
                "data": [3.86],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'KPÖ',
                "data": [1.22],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'SÖZ',
                "data": [1.01],
                "backgroundColor": PartyColours[countryCode]['SÖZ'].normal
            },
            {
                "label": 'LMP',
                "data": [0],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [40.4],
                "backgroundColor": PartyColours[countryCode]['SPÖ'].normal
            },
            {
                "label": 'ÖVP',
                "data": [22.85],
                "backgroundColor": PartyColours[countryCode]['ÖVP'].normal
            },
            {
                "label": 'Grüne',
                "data": [12.16],
                "backgroundColor": PartyColours[countryCode]['Grüne'].normal
            },
            {
                "label": 'FPÖ',
                "data": [7.99],
                "backgroundColor": PartyColours[countryCode]['FPÖ'].normal
            },
            {
                "label": 'NEOS',
                "data": [7.28],
                "backgroundColor": PartyColours[countryCode]['NEOS'].normal
            },
            {
                "label": 'HC',
                "data": [3.16],
                "backgroundColor": PartyColours[countryCode]['HC'].normal
            },
            {
                "label": 'PRO',
                "data": [2.28],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
            {
                "label": 'KPÖ',
                "data": [1.0],
                "backgroundColor": PartyColours[countryCode]['KPÖ'].normal
            },
            {
                "label": 'SÖZ',
                "data": [0.96],
                "backgroundColor": PartyColours[countryCode]['SÖZ'].normal
            },
        ],
    },
]
