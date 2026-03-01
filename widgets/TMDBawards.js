/**
 * @file oscars-97.js
 * @description Forward widget for the 97th Academy Awards (2025).
 * Static data, no API key required. All IDs verified against TMDB.
 * @version 2.0.0
 */

WidgetMetadata = {
    id: "tmdboscars",
    title: "🏆歷屆奥斯卡金像奖🏆",
    version: "2.2.0",
    requiredVersion: "0.0.1",
    description: "奥斯卡是由美國電影藝術與科學學院（AMPAS）主辦的年度電影盛事，自1929年起表彰優秀電影創作，是全球影壇最受矚目的榮譽之一。",
    author: "ForwardWidget",
    modules: [
        {
            id: "oscars",
            title: "歷届奥斯卡",
            functionName: "getOscars",
            cacheDuration: 86400,
            params: [
                {
                    name: "category",
                    title: "屆數",
                    type: "enumeration",
                    value: "all",                          // ✅ Fix 3: 改為 "all" 與 enumOptions 對應
                    enumOptions: [
                        { title: "98th", value: "98" },
                        { title: "97th", value: "97" },
                        { title: "96th", value: "96" }
                    ]
                }
            ]
        }
    ]
};

// ─────────────────────────────────────────────
// 98th全部作品
// ─────────────────────────────────────────────
const Oscars98 = [
    { id: "701387",  year: 2026, title: "Bugonia",                                ceremony: 98 },
    { id: "911430",  year: 2026, title: "F1",                                     ceremony: 98 },
    { id: "1062722", year: 2026, title: "Frankenstein",                           ceremony: 98 },
    { id: "858024",  year: 2026, title: "Hamnet",                                 ceremony: 98 },
    { id: "1317288", year: 2026, title: "Marty Supreme",                          ceremony: 98 },
    { id: "1054867", year: 2026, title: "One Battle After Another",               ceremony: 98 },
    { id: "1220564", year: 2026, title: "The Secret Agent",                       ceremony: 98 },
    { id: "1124566", year: 2026, title: "Sentimental Value",                      ceremony: 98 },
    { id: "1233413", year: 2026, title: "Sinners",                                ceremony: 98 },
    { id: "1241983", year: 2026, title: "Train Dreams",                           ceremony: 98 },
    { id: "1299655", year: 2026, title: "Blue Moon",                              ceremony: 98 },
    { id: "1456349", year: 2026, title: "It Was Just an Accident",                ceremony: 98 },
    { id: "804370",  year: 2026, title: "Arco",                                   ceremony: 98 },
    { id: "1022787", year: 2026, title: "Elio",                                   ceremony: 98 },
    { id: "803796",  year: 2026, title: "KPop Demon Hunters",                     ceremony: 98 },
    { id: "682012",  year: 2026, title: "Little Amélie or the Character of Rain", ceremony: 98 },
    { id: "1084242", year: 2026, title: "Zootopia 2",                             ceremony: 98 },
    { id: "1151272", year: 2026, title: "Sirât",                                  ceremony: 98 },
    { id: "1480382", year: 2026, title: "The Voice of Hind Rajab",                ceremony: 98 },
    { id: "826338",  year: 2026, title: "Diane Warren: Relentless",               ceremony: 98 },
    { id: "1358554", year: 2026, title: "Viva Verdi!",                            ceremony: 98 },
    { id: "1379266", year: 2026, title: "Kokuho",                                 ceremony: 98 },
    { id: "760329",  year: 2026, title: "The Smashing Machine",                   ceremony: 98 },
    { id: "1284120", year: 2026, title: "The Ugly Stepsister",                    ceremony: 98 },
    { id: "83533",   year: 2026, title: "Avatar: Fire and Ash",                   ceremony: 98 },
    { id: "1234821", year: 2026, title: "Jurassic World Rebirth",                 ceremony: 98 },
    { id: "1236470", year: 2026, title: "The Lost Bus",                           ceremony: 98 },
]; 
// ─────────────────────────────────────────────
// 97th全部作品
// ─────────────────────────────────────────────
const Oscars97 = [
    { id: "1064213", year: 2025, title: "Anora",                                  ceremony: 97 },
    { id: "549509",  year: 2025, title: "The Brutalist",                          ceremony: 97 },
    { id: "661539",  year: 2025, title: "A Complete Unknown",                     ceremony: 97 },
    { id: "974576",  year: 2025, title: "Conclave",                               ceremony: 97 },
    { id: "693134",  year: 2025, title: "Dune: Part Two",                         ceremony: 97 },
    { id: "974950",  year: 2025, title: "Emilia Pérez",                           ceremony: 97 },
    { id: "1000837", year: 2025, title: "I'm Still Here",                         ceremony: 97 },
    { id: "1028196", year: 2025, title: "Nickel Boys",                            ceremony: 97 },
    { id: "933260",  year: 2025, title: "The Substance",                          ceremony: 97 },
    { id: "402431",  year: 2025, title: "Wicked",                                 ceremony: 97 },
    { id: "1013850", year: 2025, title: "A Real Pain",                            ceremony: 97 },
    { id: "1211472", year: 2025, title: "September 5",                            ceremony: 97 },
    { id: "1155828", year: 2025, title: "Sing Sing",                              ceremony: 97 },
    { id: "823219",  year: 2025, title: "Flow",                                   ceremony: 97 }, 
    { id: "1022789", year: 2025, title: "Inside Out 2",                           ceremony: 97 },
    { id: "1064486", year: 2025, title: "Memoir of a Snail",                      ceremony: 97 }, 
    { id: "929204", year: 2025, title: "Wallace & Gromit: Vengeance Most Fowl",  ceremony: 97 }, 
    { id: "1184918", year: 2025, title: "The Wild Robot",                         ceremony: 97 }, 
    { id: "1278263", year: 2025, title: "The Seed of the Sacred Fig",             ceremony: 97 }, 
    { id: "1232827", year: 2025, title: "The Girl with the Needle",               ceremony: 97 },
    { id: "1061699", year: 2025, title: "The Six Triple Eight",                   ceremony: 97 },
    { id: "977326",  year: 2025, title: "Elton John: Never Too Late",             ceremony: 97 },
    { id: "426063",  year: 2025, title: "Nosferatu",                              ceremony: 97 },
    { id: "1038263", year: 2025, title: "Maria",                                  ceremony: 97 },
    { id: "989662", year: 2025, title: "A Different Man",                         ceremony: 97 },
    { id: "558449",  year: 2025, title: "Gladiator II",                           ceremony: 97 },
    { id: "945961",  year: 2025, title: "Alien: Romulus",                         ceremony: 97 },
    { id: "799766",  year: 2025, title: "Better Man",                             ceremony: 97 },
    { id: "653346",  year: 2025, title: "Kingdom of the Planet of the Apes",      ceremony: 97 },
];

