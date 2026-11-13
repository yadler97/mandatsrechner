export const name = 'Bezirksvertretungswahlen Wien 2025';
export const date = ['2025-04-27'];
export const lastDate = ['2020-10-11'];
export const countryCode = 'AT';

export const data = [
	// 1. Innere Stadt
	{
		partyOrder: ['ÖVP', 'SPÖ', 'Grüne', 'NEOS', 'FPÖ', 'KPÖ', 'BESTE'],
		mandateOrder: ['ÖVP', 'SPÖ', 'Grüne', 'NEOS', 'FPÖ', 'KPÖ', 'BESTE'],
		parties: {
			ÖVP:   { votes: 40.52, mandates: 17 },
			SPÖ:   { votes: 22.97, mandates: 10 },
			Grüne: { votes: 17.38, mandates: 7 },
			NEOS:  { votes: 11.06, mandates: 4 },
			FPÖ:   { votes: 4.85,  mandates: 2 },
			KPÖ:   { votes: 1.62,  mandates: 0 },
			BESTE: { votes: 0,     mandates: 0 },
		}
	},
	// 2. Leopoldstadt
	{
		partyOrder: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ'],
		mandateOrder: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ', 'LINKS'],
		parties: {
			SPÖ:   { votes: 35.38, mandates: 23 },
			Grüne: { votes: 30.56, mandates: 19 },
			ÖVP:   { votes: 12.44, mandates: 8 },
			NEOS:  { votes: 6.63,  mandates: 4 },
			FPÖ:   { votes: 5.03,  mandates: 3 },
			KPÖ:   { votes: 4.45,  mandates: 0 },
			HC:    { votes: 2.27,  mandates: 1 },
			SÖZ:   { votes: 0.87,  mandates: 0 },
			HERZ:  { votes: 0,     mandates: 0 },
			LINKS: { historicalMandates: 2 },
		}
	},
	// 3. Landstraße
	{
		partyOrder: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ', 'FREIE'],
		mandateOrder: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ', 'FREIE', 'LINKS', 'BIER'],
		parties: {
			SPÖ:   { votes: 37.02, mandates: 22 },
			Grüne: { votes: 23.1,  mandates: 13 },
			ÖVP:   { votes: 17.07, mandates: 10 },
			NEOS:  { votes: 8.8,   mandates: 5  },
			FPÖ:   { votes: 4.73,  mandates: 2  },
			KPÖ:   { votes: 3.73,  mandates: 0  },
			HC:    { votes: 2.28,  mandates: 1  },
			SÖZ:   { votes: 0.72,  mandates: 0  },
			HERZ:  { votes: 0,     mandates: 0  },
			FREIE: { votes: 0,     mandates: 0  },
			LINKS: { historicalMandates: 2 },
			BIER:  { historicalMandates: 1 },
		}
	},
	// 4. Wieden
	{
		partyOrder: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ'],
		mandateOrder: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'LINKS'],
		parties: {
			SPÖ:   { votes: 33.23, mandates: 15 },
			Grüne: { votes: 28.1,  mandates: 12 },
			ÖVP:   { votes: 19.79, mandates: 8 },
			NEOS:  { votes: 8.63,  mandates: 3 },
			KPÖ:   { votes: 3.66,  mandates: 0 },
			FPÖ:   { votes: 3.44,  mandates: 1 },
			LINKS: { historicalMandates: 1 },
		}
	},
	// 5. Margareten
	{
		partyOrder: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'HC', 'SÖZ'],
		mandateOrder: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'HC', 'SÖZ', 'LINKS'],
		parties: {
			SPÖ:   { votes: 35.31, mandates: 15 },
			Grüne: { votes: 28.22, mandates: 12 },
			ÖVP:   { votes: 13.84, mandates: 6 },
			NEOS:  { votes: 7.49,  mandates: 3 },
			KPÖ:   { votes: 5.27,  mandates: 0 },
			FPÖ:   { votes: 4.66,  mandates: 2 },
			HC:    { votes: 1.95,  mandates: 0 },
			SÖZ:   { votes: 1.05,  mandates: 0 },
			LINKS: { historicalMandates: 2 },
		}
	},
	// 6. Mariahilf
	{
		partyOrder: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ'],
		mandateOrder: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'LINKS'],
		parties: {
			SPÖ:   { votes: 37.2,  mandates: 16 },
			Grüne: { votes: 30.43, mandates: 13 },
			ÖVP:   { votes: 14.87, mandates: 6 },
			NEOS:  { votes: 7.05,  mandates: 3 },
			KPÖ:   { votes: 3.81,  mandates: 0 },
			FPÖ:   { votes: 3.58,  mandates: 1 },
			LINKS: { historicalMandates: 1 },
		}
	},
	// 7. Neubau
	{
		partyOrder: ['Grüne', 'SPÖ', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'VOLT'],
		mandateOrder: ['Grüne', 'SPÖ', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'VOLT', 'LINKS'],
		parties: {
			Grüne: { votes: 44.91, mandates: 19 },
			SPÖ:   { votes: 20.6,  mandates: 9 },
			ÖVP:   { votes: 13.72, mandates: 6 },
			NEOS:  { votes: 7.87,  mandates: 3 },
			KPÖ:   { votes: 4.76,  mandates: 0 },
			FPÖ:   { votes: 2.98,  mandates: 1 },
			VOLT:  { votes: 0.31,  mandates: 0, colourKey: 'rgb(138, 43, 226)' },
			LINKS: { historicalMandates: 2 },
		}
	},
	// 8. Josefstadt
	{
		partyOrder: ['Grüne', 'ÖVP', 'SPÖ', 'NEOS', 'KPÖ', 'FPÖ'],
		mandateOrder: ['Grüne', 'ÖVP', 'SPÖ', 'NEOS', 'KPÖ', 'FPÖ', 'LINKS'],
		parties: {
			Grüne: { votes: 33.59, mandates: 14 },
			ÖVP:   { votes: 30.55, mandates: 13 },
			SPÖ:   { votes: 18.58, mandates: 8 },
			NEOS:  { votes: 7.25,  mandates: 3 },
			KPÖ:   { votes: 4.01,  mandates: 0 },
			FPÖ:   { votes: 3.4,   mandates: 1 },
			LINKS: { historicalMandates: 1 },
		}
	},
	// 9. Alsergrund
	{
		partyOrder: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'HC', 'DWA'],
		mandateOrder: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'KPÖ', 'FPÖ', 'HC', 'DWA', 'LINKS'],
		parties: {
			SPÖ:   { votes: 31.45, mandates: 13 },
			Grüne: { votes: 29.21, mandates: 13 },
			ÖVP:   { votes: 18.32, mandates: 8 },
			NEOS:  { votes: 9.57,  mandates: 4 },
			KPÖ:   { votes: 4.38,  mandates: 0 },
			FPÖ:   { votes: 3.66,  mandates: 1 },
			HC:    { votes: 1.26,  mandates: 0 },
			DWA:   { votes: 0,     mandates: 0 },
			LINKS: { historicalMandates: 1 },
		}
	},
	// 10. Favoriten
	{
		partyOrder: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'HC', 'NEOS', 'SÖZ', 'KPÖ', 'HERZ', 'POSCH'],
		mandateOrder: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'HC', 'NEOS', 'SÖZ', 'KPÖ', 'HERZ', 'POSCH', 'LINKS', 'BIER'],
		parties: {
			SPÖ:   { votes: 47.4,  mandates: 30 },
			ÖVP:   { votes: 18.0,  mandates: 11 },
			FPÖ:   { votes: 10.52, mandates: 6 },
			Grüne: { votes: 8.98,  mandates: 5 },
			HC:    { votes: 4.32,  mandates: 2 },
			NEOS:  { votes: 4.15,  mandates: 2 },
			SÖZ:   { votes: 3.17,  mandates: 2 },
			KPÖ:   { votes: 1.57,  mandates: 0 },
			HERZ:  { votes: 0,     mandates: 0 },
			POSCH: { votes: 0,     mandates: 0 },
			LINKS: { historicalMandates: 1 },
			BIER:  { historicalMandates: 1 },
		}
	},
	// 11. Simmering
	{
		partyOrder: ['SPÖ', 'FPÖ', 'ÖVP', 'Grüne', 'NEOS', 'HC', 'SÖZ', 'KPÖ'],
		mandateOrder: ['SPÖ', 'FPÖ', 'ÖVP', 'Grüne', 'NEOS', 'HC', 'SÖZ', 'KPÖ', 'BIER'],
		parties: {
			SPÖ:   { votes: 41.49, mandates: 26 },
			FPÖ:   { votes: 28.44, mandates: 18 },
			ÖVP:   { votes: 11.3,  mandates: 7 },
			Grüne: { votes: 6.72,  mandates: 4 },
			NEOS:  { votes: 3.53,  mandates: 2 },
			HC:    { votes: 2.99,  mandates: 1 },
			SÖZ:   { votes: 2.12,  mandates: 1 },
			KPÖ:   { votes: 1.1,   mandates: 0 },
			BIER:  { historicalMandates: 1 },
		}
	},
	// 12. Meidling
	{
		partyOrder: ['SPÖ', 'ÖVP', 'Grüne', 'FPÖ', 'NEOS', 'HC', 'PH', 'KPÖ', 'SÖZ', 'HERZ', 'STRACHE'],
		mandateOrder: ['SPÖ', 'ÖVP', 'Grüne', 'FPÖ', 'NEOS', 'HC', 'PH', 'KPÖ', 'SÖZ', 'HERZ', 'STRACHE', 'LINKS', 'BIER'],
		parties: {
			SPÖ:     { votes: 42.0,   mandates: 26 },
			ÖVP:     { votes: 16.85,  mandates: 10 },
			Grüne:   { votes: 15.91,  mandates: 9 },
			FPÖ:     { votes: 6.85,   mandates: 4 },
			NEOS:    { votes: 5.84,   mandates: 3 },
			HC:      { votes: 3.21,   mandates: 2 },
			PH:      { votes: 3.06,   mandates: 1 },
			KPÖ:     { votes: 2.46,   mandates: 0 },
			SÖZ:     { votes: 1.77,   mandates: 1 },
			HERZ:    { votes: 0,      mandates: 0 },
			STRACHE: { votes: 0,      mandates: 0 },
			LINKS:   { historicalMandates: 1 },
			BIER:    { historicalMandates: 1 },
		}
	},
	// 13. Hietzing
	{
		partyOrder: ['ÖVP', 'SPÖ', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ'],
		mandateOrder: ['ÖVP', 'SPÖ', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ'],
		parties: {
			ÖVP:   { votes: 44.25, mandates: 19 },
			SPÖ:   { votes: 22.28, mandates: 10 },
			Grüne: { votes: 15.06, mandates: 6 },
			NEOS:  { votes: 8.87,  mandates: 4 },
			FPÖ:   { votes: 3.9,   mandates: 1 },
			HC:    { votes: 1.76,  mandates: 0 },
			KPÖ:   { votes: 1.23,  mandates: 0 },
		}
	},
	// 14. Penzing
	{
		partyOrder: ['SPÖ', 'ÖVP', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ', 'SÖZ', 'FAIR'],
		mandateOrder: ['SPÖ', 'ÖVP', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ', 'SÖZ', 'FAIR', 'LINKS', 'BIER'],
		parties: {
			SPÖ:   { votes: 36.94, mandates: 22 },
			ÖVP:   { votes: 23.57, mandates: 14 },
			Grüne: { votes: 18.32, mandates: 10 },
			NEOS:  { votes: 7.44,  mandates: 4 },
			FPÖ:   { votes: 6.44,  mandates: 3 },
			HC:    { votes: 2.53,  mandates: 1 },
			KPÖ:   { votes: 1.96,  mandates: 0 },
			SÖZ:   { votes: 0.85,  mandates: 0 },
			FAIR:  { votes: 0,     mandates: 0 },
			LINKS: { historicalMandates: 1 },
			BIER:  { historicalMandates: 1 },
		}
	},
	// 15. Rudolfsheim-Fünfhaus
	{
		partyOrder: ['SPÖ', 'Grüne', 'ÖVP', 'FPÖ', 'KPÖ', 'NEOS', 'HC', 'SÖZ', 'HERZ', 'PDA'],
		mandateOrder: ['SPÖ', 'Grüne', 'ÖVP', 'FPÖ', 'KPÖ', 'NEOS', 'HC', 'SÖZ', 'HERZ', 'PDA', 'LINKS', 'BIER'],
		parties: {
			SPÖ:   { votes: 38.53, mandates: 20 },
			Grüne: { votes: 23.89, mandates: 12 },
			ÖVP:   { votes: 13.4,  mandates: 7 },
			FPÖ:   { votes: 6.12,  mandates: 3 },
			KPÖ:   { votes: 5.71,  mandates: 0 },
			NEOS:  { votes: 5.49,  mandates: 2 },
			HC:    { votes: 2.62,  mandates: 1 },
			SÖZ:   { votes: 1.88,  mandates: 1 },
			HERZ:  { votes: 0,     mandates: 0 },
			PDA:   { votes: 0,     mandates: 0 },
			LINKS: { historicalMandates: 3 },
			BIER:  { historicalMandates: 1 },
		}
	},
	// 16. Ottakring
	{
		partyOrder: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ'],
		mandateOrder: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'HERZ', 'LINKS', 'BIER'],
		parties: {
			SPÖ:   { votes: 39.03, mandates: 25 },
			Grüne: { votes: 20.01, mandates: 13 },
			ÖVP:   { votes: 16.83, mandates: 11 },
			NEOS:  { votes: 6.07,  mandates: 3 },
			FPÖ:   { votes: 6.02,  mandates: 3 },
			KPÖ:   { votes: 4.33,  mandates: 0 },
			HC:    { votes: 2.82,  mandates: 1 },
			SÖZ:   { votes: 1.95,  mandates: 1 },
			HERZ:  { votes: 0,     mandates: 0 },
			LINKS: { historicalMandates: 2 },
			BIER:  { historicalMandates: 1 },
		}
	},
	// 17. Hernals
	{
		partyOrder: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'dbö'],
		mandateOrder: ['SPÖ', 'Grüne', 'ÖVP', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'SÖZ', 'dbö', 'LINKS'],
		parties: {
			SPÖ:   { votes: 33.21, mandates: 15 },
			Grüne: { votes: 24.28, mandates: 11 },
			ÖVP:   { votes: 19.71, mandates: 8 },
			NEOS:  { votes: 8.28,  mandates: 3 },
			FPÖ:   { votes: 5.56,  mandates: 2 },
			KPÖ:   { votes: 3.96,  mandates: 0 },
			HC:    { votes: 2.06,  mandates: 0 },
			SÖZ:   { votes: 1.24,  mandates: 0 },
			dbö:   { votes: 0,     mandates: 0 },
			LINKS: { historicalMandates: 1 },
		}
	},
	// 18. Währing
	{
		partyOrder: ['Grüne', 'ÖVP', 'SPÖ', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'WIR'],
		mandateOrder: ['Grüne', 'ÖVP', 'SPÖ', 'NEOS', 'FPÖ', 'KPÖ', 'HC', 'WIR'],
		parties: {
			Grüne: { votes: 38.7,  mandates: 17 },
			ÖVP:   { votes: 27.48, mandates: 12 },
			SPÖ:   { votes: 17.86, mandates: 7 },
			NEOS:  { votes: 8.07,  mandates: 3 },
			FPÖ:   { votes: 2.74,  mandates: 1 },
			KPÖ:   { votes: 2.14,  mandates: 0 },
			HC:    { votes: 1.24,  mandates: 0 },
			WIR:   { votes: 0,     mandates: 0 },
		}
	},
	// 19. Döbling
	{
		partyOrder: ['ÖVP', 'SPÖ', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ'],
		mandateOrder: ['ÖVP', 'SPÖ', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ'],
		parties: {
			ÖVP:   { votes: 36.89, mandates: 19 },
			SPÖ:   { votes: 26.92, mandates: 14 },
			Grüne: { votes: 16.02, mandates: 8 },
			NEOS:  { votes: 9.77,  mandates: 5 },
			FPÖ:   { votes: 5.1,   mandates: 2 },
			HC:    { votes: 1.88,  mandates: 0 },
			KPÖ:   { votes: 1.42,  mandates: 0 },
		}
	},
	// 20. Brigittenau
	{
		partyOrder: ['SPÖ', 'Grüne', 'ÖVP', 'FPÖ', 'NEOS', 'KPÖ', 'HC', 'SÖZ'],
		mandateOrder: ['SPÖ', 'Grüne', 'ÖVP', 'FPÖ', 'NEOS', 'KPÖ', 'HC', 'SÖZ', 'LINKS', 'BIER'],
		parties: {
			SPÖ:   { votes: 45.02, mandates: 27 },
			Grüne: { votes: 17.27, mandates: 10 },
			ÖVP:   { votes: 14.78, mandates: 8 },
			FPÖ:   { votes: 7.35,  mandates: 4 },
			NEOS:  { votes: 4.99,  mandates: 2 },
			KPÖ:   { votes: 3.64,  mandates: 0 },
			HC:    { votes: 3.1,   mandates: 1 },
			SÖZ:   { votes: 1.77,  mandates: 1 },
			LINKS: { historicalMandates: 2 },
			BIER:  { historicalMandates: 1 },
		}
	},
	// 21. Floridsdorf
	{
		partyOrder: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'WIFF', 'NEOS', 'HC', 'SÖZ', 'KPÖ', 'LMP'],
		mandateOrder: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'WIFF', 'NEOS', 'HC', 'SÖZ', 'KPÖ', 'LMP', 'BIER'],
		parties: {
			SPÖ:   { votes: 44.52, mandates: 29 },
			ÖVP:   { votes: 18.11, mandates: 11 },
			FPÖ:   { votes: 9.64,  mandates: 6 },
			Grüne: { votes: 9.19,  mandates: 5 },
			WIFF:  { votes: 5.23,  mandates: 3 },
			NEOS:  { votes: 4.65,  mandates: 3 },
			HC:    { votes: 4.46,  mandates: 2 },
			SÖZ:   { votes: 1.03,  mandates: 0 },
			KPÖ:   { votes: 0.89,  mandates: 0 },
			LMP:   { votes: 0,     mandates: 0 },
			BIER:  { historicalMandates: 1 },
		}
	},
	// 22. Donaustadt
	{
		partyOrder: ['SPÖ', 'ÖVP', 'Grüne', 'FPÖ', 'NEOS', 'HC', 'KPÖ', 'SÖZ', 'LMP'],
		mandateOrder: ['SPÖ', 'ÖVP', 'Grüne', 'FPÖ', 'NEOS', 'HC', 'KPÖ', 'SÖZ', 'LMP', 'BIER'],
		parties: {
			SPÖ:   { votes: 45.08, mandates: 29 },
			ÖVP:   { votes: 19.81, mandates: 12 },
			Grüne: { votes: 10.99, mandates: 7 },
			FPÖ:   { votes: 9.76,  mandates: 6 },
			NEOS:  { votes: 5.98,  mandates: 3 },
			HC:    { votes: 3.86,  mandates: 2 },
			KPÖ:   { votes: 1.22,  mandates: 0 },
			SÖZ:   { votes: 1.01,  mandates: 0 },
			LMP:   { votes: 0,     mandates: 0 },
			BIER:  { historicalMandates: 1 },
		}
	},
	// 23. Liesing
	{
		partyOrder: ['SPÖ', 'ÖVP', 'Grüne', 'FPÖ', 'NEOS', 'HC', 'PRO', 'KPÖ', 'SÖZ'],
		mandateOrder: ['SPÖ', 'ÖVP', 'Grüne', 'FPÖ', 'NEOS', 'HC', 'PRO', 'KPÖ', 'SÖZ', 'BIER'],
		parties: {
			SPÖ:   { votes: 40.4,  mandates: 26 },
			ÖVP:   { votes: 22.85, mandates: 14 },
			Grüne: { votes: 12.16, mandates: 7 },
			FPÖ:   { votes: 7.99,  mandates: 5 },
			NEOS:  { votes: 7.28,  mandates: 4 },
			HC:    { votes: 3.16,  mandates: 2 },
			PRO:   { votes: 2.28,  mandates: 1 },
			KPÖ:   { votes: 1.0,   mandates: 0 },
			SÖZ:   { votes: 0.96,  mandates: 0 },
			BIER:  { historicalMandates: 1 },
		}
	}
];