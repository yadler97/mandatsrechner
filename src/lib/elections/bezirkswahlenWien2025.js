import { PartyColoursAT, PartyColoursTransAT } from "$lib/partyColours";

export const name = 'Bezirksvertretungswahlen Wien 2025';
export const date = ['2025-04-27'];

export const data = [
    {
        labels: ['ÖVP', 'SPÖ', 'GRÜNE', 'NEOS', 'FPÖ', 'KPÖ', 'BESTE'],
        datasets: [
            {
                label: 'ÖVP',
                index: 0,
                data: [40.52, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'SPÖ',
                index: 1,
                data: [0, 22.97, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'GRÜNE',
                index: 2,
                data: [0, 0, 17.38, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 11.06, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 4.85, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'KPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 1.62, 0],
                backgroundColor: PartyColoursAT.KPOE,
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
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [35.38, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'GRÜNE',
                index: 1,
                data: [0, 30.56, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 12.44, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 6.63, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 5.03, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'KPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 4.45, 0, 0, 0],
                backgroundColor: PartyColoursAT.KPOE,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 2.27, 0, 0],
                backgroundColor: PartyColoursAT.THC,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 0.87, 0],
                backgroundColor: PartyColoursAT.SOEZ,
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
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ', 'FREIE'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [37.02, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'GRÜNE',
                index: 1,
                data: [0, 23.1, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 17.07, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 8.8, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 4.73, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'KPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.73, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.KPOE,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 2.28, 0, 0, 0],
                backgroundColor: PartyColoursAT.THC,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 0.72, 0, 0],
                backgroundColor: PartyColoursAT.SOEZ,
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
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [33.23, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'GRÜNE',
                index: 1,
                data: [0, 28.1, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 19.79, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 8.63, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'KPÖ',
                index: 4,
                data: [0, 0, 0, 0, 3.66, 0],
                backgroundColor: PartyColoursAT.KPOE,
            },
            {
                label: 'FPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.44],
                backgroundColor: PartyColoursAT.FPOE,
            },
        ],
    },
    {
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'HC', 'SÖZ'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [35.31, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'GRÜNE',
                index: 1,
                data: [0, 28.22, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 13.84, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 7.49, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'KPÖ',
                index: 4,
                data: [0, 0, 0, 0, 5.27, 0, 0, 0],
                backgroundColor: PartyColoursAT.KPOE,
            },
            {
                label: 'FPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 4.66, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 1.95, 0],
                backgroundColor: PartyColoursAT.THC,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.05],
                backgroundColor: PartyColoursAT.SOEZ,
            },
        ],
    },
    {
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [37.2, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'GRÜNE',
                index: 1,
                data: [0, 30.43, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 14.87, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 7.05, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'KPÖ',
                index: 4,
                data: [0, 0, 0, 0, 3.81, 0],
                backgroundColor: PartyColoursAT.KPOE,
            },
            {
                label: 'FPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.58],
                backgroundColor: PartyColoursAT.FPOE,
            },
        ],
    },
    {
        labels: ['GRÜNE', 'SPÖ', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'VOLT'],
        datasets: [
            {
                label: 'GRÜNE',
                index: 0,
                data: [44.91, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'SPÖ',
                index: 1,
                data: [0, 20.6, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 13.72, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 7.87, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'KPÖ',
                index: 4,
                data: [0, 0, 0, 0, 4.76, 0, 0],
                backgroundColor: PartyColoursAT.KPOE,
            },
            {
                label: 'FPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 2.98, 0],
                backgroundColor: PartyColoursAT.FPOE,
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
        labels: ['GRÜNE', 'ÖVP', 'SPÖ', 'NEOS', 'KPÖ', 'FPÖ'],
        datasets: [
            {
                label: 'GRÜNE',
                index: 0,
                data: [33.59, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'ÖVP',
                index: 1,
                data: [0, 30.55, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'SPÖ',
                index: 2,
                data: [0, 0, 18.58, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 7.25, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'KPÖ',
                index: 4,
                data: [0, 0, 0, 0, 4.01, 0],
                backgroundColor: PartyColoursAT.KPOE,
            },
            {
                label: 'FPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.4],
                backgroundColor: PartyColoursAT.FPOE,
            },
        ],
    },
    {
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'HC', 'DWA'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [31.45, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'GRÜNE',
                index: 1,
                data: [0, 29.21, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 18.32, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 9.57, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'KPÖ',
                index: 4,
                data: [0, 0, 0, 0, 4.38, 0, 0, 0],
                backgroundColor: PartyColoursAT.KPOE,
            },
            {
                label: 'FPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.66, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 1.26, 0],
                backgroundColor: PartyColoursAT.THC,
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
        labels: ['SPÖ', 'ÖVP', 'FPÖ', 'GRÜNE', 'HC', 'NEOS', 'SÖZ', 'KPÖ', 'HERZ', 'POSCH'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [47.4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'ÖVP',
                index: 1,
                data: [0, 18.0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'FPÖ',
                index: 2,
                data: [0, 0, 10.52, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'GRÜNE',
                index: 3,
                data: [0, 0, 0, 8.98, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'HC',
                index: 4,
                data: [0, 0, 0, 0, 4.32, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.THC,
            },
            {
                label: 'NEOS',
                index: 5,
                data: [0, 0, 0, 0, 0, 4.15, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'SÖZ',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 3.17, 0, 0, 0],
                backgroundColor: PartyColoursAT.SOEZ,
            },
            {
                label: 'KPÖ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.57, 0, 0],
                backgroundColor: PartyColoursAT.KPOE,
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
        labels: ['SPÖ', 'FPÖ', 'ÖVP', 'GRÜNE', 'NEOS', 'HC', 'SÖZ', 'KPÖ'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [41.49, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'FPÖ',
                index: 1,
                data: [0, 28.44, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 11.3, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'GRÜNE',
                index: 3,
                data: [0, 0, 0, 6.72, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'NEOS',
                index: 4,
                data: [0, 0, 0, 0, 3.53, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'HC',
                index: 5,
                data: [0, 0, 0, 0, 0, 2.99, 0, 0],
                backgroundColor: PartyColoursAT.THC,
            },
            {
                label: 'SÖZ',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 2.12, 0],
                backgroundColor: PartyColoursAT.SOEZ,
            },
            {
                label: 'KPÖ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.1],
                backgroundColor: PartyColoursAT.KPOE,
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'GRÜNE', 'FPÖ', 'NEOS', 'HC', 'PH', 'KPÖ', 'SÖZ', 'HERZ', 'STRACHE'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [42.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'ÖVP',
                index: 1,
                data: [0, 16.85, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'GRÜNE',
                index: 2,
                data: [0, 0, 15.91, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'FPÖ',
                index: 3,
                data: [0, 0, 0, 6.85, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'NEOS',
                index: 4,
                data: [0, 0, 0, 0, 5.84, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'HC',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.21, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.THC,
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
                backgroundColor: PartyColoursAT.KPOE,
            },
            {
                label: 'SÖZ',
                index: 8,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 1.77, 0, 0],
                backgroundColor: PartyColoursAT.SOEZ,
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
        labels: ['ÖVP', 'SPÖ', 'GRÜNE', 'NEOS', 'FPÖ', 'HC', 'KPÖ'],
        datasets: [
            {
                label: 'ÖVP',
                index: 0,
                data: [44.25, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'SPÖ',
                index: 1,
                data: [0, 22.28, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'GRÜNE',
                index: 2,
                data: [0, 0, 15.06, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 8.87, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 3.9, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'HC',
                index: 5,
                data: [0, 0, 0, 0, 0, 1.76, 0],
                backgroundColor: PartyColoursAT.THC,
            },
            {
                label: 'KPÖ',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 1.23],
                backgroundColor: PartyColoursAT.KPOE,
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'GRÜNE', 'NEOS', 'FPÖ', 'HC', 'KPÖ', 'SÖZ', 'FAIR'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [36.94, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'ÖVP',
                index: 1,
                data: [0, 23.57, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'GRÜNE',
                index: 2,
                data: [0, 0, 18.32, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 7.44, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 6.44, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'HC',
                index: 5,
                data: [0, 0, 0, 0, 0, 2.53, 0, 0, 0],
                backgroundColor: PartyColoursAT.THC,
            },
            {
                label: 'KPÖ',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 1.96, 0, 0],
                backgroundColor: PartyColoursAT.KPOE,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 0.85, 0],
                backgroundColor: PartyColoursAT.SOEZ,
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
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'FPÖ', 'KPÖ', 'NEOS', 'HC', 'SÖZ', 'HERZ', 'PDA'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [38.53, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'GRÜNE',
                index: 1,
                data: [0, 23.89, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 13.4, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'FPÖ',
                index: 3,
                data: [0, 0, 0, 6.12, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'KPÖ',
                index: 4,
                data: [0, 0, 0, 0, 5.71, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.KPOE,
            },
            {
                label: 'NEOS',
                index: 5,
                data: [0, 0, 0, 0, 0, 5.49, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 2.62, 0, 0, 0],
                backgroundColor: PartyColoursAT.THC,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.88, 0, 0],
                backgroundColor: PartyColoursAT.SOEZ,
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
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [39.03, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'GRÜNE',
                index: 1,
                data: [0, 20.01, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 16.83, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 6.07, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 6.02, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'KPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 4.33, 0, 0, 0],
                backgroundColor: PartyColoursAT.KPOE,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 2.82, 0, 0],
                backgroundColor: PartyColoursAT.THC,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.95, 0],
                backgroundColor: PartyColoursAT.SOEZ,
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
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'dbö'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [33.21, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'GRÜNE',
                index: 1,
                data: [0, 24.28, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 19.71, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 8.28, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 5.56, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'KPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.96, 0, 0, 0],
                backgroundColor: PartyColoursAT.KPOE,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 2.06, 0, 0],
                backgroundColor: PartyColoursAT.THC,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.24, 0],
                backgroundColor: PartyColoursAT.SOEZ,
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
        labels: ['GRÜNE', 'ÖVP', 'SPÖ', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'WIR'],
        datasets: [
            {
                label: 'GRÜNE',
                index: 0,
                data: [38.7, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'ÖVP',
                index: 1,
                data: [0, 27.48, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'SPÖ',
                index: 2,
                data: [0, 0, 17.86, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 8.07, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 2.74, 0, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'KPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 2.14, 0, 0],
                backgroundColor: PartyColoursAT.KPOE,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 1.24, 0],
                backgroundColor: PartyColoursAT.THC,
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
        labels: ['ÖVP', 'SPÖ', 'GRÜNE', 'NEOS', 'FPÖ', 'HC', 'KPÖ'],
        datasets: [
            {
                label: 'ÖVP',
                index: 0,
                data: [36.89, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'SPÖ',
                index: 1,
                data: [0, 26.92, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'GRÜNE',
                index: 2,
                data: [0, 0, 16.02, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'NEOS',
                index: 3,
                data: [0, 0, 0, 9.77, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'FPÖ',
                index: 4,
                data: [0, 0, 0, 0, 5.1, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'HC',
                index: 5,
                data: [0, 0, 0, 0, 0, 1.88, 0],
                backgroundColor: PartyColoursAT.THC,
            },
            {
                label: 'KPÖ',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 1.42],
                backgroundColor: PartyColoursAT.KPOE,
            },
        ],
    },
    {
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'FPÖ', 'NEOS', 'KPÖ', 'HC', 'SÖZ'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [45.02, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'GRÜNE',
                index: 1,
                data: [0, 17.27, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'ÖVP',
                index: 2,
                data: [0, 0, 14.78, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'FPÖ',
                index: 3,
                data: [0, 0, 0, 7.35, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'NEOS',
                index: 4,
                data: [0, 0, 0, 0, 4.99, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'KPÖ',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.64, 0, 0],
                backgroundColor: PartyColoursAT.KPOE,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 3.1, 0],
                backgroundColor: PartyColoursAT.THC,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.77],
                backgroundColor: PartyColoursAT.SOEZ,
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'FPÖ', 'GRÜNE', 'WIFF', 'NEOS', 'HC', 'SÖZ', 'KPÖ', 'LMP'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [44.52, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'ÖVP',
                index: 1,
                data: [0, 18.11, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'FPÖ',
                index: 2,
                data: [0, 0, 9.64, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'GRÜNE',
                index: 3,
                data: [0, 0, 0, 9.19, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
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
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'HC',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 4.46, 0, 0, 0],
                backgroundColor: PartyColoursAT.THC,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.03, 0, 0],
                backgroundColor: PartyColoursAT.SOEZ,
            },
            {
                label: 'KPÖ',
                index: 8,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0.89, 0],
                backgroundColor: PartyColoursAT.KPOE,
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
        labels: ['SPÖ', 'ÖVP', 'GRÜNE', 'FPÖ', 'NEOS', 'HC', 'KPÖ', 'SÖZ', 'LMP'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [45.08, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'ÖVP',
                index: 1,
                data: [0, 19.81, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'GRÜNE',
                index: 2,
                data: [0, 0, 10.99, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'FPÖ',
                index: 3,
                data: [0, 0, 0, 9.76, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'NEOS',
                index: 4,
                data: [0, 0, 0, 0, 5.98, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'HC',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.86, 0, 0, 0],
                backgroundColor: PartyColoursAT.THC,
            },
            {
                label: 'KPÖ',
                index: 6,
                data: [0, 0, 0, 0, 0, 0, 1.22, 0, 0],
                backgroundColor: PartyColoursAT.KPOE,
            },
            {
                label: 'SÖZ',
                index: 7,
                data: [0, 0, 0, 0, 0, 0, 0, 1.01, 0],
                backgroundColor: PartyColoursAT.SOEZ,
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
        labels: ['SPÖ', 'ÖVP', 'GRÜNE', 'FPÖ', 'NEOS', 'HC', 'PRO', 'KPÖ', 'SÖZ'],
        datasets: [
            {
                label: 'SPÖ',
                index: 0,
                data: [40.4, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.SPOE,
            },
            {
                label: 'ÖVP',
                index: 1,
                data: [0, 22.85, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.OEVP,
            },
            {
                label: 'GRÜNE',
                index: 2,
                data: [0, 0, 12.16, 0, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.GRUENE,
            },
            {
                label: 'FPÖ',
                index: 3,
                data: [0, 0, 0, 7.99, 0, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.FPOE,
            },
            {
                label: 'NEOS',
                index: 4,
                data: [0, 0, 0, 0, 7.28, 0, 0, 0, 0],
                backgroundColor: PartyColoursAT.NEOS,
            },
            {
                label: 'HC',
                index: 5,
                data: [0, 0, 0, 0, 0, 3.16, 0, 0, 0],
                backgroundColor: PartyColoursAT.THC,
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
                backgroundColor: PartyColoursAT.KPOE,
            },
            {
                label: 'SÖZ',
                index: 8,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0.96],
                backgroundColor: PartyColoursAT.SOEZ,
            },
        ],
    },
]

export const mandateData = [
    {
        labels: ['ÖVP', 'SPÖ', 'GRÜNE', 'NEOS', 'FPÖ', 'KPÖ', 'BESTE'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [17, 10, 7, 4, 2, 0, 0],
                backgroundColor: [PartyColoursTransAT.OEVP, PartyColoursTransAT.SPOE, PartyColoursTransAT.GRUENE, PartyColoursTransAT.NEOS, PartyColoursTransAT.FPOE, PartyColoursTransAT.KPOE, "rgba(170, 170, 170, 0.5)"],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [40.52, 22.97, 17.38, 11.06, 4.85, 1.62, 0],
                backgroundColor: [PartyColoursAT.OEVP, PartyColoursAT.SPOE, PartyColoursAT.GRUENE, PartyColoursAT.NEOS, PartyColoursAT.FPOE, PartyColoursAT.KPOE, "rgb(170, 170, 170)"],
            },
        ],
    },
    {
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [23, 19, 8, 4, 3, 0, 1, 0, 0, 2],
                backgroundColor: [PartyColoursTransAT.SPOE, PartyColoursTransAT.GRUENE, PartyColoursTransAT.OEVP, PartyColoursTransAT.NEOS, PartyColoursTransAT.FPOE, PartyColoursTransAT.KPOE, PartyColoursTransAT.THC, PartyColoursTransAT.SOEZ, "rgba(170, 170, 170, 0.5)", PartyColoursTransAT.LINKS],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [35.38, 30.56, 12.44, 6.63, 5.03, 4.45, 2.27, 0.87, 0],
                backgroundColor: [PartyColoursAT.SPOE, PartyColoursAT.GRUENE, PartyColoursAT.OEVP, PartyColoursAT.NEOS, PartyColoursAT.FPOE, PartyColoursAT.KPOE, PartyColoursAT.THC, PartyColoursAT.SOEZ, "rgb(170, 170, 170)", PartyColoursAT.LINKS],
            },
        ],
    },
    {
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ', 'FREIE', 'LINKS', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [22, 13, 10, 5, 2, 0, 1, 0, 0, 0, 2, 1],
                backgroundColor: [PartyColoursTransAT.SPOE, PartyColoursTransAT.GRUENE, PartyColoursTransAT.OEVP, PartyColoursTransAT.NEOS, PartyColoursTransAT.FPOE, PartyColoursTransAT.KPOE, PartyColoursTransAT.THC, PartyColoursTransAT.SOEZ, "rgba(170, 170, 170, 0.5)", "rgba(170, 170, 170, 0.5)", PartyColoursTransAT.LINKS, PartyColoursTransAT.BIER],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [37.02, 23.1, 17.07, 8.8, 4.73, 3.73, 2.28, 0.72, 0, 0],
                backgroundColor: [PartyColoursAT.SPOE, PartyColoursAT.GRUENE, PartyColoursAT.OEVP, PartyColoursAT.NEOS, PartyColoursAT.FPOE, PartyColoursAT.KPOE, PartyColoursAT.THC, PartyColoursAT.SOEZ, "rgb(170, 170, 170)", "rgb(170, 170, 170)", PartyColoursAT.LINKS, PartyColoursAT.BIER],
            },
        ],
    },
    {
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [15, 12, 8, 3, 0, 1, 1],
                backgroundColor: [PartyColoursTransAT.SPOE, PartyColoursTransAT.GRUENE, PartyColoursTransAT.OEVP, PartyColoursTransAT.NEOS, PartyColoursTransAT.KPOE, PartyColoursTransAT.FPOE, PartyColoursTransAT.LINKS],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [33.23, 28.1, 19.79, 8.63, 3.66, 3.44],
                backgroundColor: [PartyColoursAT.SPOE, PartyColoursAT.GRUENE, PartyColoursAT.OEVP, PartyColoursAT.NEOS, PartyColoursAT.KPOE, PartyColoursAT.FPOE, PartyColoursAT.LINKS],
            },
        ],
    },
    {
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'HC', 'SÖZ', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [15, 12, 6, 3, 0, 2, 0, 0, 2],
                backgroundColor: [PartyColoursTransAT.SPOE, PartyColoursTransAT.GRUENE, PartyColoursTransAT.OEVP, PartyColoursTransAT.NEOS, PartyColoursTransAT.KPOE, PartyColoursTransAT.FPOE, PartyColoursTransAT.THC, PartyColoursTransAT.SOEZ, PartyColoursTransAT.LINKS],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [35.31, 28.22, 13.84, 7.49, 5.27, 4.66, 1.95, 1.05],
                backgroundColor: [PartyColoursAT.SPOE, PartyColoursAT.GRUENE, PartyColoursAT.OEVP, PartyColoursAT.NEOS, PartyColoursAT.KPOE, PartyColoursAT.FPOE, PartyColoursAT.THC, PartyColoursAT.SOEZ, PartyColoursAT.LINKS],
            },
        ],
    },
    {
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [16, 13, 6, 3, 0, 1, 1],
                backgroundColor: [PartyColoursTransAT.SPOE, PartyColoursTransAT.GRUENE, PartyColoursTransAT.OEVP, PartyColoursTransAT.NEOS, PartyColoursTransAT.KPOE, PartyColoursTransAT.FPOE, PartyColoursTransAT.LINKS],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [37.2, 30.43, 14.87, 7.05, 3.81, 3.58],
                backgroundColor: [PartyColoursAT.SPOE, PartyColoursAT.GRUENE, PartyColoursAT.OEVP, PartyColoursAT.NEOS, PartyColoursAT.KPOE, PartyColoursAT.FPOE, PartyColoursAT.LINKS],
            },
        ],
    },
    {
        labels: ['GRÜNE', 'SPÖ', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'VOLT', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [19, 9, 6, 3, 0, 1, 0, 2],
                backgroundColor: [PartyColoursTransAT.GRUENE, PartyColoursTransAT.SPOE, PartyColoursTransAT.OEVP, PartyColoursTransAT.NEOS, PartyColoursTransAT.KPOE, PartyColoursTransAT.FPOE, '#8A2BE2', PartyColoursTransAT.LINKS],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [44.91, 20.6, 13.72, 7.87, 4.76, 2.98, 0.31],
                backgroundColor: [PartyColoursAT.GRUENE, PartyColoursAT.SPOE, PartyColoursAT.OEVP, PartyColoursAT.NEOS, PartyColoursAT.KPOE, PartyColoursAT.FPOE, '#8A2BE2', PartyColoursAT.LINKS],
            },
        ],
    },
    {
        labels: ['GRÜNE', 'ÖVP', 'SPÖ', 'NEOS', 'KPÖ', 'FPÖ', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [14, 13, 8, 3, 0, 1, 1],
                backgroundColor: [PartyColoursTransAT.GRUENE, PartyColoursTransAT.OEVP, PartyColoursTransAT.SPOE, PartyColoursTransAT.NEOS, PartyColoursTransAT.KPOE, PartyColoursTransAT.FPOE, PartyColoursTransAT.LINKS],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [33.59, 30.55, 18.58, 7.25, 4.01, 3.4],
                backgroundColor: [PartyColoursAT.GRUENE, PartyColoursAT.OEVP, PartyColoursAT.SPOE, PartyColoursAT.NEOS, PartyColoursAT.KPOE, PartyColoursAT.FPOE, PartyColoursAT.LINKS],
            },
        ],
    },
    {
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'HC', 'DWA', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [13, 13, 8, 4, 0, 1, 0, 0, 1],
                backgroundColor: [PartyColoursTransAT.SPOE, PartyColoursTransAT.GRUENE, PartyColoursTransAT.OEVP, PartyColoursTransAT.NEOS, PartyColoursTransAT.KPOE, PartyColoursTransAT.FPOE, PartyColoursTransAT.THC, "rgba(170, 170, 170, 0.5)", PartyColoursTransAT.LINKS],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [31.45, 29.21, 18.32, 9.57, 4.38, 3.66, 1.26, 0],
                backgroundColor: [PartyColoursAT.SPOE, PartyColoursAT.GRUENE, PartyColoursAT.OEVP, PartyColoursAT.NEOS, PartyColoursAT.KPOE, PartyColoursAT.FPOE, PartyColoursAT.THC, "rgb(170, 170, 170)", PartyColoursAT.LINKS],
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'FPÖ', 'GRÜNE', 'HC', 'NEOS', 'SÖZ', 'KPÖ', 'HERZ', 'POSCH', 'LINKS', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [30, 11, 6, 5, 2, 2, 2, 0, 0, 0, 1, 1],
                backgroundColor: [PartyColoursTransAT.SPOE, PartyColoursTransAT.OEVP, PartyColoursTransAT.FPOE, PartyColoursTransAT.GRUENE, PartyColoursTransAT.THC, PartyColoursTransAT.NEOS, PartyColoursTransAT.SOEZ, PartyColoursTransAT.KPOE, "rgba(170, 170, 170, 0.5)", "rgba(170, 170, 170, 0.5)", PartyColoursTransAT.LINKS, PartyColoursTransAT.BIER],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [47.4, 18.0, 10.52, 8.98, 4.32, 4.15, 3.17, 1.57, 0, 0],
                backgroundColor: [PartyColoursAT.SPOE, PartyColoursAT.OEVP, PartyColoursAT.FPOE, PartyColoursAT.GRUENE, PartyColoursAT.THC, PartyColoursAT.NEOS, PartyColoursAT.SOEZ, PartyColoursAT.KPOE, "rgb(170, 170, 170)", "rgb(170, 170, 170)", PartyColoursAT.LINKS, PartyColoursAT.BIER],
            },
        ],
    },
    {
        labels: ['SPÖ', 'FPÖ', 'ÖVP', 'GRÜNE', 'NEOS', 'HC', 'SÖZ', 'KPÖ', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [26, 18, 7, 4, 2, 1, 1, 0, 1],
                backgroundColor: [PartyColoursTransAT.SPOE, PartyColoursTransAT.FPOE, PartyColoursTransAT.OEVP, PartyColoursTransAT.GRUENE, PartyColoursTransAT.NEOS, PartyColoursTransAT.THC, PartyColoursTransAT.SOEZ, PartyColoursTransAT.KPOE, PartyColoursTransAT.BIER],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [41.49, 28.44, 11.3, 6.72, 3.53, 2.99, 2.12, 1.1],
                backgroundColor: [PartyColoursAT.SPOE, PartyColoursAT.FPOE, PartyColoursAT.OEVP, PartyColoursAT.GRUENE, PartyColoursAT.NEOS, PartyColoursAT.THC, PartyColoursAT.SOEZ, PartyColoursAT.KPOE, PartyColoursAT.BIER],
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'GRÜNE', 'FPÖ', 'NEOS', 'HC', 'PH', 'KPÖ', 'SÖZ', 'HERZ', 'STRACHE', 'LINKS', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [26, 10, 9, 4, 3, 2, 1, 0, 1, 0, 0, 1, 1],
                backgroundColor: [PartyColoursTransAT.SPOE, PartyColoursTransAT.OEVP, PartyColoursTransAT.GRUENE, PartyColoursTransAT.FPOE, PartyColoursTransAT.NEOS, PartyColoursTransAT.THC, "rgba(170, 170, 170, 0.5)", PartyColoursTransAT.KPOE, PartyColoursTransAT.SOEZ, "rgba(170, 170, 170, 0.5)", "rgba(170, 170, 170, 0.5)", PartyColoursTransAT.LINKS, PartyColoursTransAT.BIER],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [42.0, 16.85, 15.91, 6.85, 5.84, 3.21, 3.06, 2.46, 1.77, 0, 0],
                backgroundColor: [PartyColoursAT.SPOE, PartyColoursAT.OEVP, PartyColoursAT.GRUENE, PartyColoursAT.FPOE, PartyColoursAT.NEOS, PartyColoursAT.THC, "rgb(170, 170, 170)", PartyColoursAT.KPOE, PartyColoursAT.SOEZ, "rgb(170, 170, 170)", "rgb(170, 170, 170)", PartyColoursAT.LINKS, PartyColoursAT.BIER],
            },
        ],
    },
    {
        labels: ['ÖVP', 'SPÖ', 'GRÜNE', 'NEOS', 'FPÖ', 'HC', 'KPÖ'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [19, 10, 6, 4, 1, 0, 0],
                backgroundColor: [PartyColoursTransAT.OEVP, PartyColoursTransAT.SPOE, PartyColoursTransAT.GRUENE, PartyColoursTransAT.NEOS, PartyColoursTransAT.FPOE, PartyColoursTransAT.THC, PartyColoursTransAT.KPOE],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [44.25, 22.28, 15.06, 8.87, 3.9, 1.76, 1.23],
                backgroundColor: [PartyColoursAT.OEVP, PartyColoursAT.SPOE, PartyColoursAT.GRUENE, PartyColoursAT.NEOS, PartyColoursAT.FPOE, PartyColoursAT.THC, PartyColoursAT.KPOE],
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'GRÜNE', 'NEOS', 'FPÖ', 'HC', 'KPÖ', 'SÖZ', 'FAIR', 'BIER', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [22, 14, 10, 4, 3, 1, 0, 0, 0, 1, 1],
                backgroundColor: [PartyColoursTransAT.SPOE, PartyColoursTransAT.OEVP, PartyColoursTransAT.GRUENE, PartyColoursTransAT.NEOS, PartyColoursTransAT.FPOE, PartyColoursTransAT.THC, PartyColoursTransAT.KPOE, PartyColoursTransAT.SOEZ, "rgba(170, 170, 170, 0.5)", PartyColoursTransAT.BIER, PartyColoursTransAT.LINKS],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [36.94, 23.57, 18.32, 7.44, 6.44, 2.53, 1.96, 0.85, 0],
                backgroundColor: [PartyColoursAT.SPOE, PartyColoursAT.OEVP, PartyColoursAT.GRUENE, PartyColoursAT.NEOS, PartyColoursAT.FPOE, PartyColoursAT.THC, PartyColoursAT.KPOE, PartyColoursAT.SOEZ, "rgb(170, 170, 170)", PartyColoursAT.BIER, PartyColoursAT.LINKS],
            },
        ],
    },
    {
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'FPÖ', 'KPÖ', 'NEOS', 'HC', 'SÖZ', 'HERZ', 'PDA', 'LINKS', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [20, 12, 7, 3, 0, 2, 1, 1, 0, 0, 3, 1],
                backgroundColor: [PartyColoursTransAT.SPOE, PartyColoursTransAT.GRUENE, PartyColoursTransAT.OEVP, PartyColoursTransAT.FPOE, PartyColoursTransAT.KPOE, PartyColoursTransAT.NEOS, PartyColoursTransAT.THC, PartyColoursTransAT.SOEZ, "rgba(170, 170, 170, 0.5)", "rgba(170, 170, 170, 0.5)", PartyColoursTransAT.LINKS, PartyColoursTransAT.BIER],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [38.53, 23.89, 13.4, 6.12, 5.71, 5.49, 2.62, 1.88, 0, 0],
                backgroundColor: [PartyColoursAT.SPOE, PartyColoursAT.GRUENE, PartyColoursAT.OEVP, PartyColoursAT.FPOE, PartyColoursAT.KPOE, PartyColoursAT.NEOS, PartyColoursAT.THC, PartyColoursAT.SOEZ, "rgb(170, 170, 170)", "rgb(170, 170, 170)", PartyColoursAT.LINKS, PartyColoursAT.BIER],
            },
        ],
    },
    {
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ', 'LINKS', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [25, 13, 11, 3, 3, 0, 1, 1, 0, 2, 1],
                backgroundColor: [PartyColoursTransAT.SPOE, PartyColoursTransAT.GRUENE, PartyColoursTransAT.OEVP, PartyColoursTransAT.NEOS, PartyColoursTransAT.FPOE, PartyColoursTransAT.KPOE, PartyColoursTransAT.THC, PartyColoursTransAT.SOEZ, "rgba(170, 170, 170, 0.5)", PartyColoursTransAT.LINKS, PartyColoursTransAT.BIER],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [39.03, 20.01, 16.83, 6.07, 6.02, 4.33, 2.82, 1.95, 0],
                backgroundColor: [PartyColoursAT.SPOE, PartyColoursAT.GRUENE, PartyColoursAT.OEVP, PartyColoursAT.NEOS, PartyColoursAT.FPOE, PartyColoursAT.KPOE, PartyColoursAT.THC, PartyColoursAT.SOEZ, "rgb(170, 170, 170)", PartyColoursAT.LINKS, PartyColoursAT.BIER],
            },
        ],
    },
    {
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'dbö', 'LINKS'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [15, 11, 8, 3, 2, 0, 0, 0, 0, 1],
                backgroundColor: [PartyColoursTransAT.SPOE, PartyColoursTransAT.GRUENE, PartyColoursTransAT.OEVP, PartyColoursTransAT.NEOS, PartyColoursTransAT.FPOE, PartyColoursTransAT.KPOE, PartyColoursTransAT.THC, PartyColoursTransAT.SOEZ, "rgba(170, 170, 170, 0.5)", PartyColoursTransAT.LINKS],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [33.21, 24.28, 19.71, 8.28, 5.56, 3.96, 2.06, 1.24, 0],
                backgroundColor: [PartyColoursAT.SPOE, PartyColoursAT.GRUENE, PartyColoursAT.OEVP, PartyColoursAT.NEOS, PartyColoursAT.FPOE, PartyColoursAT.KPOE, PartyColoursAT.THC, PartyColoursAT.SOEZ, "rgb(170, 170, 170)", PartyColoursAT.LINKS],
            },
        ],
    },
    {
        labels: ['GRÜNE', 'ÖVP', 'SPÖ', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'WIR'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [17, 12, 7, 3, 1, 0, 0, 0],
                backgroundColor: [PartyColoursTransAT.GRUENE, PartyColoursTransAT.OEVP, PartyColoursTransAT.SPOE, PartyColoursTransAT.NEOS, PartyColoursTransAT.FPOE, PartyColoursTransAT.KPOE, PartyColoursTransAT.THC, "rgba(170, 170, 170, 0.5)"],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [38.7, 27.48, 17.86, 8.07, 2.74, 2.14, 1.24, 0],
                backgroundColor: [PartyColoursAT.GRUENE, PartyColoursAT.OEVP, PartyColoursAT.SPOE, PartyColoursAT.NEOS, PartyColoursAT.FPOE, PartyColoursAT.KPOE, PartyColoursAT.THC, "rgb(170, 170, 170)"],
            },
        ],
    },
    {
        labels: ['ÖVP', 'SPÖ', 'GRÜNE', 'NEOS', 'FPÖ', 'HC', 'KPÖ'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [19, 14, 8, 5, 2, 0, 0],
                backgroundColor: [PartyColoursTransAT.OEVP, PartyColoursTransAT.SPOE, PartyColoursTransAT.GRUENE, PartyColoursTransAT.NEOS, PartyColoursTransAT.FPOE, PartyColoursTransAT.THC, PartyColoursTransAT.KPOE],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [36.89, 26.92, 16.02, 9.77, 5.1, 1.88, 1.42],
                backgroundColor: [PartyColoursAT.OEVP, PartyColoursAT.SPOE, PartyColoursAT.GRUENE, PartyColoursAT.NEOS, PartyColoursAT.FPOE, PartyColoursAT.THC, PartyColoursAT.KPOE],
            },
        ],
    },
    {
        labels: ['SPÖ', 'GRÜNE', 'ÖVP', 'FPÖ', 'NEOS', 'KPÖ', 'HC', 'SÖZ', 'LINKS', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [27, 10, 8, 4, 2, 0, 1, 1, 2, 1],
                backgroundColor: [PartyColoursTransAT.SPOE, PartyColoursTransAT.GRUENE, PartyColoursTransAT.OEVP, PartyColoursTransAT.FPOE, PartyColoursTransAT.NEOS, PartyColoursTransAT.KPOE, PartyColoursTransAT.THC, PartyColoursTransAT.SOEZ, PartyColoursTransAT.LINKS, PartyColoursTransAT.BIER],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [45.02, 17.27, 14.78, 7.35, 4.99, 3.64, 3.1, 1.77],
                backgroundColor: [PartyColoursAT.SPOE, PartyColoursAT.GRUENE, PartyColoursAT.OEVP, PartyColoursAT.FPOE, PartyColoursAT.NEOS, PartyColoursAT.KPOE, PartyColoursAT.THC, PartyColoursAT.SOEZ, PartyColoursAT.LINKS, PartyColoursAT.BIER],
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'FPÖ', 'GRÜNE', 'WIFF', 'NEOS', 'HC', 'SÖZ', 'KPÖ', 'LMP', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [29, 11, 6, 5, 3, 3, 2, 0, 0, 0, 1],
                backgroundColor: [PartyColoursTransAT.SPOE, PartyColoursTransAT.OEVP, PartyColoursTransAT.FPOE, PartyColoursTransAT.GRUENE, "rgba(170, 170, 170, 0.5)", PartyColoursTransAT.NEOS, PartyColoursTransAT.THC, PartyColoursTransAT.SOEZ, PartyColoursTransAT.KPOE, "rgba(170, 170, 170, 0.5)", PartyColoursTransAT.BIER],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [44.52, 18.11, 9.64, 9.19, 5.23, 4.65, 4.46, 1.03, 0.89, 0],
                backgroundColor: [PartyColoursAT.SPOE, PartyColoursAT.OEVP, PartyColoursAT.FPOE, PartyColoursAT.GRUENE, "rgb(170, 170, 170)", PartyColoursAT.NEOS, PartyColoursAT.THC, PartyColoursAT.SOEZ, PartyColoursAT.KPOE, "rgb(170, 170, 170)", PartyColoursAT.BIER],
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'GRÜNE', 'FPÖ', 'NEOS', 'HC', 'KPÖ', 'SÖZ', 'LMP', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [29, 12, 7, 6, 3, 2, 0, 0, 0, 1],
                backgroundColor: [PartyColoursTransAT.SPOE, PartyColoursTransAT.OEVP, PartyColoursTransAT.GRUENE, PartyColoursTransAT.FPOE, PartyColoursTransAT.NEOS, PartyColoursTransAT.THC, PartyColoursTransAT.KPOE, PartyColoursTransAT.SOEZ, "rgba(170, 170, 170, 0.5)", PartyColoursTransAT.BIER],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [45.08, 19.81, 10.99, 9.76, 5.98, 3.86, 1.22, 1.01, 0],
                backgroundColor: [PartyColoursAT.SPOE, PartyColoursAT.OEVP, PartyColoursAT.GRUENE, PartyColoursAT.FPOE, PartyColoursAT.NEOS, PartyColoursAT.THC, PartyColoursAT.KPOE, PartyColoursAT.SOEZ, "rgb(170, 170, 170)", PartyColoursAT.BIER],
            },
        ],
    },
    {
        labels: ['SPÖ', 'ÖVP', 'GRÜNE', 'FPÖ', 'NEOS', 'HC', 'PRO', 'KPÖ', 'SÖZ', 'BIER'],
        datasets: [
            {
                label: 'Mandate (2020)',
                data: [26, 14, 7, 5, 4, 2, 1, 0, 0, 1],
                backgroundColor: [PartyColoursTransAT.SPOE, PartyColoursTransAT.OEVP, PartyColoursTransAT.GRUENE, PartyColoursTransAT.FPOE, PartyColoursTransAT.NEOS, PartyColoursTransAT.THC, "rgba(170, 170, 170, 0.5)", PartyColoursTransAT.KPOE, PartyColoursTransAT.SOEZ, PartyColoursTransAT.BIER],
                weight: 0.4,
            },
            {
                label: 'Mandate',
                data: [40.4, 22.85, 12.16, 7.99, 7.28, 3.16, 2.28, 1.0, 0.96],
                backgroundColor: [PartyColoursAT.SPOE, PartyColoursAT.OEVP, PartyColoursAT.GRUENE, PartyColoursAT.FPOE, PartyColoursAT.NEOS, PartyColoursAT.THC, "rgb(170, 170, 170)", PartyColoursAT.KPOE, PartyColoursAT.SOEZ, PartyColoursAT.BIER],
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
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'SPÖ',
                "data": [22.97],
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'GRÜNE',
                "data": [17.38],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'NEOS',
                "data": [11.06],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'FPÖ',
                "data": [4.85],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'KPÖ',
                "data": [1.62],
                "backgroundColor": PartyColoursAT.KPOE
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
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'GRÜNE',
                "data": [30.56],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'ÖVP',
                "data": [12.44],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'NEOS',
                "data": [6.63],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'FPÖ',
                "data": [5.03],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'KPÖ',
                "data": [4.45],
                "backgroundColor": PartyColoursAT.KPOE
            },
            {
                "label": 'HC',
                "data": [2.27],
                "backgroundColor": PartyColoursAT.THC
            },
            {
                "label": 'SÖZ',
                "data": [0.87],
                "backgroundColor": PartyColoursAT.SOEZ
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
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'GRÜNE',
                "data": [23.1],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'ÖVP',
                "data": [17.07],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'NEOS',
                "data": [8.8],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'FPÖ',
                "data": [4.73],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'KPÖ',
                "data": [3.73],
                "backgroundColor": PartyColoursAT.KPOE
            },
            {
                "label": 'HC',
                "data": [2.28],
                "backgroundColor": PartyColoursAT.THC
            },
            {
                "label": 'SÖZ',
                "data": [0.72],
                "backgroundColor": PartyColoursAT.SOEZ
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
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'GRÜNE',
                "data": [28.1],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'ÖVP',
                "data": [19.79],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'NEOS',
                "data": [8.63],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'KPÖ',
                "data": [3.66],
                "backgroundColor": PartyColoursAT.KPOE
            },
            {
                "label": 'FPÖ',
                "data": [3.44],
                "backgroundColor": PartyColoursAT.FPOE
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [35.31],
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'GRÜNE',
                "data": [28.22],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'ÖVP',
                "data": [13.84],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'NEOS',
                "data": [7.49],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'KPÖ',
                "data": [5.27],
                "backgroundColor": PartyColoursAT.KPOE
            },
            {
                "label": 'FPÖ',
                "data": [4.66],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'HC',
                "data": [1.95],
                "backgroundColor": PartyColoursAT.THC
            },
            {
                "label": 'SÖZ',
                "data": [1.05],
                "backgroundColor": PartyColoursAT.SOEZ
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [37.2],
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'GRÜNE',
                "data": [30.43],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'ÖVP',
                "data": [14.87],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'NEOS',
                "data": [7.05],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'KPÖ',
                "data": [3.81],
                "backgroundColor": PartyColoursAT.KPOE
            },
            {
                "label": 'FPÖ',
                "data": [3.58],
                "backgroundColor": PartyColoursAT.FPOE
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'GRÜNE',
                "data": [44.91],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'SPÖ',
                "data": [20.6],
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'ÖVP',
                "data": [13.72],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'NEOS',
                "data": [7.87],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'KPÖ',
                "data": [4.76],
                "backgroundColor": PartyColoursAT.KPOE
            },
            {
                "label": 'FPÖ',
                "data": [2.98],
                "backgroundColor": PartyColoursAT.FPOE
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
                "label": 'GRÜNE',
                "data": [33.59],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'ÖVP',
                "data": [30.55],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'SPÖ',
                "data": [18.58],
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'NEOS',
                "data": [7.25],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'KPÖ',
                "data": [4.01],
                "backgroundColor": PartyColoursAT.KPOE
            },
            {
                "label": 'FPÖ',
                "data": [3.4],
                "backgroundColor": PartyColoursAT.FPOE
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [31.45],
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'GRÜNE',
                "data": [29.21],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'ÖVP',
                "data": [18.32],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'NEOS',
                "data": [9.57],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'KPÖ',
                "data": [4.38],
                "backgroundColor": PartyColoursAT.KPOE
            },
            {
                "label": 'FPÖ',
                "data": [3.66],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'HC',
                "data": [1.26],
                "backgroundColor": PartyColoursAT.THC
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
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'ÖVP',
                "data": [18.0],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'FPÖ',
                "data": [10.52],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'GRÜNE',
                "data": [8.98],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'HC',
                "data": [4.32],
                "backgroundColor": PartyColoursAT.THC
            },
            {
                "label": 'NEOS',
                "data": [4.15],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'SÖZ',
                "data": [3.17],
                "backgroundColor": PartyColoursAT.SOEZ
            },
            {
                "label": 'KPÖ',
                "data": [1.57],
                "backgroundColor": PartyColoursAT.KPOE
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
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'FPÖ',
                "data": [28.44],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'ÖVP',
                "data": [11.3],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'GRÜNE',
                "data": [6.72],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'NEOS',
                "data": [3.53],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'HC',
                "data": [2.99],
                "backgroundColor": PartyColoursAT.THC
            },
            {
                "label": 'SÖZ',
                "data": [2.12],
                "backgroundColor": PartyColoursAT.SOEZ
            },
            {
                "label": 'KPÖ',
                "data": [1.1],
                "backgroundColor": PartyColoursAT.KPOE
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [42.0],
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'ÖVP',
                "data": [16.85],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'GRÜNE',
                "data": [15.91],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'FPÖ',
                "data": [6.85],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'NEOS',
                "data": [5.84],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'HC',
                "data": [3.21],
                "backgroundColor": PartyColoursAT.THC
            },
            {
                "label": 'PH',
                "data": [3.06],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
            {
                "label": 'KPÖ',
                "data": [2.46],
                "backgroundColor": PartyColoursAT.KPOE
            },
            {
                "label": 'SÖZ',
                "data": [1.77],
                "backgroundColor": PartyColoursAT.SOEZ
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
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'SPÖ',
                "data": [22.28],
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'GRÜNE',
                "data": [15.06],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'NEOS',
                "data": [8.87],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'FPÖ',
                "data": [3.9],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'HC',
                "data": [1.76],
                "backgroundColor": PartyColoursAT.THC
            },
            {
                "label": 'KPÖ',
                "data": [1.23],
                "backgroundColor": PartyColoursAT.KPOE
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [36.94],
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'ÖVP',
                "data": [23.57],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'GRÜNE',
                "data": [18.32],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'NEOS',
                "data": [7.44],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'FPÖ',
                "data": [6.44],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'HC',
                "data": [2.53],
                "backgroundColor": PartyColoursAT.THC
            },
            {
                "label": 'KPÖ',
                "data": [1.96],
                "backgroundColor": PartyColoursAT.KPOE
            },
            {
                "label": 'SÖZ',
                "data": [0.85],
                "backgroundColor": PartyColoursAT.SOEZ
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
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'GRÜNE',
                "data": [23.89],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'ÖVP',
                "data": [13.4],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'FPÖ',
                "data": [6.12],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'KPÖ',
                "data": [5.71],
                "backgroundColor": PartyColoursAT.KPOE
            },
            {
                "label": 'NEOS',
                "data": [5.49],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'HC',
                "data": [2.62],
                "backgroundColor": PartyColoursAT.THC
            },
            {
                "label": 'SÖZ',
                "data": [1.88],
                "backgroundColor": PartyColoursAT.SOEZ
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
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'GRÜNE',
                "data": [20.01],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'ÖVP',
                "data": [16.83],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'NEOS',
                "data": [6.07],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'FPÖ',
                "data": [6.02],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'KPÖ',
                "data": [4.33],
                "backgroundColor": PartyColoursAT.KPOE
            },
            {
                "label": 'HC',
                "data": [2.82],
                "backgroundColor": PartyColoursAT.THC
            },
            {
                "label": 'SÖZ',
                "data": [1.95],
                "backgroundColor": PartyColoursAT.SOEZ
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
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'GRÜNE',
                "data": [24.28],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'ÖVP',
                "data": [19.71],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'NEOS',
                "data": [8.28],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'FPÖ',
                "data": [5.56],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'KPÖ',
                "data": [3.96],
                "backgroundColor": PartyColoursAT.KPOE
            },
            {
                "label": 'HC',
                "data": [2.06],
                "backgroundColor": PartyColoursAT.THC
            },
            {
                "label": 'SÖZ',
                "data": [1.24],
                "backgroundColor": PartyColoursAT.SOEZ
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
                "label": 'GRÜNE',
                "data": [38.7],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'ÖVP',
                "data": [27.48],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'SPÖ',
                "data": [17.86],
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'NEOS',
                "data": [8.07],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'FPÖ',
                "data": [2.74],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'KPÖ',
                "data": [2.14],
                "backgroundColor": PartyColoursAT.KPOE
            },
            {
                "label": 'HC',
                "data": [1.24],
                "backgroundColor": PartyColoursAT.THC
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
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'SPÖ',
                "data": [26.92],
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'GRÜNE',
                "data": [16.02],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'NEOS',
                "data": [9.77],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'FPÖ',
                "data": [5.1],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'HC',
                "data": [1.88],
                "backgroundColor": PartyColoursAT.THC
            },
            {
                "label": 'KPÖ',
                "data": [1.42],
                "backgroundColor": PartyColoursAT.KPOE
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [45.02],
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'GRÜNE',
                "data": [17.27],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'ÖVP',
                "data": [14.78],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'FPÖ',
                "data": [7.35],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'NEOS',
                "data": [4.99],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'KPÖ',
                "data": [3.64],
                "backgroundColor": PartyColoursAT.KPOE
            },
            {
                "label": 'HC',
                "data": [3.1],
                "backgroundColor": PartyColoursAT.THC
            },
            {
                "label": 'SÖZ',
                "data": [1.77],
                "backgroundColor": PartyColoursAT.SOEZ
            },
        ],
    },
    {
        labels: ['Mandate'],
        datasets: [
            {
                "label": 'SPÖ',
                "data": [44.52],
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'ÖVP',
                "data": [18.11],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'FPÖ',
                "data": [9.64],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'GRÜNE',
                "data": [9.19],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'WIFF',
                "data": [5.23],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
            {
                "label": 'NEOS',
                "data": [4.65],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'HC',
                "data": [4.46],
                "backgroundColor": PartyColoursAT.THC
            },
            {
                "label": 'SÖZ',
                "data": [1.03],
                "backgroundColor": PartyColoursAT.SOEZ
            },
            {
                "label": 'KPÖ',
                "data": [0.89],
                "backgroundColor": PartyColoursAT.KPOE
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
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'ÖVP',
                "data": [19.81],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'GRÜNE',
                "data": [10.99],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'FPÖ',
                "data": [9.76],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'NEOS',
                "data": [5.98],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'HC',
                "data": [3.86],
                "backgroundColor": PartyColoursAT.THC
            },
            {
                "label": 'KPÖ',
                "data": [1.22],
                "backgroundColor": PartyColoursAT.KPOE
            },
            {
                "label": 'SÖZ',
                "data": [1.01],
                "backgroundColor": PartyColoursAT.SOEZ
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
                "backgroundColor": PartyColoursAT.SPOE
            },
            {
                "label": 'ÖVP',
                "data": [22.85],
                "backgroundColor": PartyColoursAT.OEVP
            },
            {
                "label": 'GRÜNE',
                "data": [12.16],
                "backgroundColor": PartyColoursAT.GRUENE
            },
            {
                "label": 'FPÖ',
                "data": [7.99],
                "backgroundColor": PartyColoursAT.FPOE
            },
            {
                "label": 'NEOS',
                "data": [7.28],
                "backgroundColor": PartyColoursAT.NEOS
            },
            {
                "label": 'HC',
                "data": [3.16],
                "backgroundColor": PartyColoursAT.THC
            },
            {
                "label": 'PRO',
                "data": [2.28],
                "backgroundColor": 'rgb(170, 170, 170)'
            },
            {
                "label": 'KPÖ',
                "data": [1.0],
                "backgroundColor": PartyColoursAT.KPOE
            },
            {
                "label": 'SÖZ',
                "data": [0.96],
                "backgroundColor": PartyColoursAT.SOEZ
            },
        ],
    },
]