// ─────────────────────────────────────────────
// 提名作品
// ─────────────────────────────────────────────
const const Oscars96 = [
	//Best Picture
	{ id: "872585", year: 2024, title: "Oppenheimer", ceremony: 96 },
	{ id: "840430", year: 2024, title: "The Holdovers", ceremony: 96 },
	{ id: "466420", year: 2024, title: "Killers of the Flower Moon", ceremony: 96 },
	{ id: "523607", year: 2024, title: "Maestro", ceremony: 96 },
	{ id: "666277", year: 2024, title: "Past Lives", ceremony: 96 },

	//Best Original Screenplay
	{ id: "915935", year: 2024, title: "Anatomy of a Fall", ceremony: 96 },
	{ id: "839369", year: 2024, title: "May December", ceremony: 96 },
	
	//Best Adapted Screenplay
	{ id: "1056360", year: 2024, title: "American Fiction", ceremony: 96 },

	//Best Animated Feature
	{ id: "508883", year: 2024, title: "The Boy and the Heron", ceremony: 96 },
	{ id: "976573", year: 2024, title: "Elemental", ceremony: 96 },
	{ id: "961323", year: 2024, title: "Nimona", ceremony: 96 },
	{ id: "838240", year: 2024, title: "Robot Dreams", ceremony: 96 },
	{ id: "569094", year: 2024, title: "Spider-Man: Across the Spider-Verse", ceremony: 96 },

	//Best International Feature	
	{ id: "467244", year: 2024, title: "The Zone of Interest", ceremony: 96 },
	{ id: "937746", year: 2024, title: "Io Capitano", ceremony: 96 },
	{ id: "976893", year: 2024, title: "Perfect Days", ceremony: 96 },
	{ id: "906126", year: 2024, title: "Society of the Snow", ceremony: 96 },
	{ id: "998022", year: 2024, title: "The Teachers' Lounge", ceremony: 96 },

	//Best Original Score
	{ id: "335977", year: 2024, title: "Indiana Jones and the Dial of Destiny", ceremony: 96 },

	//Best Original Song
	{ id: "346698", year: 2024, title: "Barbie", ceremony: 96 },
	{ id: "626332", year: 2024, title: "Flamin' Hot", ceremony: 96 },
	{ id: "1171816", year: 2024, title: "American Symphony", ceremony: 96 },

	//Best Sound
	{ id: "670292", year: 2024, title: "The Creator", ceremony: 96 },
	{ id: "575264", year: 2024, title: "Mission: Impossible - Dead Reckoning Part One", ceremony: 96 },

	//Best Production Design
	{ id: "792307", year: 2024, title: "Poor Things", ceremony: 96 },
	{ id: "753342", year: 2024, title: "Napoleon", ceremony: 96 },

	//Best Cinematography
	{ id: "991708", year: 2024, title: "El Conde", ceremony: 96 },

	//Best Makeup and Hairstyling
	{ id: "899524", year: 2024, title: "Golda", ceremony: 96 },
	{ id: "906126", year: 2024, title: "Society of the Snow", ceremony: 96 },

	//Best Visual Effects
	{ id: "940721", year: 2024, title: "Godzilla Minus One", ceremony: 96 },
	{ id: "447365", year: 2024, title: "Guardians of the Galaxy Vol. 3", ceremony: 96 }
];
// ─────────────────────────────────────────────
// 統一入口
// ─────────────────────────────────────────────
async function getOscars(params = {}) {
    const category = params.category || "all";

    switch (category) {
        case "98":
            return Oscars98;

        case "97":
            return Oscars97;

        case "96":
            return Oscars96;

        default:
            return Oscars98;
    }
}                                               // ✅ Fix 2: 補上函數結尾的 }
