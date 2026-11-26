import luke1 from '../assets/luke1.mp4'
import luke2 from '../assets/luke2.png'
import luke3 from '../assets/luke3.png'
import luke4 from '../assets/luke4.mp4'
import luke5 from '../assets/luke5.png'
import luke6 from '../assets/luke6.gif'
import luke10 from '../assets/luke10.mp4'
import luke11 from '../assets/luke11.mp4'
import luke13 from '../assets/luke13.gif'
import luke15 from '../assets/luke15.png'
import luke18 from '../assets/luke18.mp4'
import luke19 from '../assets/luke19.png'
import luke20 from '../assets/luke20.gif'
import luke22 from '../assets/luke22.mp4'
import luke23 from '../assets/2025/luke23.gif'
import luke24 from '../assets/2025/luke24.mp4'



export const dailyContent = {
    1: { 
        type: 'video', 
        src: luke1,
        description: 'Extrapott episode 1',
        aspectRatio: 'aspect-video',
                height: 'h-[50vw] md:h-[380px] lg:h-[480px]'
    },
    2: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Hva har vi tatt bilde av her?', style: 'text-2xl md:text-3xl lg:text-5xl mt-11 md:mt-14 lg:mt-24' },
            {
                image: luke2, 
                alt: '', 
                style: 'mt-4 md:mt-6 lg:mt-8 w-full h-auto',
            },
            { text: 'Kommenter svaret på Viva!', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-4 md:mt-8 lg:mt-11 mb-2 md:mb-4 lg:mb-6' },
        ],
    },
    3: {
        type: 'image',
        src: luke3,
        description: '',
        aspectRatio: 'aspect-[873/1153]',
        height: 'h-[450px] md:h-[700px]',
    },
    4: { 
        type: 'video', 
        src: luke4,
        description: 'Extrapott episode 2',
        aspectRatio: 'aspect-video',
                height: 'h-[50vw] md:h-[380px] lg:h-[480px]'
    },
    5: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Hvor mange nøtter ligger i krukken?', style: 'text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            {
                image: luke5, 
                alt: '', 
                style: 'mt-2 md:mt-4 lg:mt-6 h-auto max-w-none -mx-4 w-[calc(100%+2rem)] md:-mx-6 md:w-[calc(100%+3rem)] lg:-mx-12 lg:w-[calc(100%+6rem)]',
            },
            { text: 'Skriv ditt gjett i kommentarfeltet på Viva!', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mb-2 md:mb-4 lg:mb-6' }
        ],
    },
    6: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'To lys står tent for håp og glede', style: 'text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'når morgenen er grå,', style: 'text-xl md:text-2xl lg:text-4xl' },
            { text: 'for deg som låser opp i snøen', style: 'text-xl md:text-2xl lg:text-4xl' },
            { text: 'og får det til å gå.', style: 'text-xl md:text-2xl lg:text-4xl' },
            { text: 'Vi håper at du snart kan få', style: 'text-xl md:text-2xl lg:text-4xl' },
            { text: 'en lang og rolig jul, du og', style: 'text-xl md:text-2xl lg:text-4xl' },
            {
                image: luke6,
                alt: 'To brennende lys',
                style: 'mt-4 md:mt-6 lg:mt-8 mb-2 md:mb-4 lg:mb-6 w-full h-auto',
            },
        ],
    },
    7:  {
        type: 'text',
        format: 'flipping-card',
        heightClass: 'h-[420px] md:h-[470px] lg:h-[670px]',
        front: [
            { text: 'Gjett julesangene🎶 Knekk nøttene for å se!', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: '🌰', style: 'text-8xl lg:text-9xl rotate-[25deg] mr-20 lg:mr-20 mt-12 md:mt-10 lg:mt-24' },
            { text: '🌰', style: 'text-8xl lg:text-9xl rotate-[55deg] -mr-20 lg:-mr-24 -mt-[84px] lg:-mt-[110px]' },
            { text: '🌰', style: 'text-8xl lg:text-9xl rotate-[35deg] mr-6 lg:mr-6 -mt-16 lg:-mt-20' },
            { text: 'Kommenter hvilke sanger du tror det er i kommentarfeltet på Viva!', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-12 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ],
        back: [
            { text: 'Gjett julesangene🎶 Knekk nøttene for å se!', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: '1: 🎅➡️🏙️', style: 'text-5xl lg:text-7xl mt-8 lg:mt-12'},
            { text: '2: 🎸🔄🎄', style: 'text-5xl lg:text-7xl mt-4'},
            { text: '3: 🔔🔔🪨', style: 'text-5xl lg:text-7xl mt-4'},
            { text: 'Kommenter hvilke sanger du tror det er i kommentarfeltet på Viva!', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-8 lg:mt-8 mb-4 md:mb-6 lg:mb-8' },
        ],
    },
    8: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: '1. Hva kalles skinnet på ribba som skal bli sprøtt?', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: '2. Hvilken by får et stort juletre i gave fra Oslo hvert år?', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-2 md:mt-2 lg:mt-4' },
            { text: '3. Hvor mange slag småkaker skal man ha til jul ifølge tradisjonen?', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-2 md:mt-2 lg:mt-4' },
            { text: '4. Hva heter skomakeren i julekalenderen «Jul i Skomakergata»?', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-2 md:mt-2 lg:mt-4' },
            { text: '5. Hvem skrev «Musevisa»?', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-2 md:mt-2 lg:mt-4 mb-4 md:mb-6 lg:mb-8' },
        ],
    },
    9: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Julestria er i full gang, og vi vil vite hvordan dere holder energien oppe!', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Fullfør setningen i kommentarfeltet på Viva: «Det som redder vakta i desember er …»', style: 'text-2xl md:text-3xl lg:text-5xl mt-4 md:mt-6 lg:mt-8' },
            { text: 'Er det kaffen, julemusikken eller kollegaen som alltid har en dårlig vits på lur?', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-4 md:mt-6 lg:mt-8 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    10: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Gjett lyden!', style: 'text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24 mb-4 md:mb-6 lg:mb-8' },
            {
                type: 'video', 
                src: luke10,
                description: 'Lyden til luke 10',
                style: 'w-full h-auto rounded-md',
            },
        ],
    },
    11: { 
        type: 'video', 
        src: luke11,
        description: 'Extrapott episode 3',
        aspectRatio: 'aspect-video',
                height: 'h-[50vw] md:h-[380px] lg:h-[480px]'
    },
    12: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Gjør noe gøy for gjengen på jobb i dag!', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Pynt pauserommet, ha julegenser-dag, lag den lengste nisselue-rekka eller finn på noe helt eget.', style: 'text-2xl md:text-3xl lg:text-5xl mt-4 md:mt-6 lg:mt-8' },
            { text: 'Del bilde eller video på Viva!', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    13: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Tre lys står tent. Vi lengter nå', style: 'text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'mot fri fra pall og kø,', style: 'text-xl md:text-2xl lg:text-4xl' },
            { text: 'mot dager der vi bare får', style: 'text-xl md:text-2xl lg:text-4xl' },
            { text: 'se ut på stille snø.', style: 'text-xl md:text-2xl lg:text-4xl' },
            { text: 'Snart er siste ribbe solgt,', style: 'text-xl md:text-2xl lg:text-4xl' },
            { text: 'og fri fortjent, så det holdt!', style: 'text-xl md:text-2xl lg:text-4xl' },
            {
                image: luke13,
                alt: 'Tre brennende lys',
                style: 'mt-4 md:mt-6 lg:mt-8 mb-2 md:mb-4 lg:mb-6 w-full h-auto',
            },
        ],
    },
    14: /*{ 
        type: 'video', 
        src: luke1,
        description: 'Introduksjon til Extras julekalender',
        aspectRatio: 'aspect-video',
        height: 'h-[50vw] md:h-[380px] lg:h-[480px]'
    },*/
    {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Placeholder', style: 'text-2xl md:text-3xl lg:text-5xl mt-11 md:mt-14 lg:mt-24' },
        ],
    },
    15: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Hjelp nissen frem til julekakene!', style: 'text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            {
                image: luke15,
                alt: '', 
                style: 'mt-4 md:mt-6 lg:mt-8 mb-2 md:mb-4 lg:mb-6 w-full h-auto',
            },
        ],
    },
    16: 
    {
        type: 'text',
        format: 'flipping-card',
        heightClass: 'h-[420px] md:h-[470px] lg:h-[670px]',
        front: [
            { text: 'Gjett julefilmen🎬', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: '🌰', style: 'text-8xl lg:text-9xl rotate-[25deg] mr-20 lg:mr-20 mt-12 md:mt-10 lg:mt-24' },
            { text: '🌰', style: 'text-8xl lg:text-9xl rotate-[55deg] -mr-20 lg:-mr-24 -mt-[84px] lg:-mt-[110px]' },
            { text: '🌰', style: 'text-8xl lg:text-9xl rotate-[35deg] mr-6 lg:mr-6 -mt-16 lg:-mt-20' },
            { text: 'Kommenter hvilke filmer du tror det er på Viva!', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-8 lg:mt-8 mb-4 md:mb-6 lg:mb-8' },
        ],
        back: [
            { text: 'Gjett julefilmen🎬', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: '1: 👎🎅', style: 'text-4xl lg:text-7xl mt-8 lg:mt-12'},
            { text: '2: 🧝', style: 'text-4xl lg:text-7xl mt-4'},
            { text: '3: 🐷🐸🎄🎶', style: 'text-4xl lg:text-7xl mt-4'},
            { text: 'Kommenter hvilke filmer du tror det er på Viva!', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-8 lg:mt-8 mb-4 md:mb-6 lg:mb-8' },
        ],
    },
    17: /*{ 
        type: 'video', 
        src: luke1,
        description: 'Introduksjon til Extras julekalender',
        aspectRatio: 'aspect-video',
        height: 'h-[50vw] md:h-[380px] lg:h-[480px]'
    },*/
    {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Placeholder', style: 'text-2xl md:text-3xl lg:text-5xl mt-11 md:mt-14 lg:mt-24' },
        ],
    },
    18: { 
        type: 'video', 
        src: luke18,
        description: 'Extrapott episode 4',
        aspectRatio: 'aspect-video',
                height: 'h-[50vw] md:h-[380px] lg:h-[480px]'
    },
    19: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: "Et julekort til dere fantastiske Extra-ansatte.", style: 'font-ExtraRound-bold text-base md:text-xl lg:text-2xl mt-8 md:mt-11 lg:mt-11' },
            { text: 'Desember er en hektisk måned i dagligvarebransjen. Mens alle andre gjør seg klare til jul, er det noen som sørger for at julen faktisk kommer på plass.', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt- md:mt-4 lg:mt-8' },
            { text: 'Det er dere som låser opp døra mens det fortsatt er mørkt ute, og dere som slukker lyset når resten av byen har gått hjem. Dere fyller hyllene med ribbe, pinnekjøtt og julebrus, holder humøret oppe når køen blir lang og vet alltid hvilken hylle som skjuler en ekstra marsipangris.', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-4 md:mt-4 lg:mt-8' },
            { text: 'Det kan ikke sies nok, for innsatsen deres betyr alt. Handleturen er en stor del av juleforberedelsene, og dere er grunnen til at den går knirkefritt, selv på lille julaften.', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-4 md:mt-4 lg:mt-8' },
            { text: 'Så til alle dere fantastiske Extra-ansatte, som møter tidlig, jobber sent og hjelper kundene gjennom desember: Tusen takk.', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-4 md:mt-4 lg:mt-8' },
        ],
    },
    20: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Nå brenner fire lys i rad', style: 'text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'og varmer alle mann,', style: 'text-xl md:text-2xl lg:text-4xl' },
            { text: 'for hver kollega, sliten, glad,', style: 'text-xl md:text-2xl lg:text-4xl' },
            { text: 'i byer, bygd og land.', style: 'text-xl md:text-2xl lg:text-4xl' },
            { text: 'Nå får du fred og fri i jul,', style: 'text-xl md:text-2xl lg:text-4xl' },
            { text: 'takk for innsatsen, du er gull!', style: 'text-xl md:text-2xl lg:text-4xl' },
            {
                image: luke20,
                alt: 'Fire brennende lys',
                style: 'mt-4 md:mt-6 lg:mt-8 mb-2 md:mb-4 lg:mb-6 w-full h-auto',
            },
        ],
    },
    21:/*{ 
        type: 'video', 
        src: luke1,
        description: 'Introduksjon til Extras julekalender',
        aspectRatio: 'aspect-video',
        height: 'h-[50vw] md:h-[380px] lg:h-[480px]'
    },*/
    {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Placeholder', style: 'text-2xl md:text-3xl lg:text-5xl mt-11 md:mt-14 lg:mt-24' },
        ],
    },
    22: {
        type: 'video', 
        src: luke22, 
        description: 'Tilbakeblikk fra jubileumsåret',
        aspectRatio: 'aspect-square',
        height: 'h-[320px] md:h-[500px]'
    },
    23: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { 
                text: 'Skal vi ha fantastiske resultater i Extra til neste år også, Kristin?', 
                style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24',
            },
            { 
                text: '-Andreas', 
                style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl',
            },
            { 
                text: 'Same procedure as every year, Ruud -Kristin', 
                style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-9 md:mt-11 lg:mt-14',
            },
            {
                image: luke23, 
                alt: '', 
                style: 'mt-4 md:mt-6 lg:mt-8 mb-2 md:mb-4 lg:mb-6 w-full h-auto',
            },
        ],
    },
    24: { 
        type: 'video', 
        src: luke24,
        description: 'Extrapott episode 5',
        aspectRatio: 'aspect-video',
                height: 'h-[50vw] md:h-[380px] lg:h-[480px]'
    },
};