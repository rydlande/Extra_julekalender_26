import luke1 from '../assets/luke1.mp4'
import luke3 from '../assets/julekalender_logo_2025.png'
import luke4 from '../assets/luke4.png'
import luke5 from '../assets/luke5.gif'
import luke6 from '../assets/luke6.mp4'
import luke7 from '../assets/luke7.png'
import luke10 from '../assets/luke10.jpg'
import luke11 from '../assets/luke11.mp4'
import luke15 from '../assets/luke15.gif'
import luke16 from '../assets/luke16.png'
import luke19 from '../assets/luke19.png'
import luke23 from '../assets/luke23.mp4'



export const dailyContent = {
    1: { 
        type: 'video', 
        src: luke1,
        description: 'Introduksjon til Extras julekalender',
    },
    2: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Gi kassa en skikkelig julemakeover', style: 'text-2xl md:text-3xl lg:text-5xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Del bilde på Viva og vinn en premie til hele butikken! ✨ ', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    3: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Klarer du å finne hva som mangler på bilde nr. 2? 👀', style: 'text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            {
                image: luke3, 
                alt: '', 
                style: 'mt-4 md:mt-6 lg:mt-8 w-full h-auto',
            },
            { text: 'Kommenter svaret på Viva!', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-4 md:mt-6 lg:mt-8 mb-2 md:mb-4 lg:mb-6' },
        ],
    },
    4: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'JULENS HETESTE DISKUSJON 🔥', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Rød eller brun julebrus?', style: 'text-2xl md:text-3xl lg:text-5xl mt-4 md:mt-6 lg:mt-8' },
            {
                image: luke4, 
                alt: '', 
                style: 'mt-4 md:mt-6 lg:mt-8 w-full h-auto',
            },
            { text: 'Legg igjen din stemme i dagens post på Viva', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-4 md:mt-8 lg:mt-16 mb-2 md:mb-4 lg:mb-6' },
        ],
    },
    5: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Når du innser at det bare er 19 dager igjen til jul:', style: 'text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            {
                image: luke5, 
                alt: '', 
                style: 'mt-4 md:mt-6 lg:mt-8 mb-2 md:mb-4 lg:mb-6 w-full h-auto',
            },
        ],
    },
    6: {
        type: 'video', 
        src: luke6,
        description: 'Daniel Kvammen synger en julesang',
    },
    7: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Klarer du å finne alle nissene?', style: 'text-2xl md:text-3xl lg:text-5xl mt-11 md:mt-14 lg:mt-24' },
            {
                image: luke7, 
                alt: '', 
                style: 'mt-2 md:mt-4 lg:mt-6 w-full h-auto',
            },
            { text: 'Kommenter hvor de ligger på Viva! ⭐️', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-2 md:mt-4 lg:mt-6 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    8: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Del butikkens fineste sameksponering av julevarer på Viva', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24', style: 'text-2xl md:text-3xl lg:text-5xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Butikken med den mest kreative eksponeringen stikker av med en premie til gjengen! 🎁', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    9: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'I disse mørke tider, kan du være lyset i noens dag!', style: 'text-2xl md:text-3xl lg:text-5xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Tagg en kollega i det nyeste innlegget på Viva som du synes fortjener ekstra oppmerksomhet 🕯️❤️', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    10: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Hvordan det føles å ha fri fra jobb en dag i julestria:', style: 'text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            {
                image: luke10,
                alt: '', 
                style: 'mt-4 md:mt-6 lg:mt-8 mb-2 md:mb-4 lg:mb-6 w-full h-auto',
            },
        ],
    },
    11: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Klarer du å gjette lyden?👂', style: 'text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            {
                type: 'video', 
                src: luke11,
                description: 'Lyden til luke 11',
            },
            { text: 'Kommenter hva du tror lyden er under det nyeste innlegget på Viva!', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-4 md:mt-6 lg:mt-8 mb-2 md:mb-4 lg:mb-6' },
        ],
    },
    12: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Gåte', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Det spises flere tonn av meg i desember hvert år. Jeg kan komme i form av noe som grynter, eller som et søtt teppe over en kake. Hvem er jeg? 🤔', style: 'text-2xl md:text-3xl lg:text-5xl mt-4 md:mt-6 lg:mt-8' },
            { text: 'Legg igjen svaret under den siste posten på Viva ⭐️', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    13: { 
        type: 'video', 
        //src: luke1,
        description: '',
    },
    14: {
        type: 'text',
        format: 'flipping-card',
        heightClass: 'h-[420px] md:h-[470px] lg:h-[670px]',
        front: [
            { text: 'Tre nøtter: Hvilke julefilmer er dette? Knekk nøttene for å se!', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: '🌰', style: 'text-8xl lg:text-9xl rotate-[25deg] mr-20 lg:mr-20 mt-12 md:mt-10 lg:mt-24' },
            { text: '🌰', style: 'text-8xl lg:text-9xl rotate-[55deg] -mr-20 lg:-mr-24 -mt-[84px] lg:-mt-[110px]' },
            { text: '🌰', style: 'text-8xl lg:text-9xl rotate-[35deg] mr-6 lg:mr-6 -mt-16 lg:-mt-20' },
            { text: 'Legg igjen dine svar på den nyeste posten på Viva!', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-12 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ],
        back: [
            { text: 'Tre nøtter: Hvilke julefilmer er dette? Knekk nøttene for å se!', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: '1: 🚂🎄🌌', style: 'text-5xl lg:text-7xl mt-8 lg:mt-12'},
            { text: '2: 💚🎄😈', style: 'text-5xl lg:text-7xl mt-4'},
            { text: '3: 🛫🌍🎄❤️', style: 'text-5xl lg:text-7xl mt-4'},
            { text: 'Legg igjen dine svar på den nyeste posten på Viva!', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-8 lg:mt-[89px] mb-2 md:mb-4 lg:mb-6' },
        ],
    },
    15: {
        type: 'text',
        format: 'flipping-card',
        heightClass: 'h-[420px] md:h-[470px] lg:h-[670px]',
        front: [
            { text: 'Gåte', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Jeg har rød uniform, får lange lister og får folk til å smile. Hvem er jeg?', style: 'text-2xl md:text-3xl lg:text-5xl mt-12 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ],
        back: [
            {
                image: luke15, 
                alt: 'Mariah Carey synger "youuu"', 
                description: 'Mariah Carey synger "youuu"', 
            },
            { text: 'Svar: en extraansatt', style: 'text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
        ],
    },
    16: {
        type: 'image', 
        src: luke16,
        description: 'Meme: Når kunden sier "god jul" og du svarer "bare hyggelig"',
        style: 'mt-4 md:mt-6 lg:mt-8 mb-2 md:mb-4 lg:mb-6 w-full h-auto',
    },
    17: {
        type: 'video', 
        src: '', 
        description: '' 
    },
    18: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Sitter du på et skikkelig godt tips/hack til julemiddagen?', style: 'text-2xl md:text-3xl lg:text-5xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Del det med dine kollegaer på Viva! La oss inspirere hverandre 👩‍🍳', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    19: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Er det noe du synes mangler på julebordet?', style: 'text-2xl md:text-3xl lg:text-5xl mt-9 md:mt-11 lg:mt-14' },
            {
                image: luke19, 
                alt: '', 
                style: 'mt-2 md:mt-4 lg:mt-6 w-full h-auto',
            },
            { text: ' Kommenter under innlegget på Viva og bli med i trekningen av en kurv med julevarer til hele butikken! 🧺🎅', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-2 md:mt-4 lg:mt-6 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    20: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Idag er julegenser-dagen!', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24', style: 'text-2xl md:text-3xl lg:text-5xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Stem på den julegenseren du synes er råest ved å like! Del bilde av din julegenser under det nyeste innlegget på Viva', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    21: {
        type: 'video', 
        src: '', 
        description: '' 
    },
    22: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Ny episode av Extra Under Lupen er ute i Coopskolen nå!', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: '<a href="https://podcasts.helloaudio.fm/player?episodeId=657ddfde-06ba-4c04-9790-d2696690973e&code=OPs83Jlidq&centered=true" target="_blank"><span class="underline hover:text-red"">Fruktkurven: jula i F&G</span>!</br> Hør nå🍊🧡</a>', style: 'text-2xl md:text-3xl lg:text-5xl mt-4 md:mt-6 lg:mt-8 mb-2 md:mb-4 lg:mb-6' },
        ],
    },
    23: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { 
                text: 'Skal vi ha de beste resultatene i dagligvarebransjen til neste år også? - Andreas', 
                style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24',
            },
            { 
                text: 'Same procedure as every year, Ruud - Kristin', 
                style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-9 md:mt-11 lg:mt-14',
            },
            { 
                type: 'video', 
                src: luke23,
                description: 'Grevinnen og hovmesteren gif',
                style: 'mt-4 md:mt-6 lg:mt-8 w-full h-auto',
            },
        ],
    },
    24: {
        type: 'video', 
        src: '', 
        description: '' 
    }
};