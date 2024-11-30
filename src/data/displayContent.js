/* 
text-2xl / text-4xl / emoji: text-6xl/-9xl

*/
import luke1 from '../assets/luke1.mp4'

export const dailyContent = {
    1: { 
        type: 'video', 
        src: luke1,
        description: 'Introduksjon til Extras julekalender',
    },
    2: {
        type: 'image', 
        src: 'https://plus.unsplash.com/premium_photo-1664374288390-8a02d5614a8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D', 
        description: 'Day 1 image',
    },
    3: {
        type: 'text',
        format: 'flipping-card',
        heightClass: 'h-[420px] md:h-[470px] lg:h-[670px]',
        front: [
            { text: 'Tre nøtter: Hvilke julesanger er dette? Knekk nøttene for å se!', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: '🌰', style: 'text-8xl lg:text-9xl rotate-[25deg] mr-20 lg:mr-20 mt-12 md:mt-10 lg:mt-24' },
            { text: '🌰', style: 'text-8xl lg:text-9xl rotate-[55deg] -mr-20 lg:-mr-24 -mt-[84px] lg:-mt-[110px]' },
            { text: '🌰', style: 'text-8xl lg:text-9xl rotate-[35deg] mr-6 lg:mr-6 -mt-16 lg:-mt-20' },
            { text: 'Kommenter løsningen i kommentarfeltet til dagens luke på Viva ⭐️', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-12 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ],
        back: [
            { text: 'Tre nøtter: Hvilke julesanger er dette? Knekk nøttene for å se!', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: '1: 🌰🔥', style: 'text-5xl lg:text-7xl mt-8 md:mt-10 lg:mt-12'},
            { text: '2: 🐦‍⬛🍐🌳', style: 'text-5xl lg:text-7xl mt-4'},
            { text: '3: 🫴🌽🍿', style: 'text-5xl lg:text-7xl mt-4'},
            { text: 'Kommenter løsningen i kommentarfeltet til dagens luke på Viva ⭐️', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ],
    },
    4: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Vi trenger mer inspirasjon!', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Legg ut et bilde fra butikken for å være med i trekningen av fin premie 🎁 ', style: 'text-2xl md:text-3xl lg:text-5xl mt-4 md:mt-6 lg:mt-8' },
            { text: 'Merk med #extrajul', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ],
    },
    5: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
        { text: 'Gåte', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
        { text: 'De danser rundt meg, men ikke med meg. Jeg har én fot, men ingen tær. Hvem er jeg?', style: 'text-2xl md:text-3xl lg:text-5xl mt-4 md:mt-6 lg:mt-8' },
        { text: 'Kommenter løsningen i kommentarfeltet til dagens luke på Viva ⭐️', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 md:mb-4 lg:mb-6' },
        ]
    },
    6: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Rampenissen har vært ute på sprell i pauserommet. Hva har han funnet på?', style: 'text-2xl md:text-3xl lg:text-5xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Ta bilde og vis oss, del på Viva 📸', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' }
        ]
    },
    7: {
        type: 'video', 
        src: '', 
        description: '' 
    },
    8: {
        type: 'video', 
        src: '', 
        description: '' 
    },
    9: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Du er dagens gode fe!🪄 <br>Gjør noe fint for en kollega i dag 🥰', style: 'text-2xl md:text-3xl lg:text-5xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Legg ut en skrytepost om de fine folka i butikken på Viva, gi en god klem eller syng en sang. Vær kreativ for å gjøre 9. desember Extra bra for de beste folka ❤️', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' }
        ]
    },
    10: {
        type: 'image', 
        src: '', 
        description: '' 
    },
    11: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Inspirasjonstid!', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Del et bilde fra butikken for å være med i trekningen av fin premie 🎁', style: 'text-2xl md:text-3xl lg:text-5xl mt-4 md:mt-6 lg:mt-8' },
            { text: 'Merk med #extrajul', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    12: {
        type: 'video', 
        aspectRatio: '16:9',
        src: '', 
        description: '' 
    },
    13: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Gåte', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'I språket bor jeg i pølsa, i virkeligheten bor jeg oftere i bolle. Jeg kan være både øyne og knapper, men før var jeg noe helt annet. Hvem er jeg? ', style: 'text-2xl md:text-3xl lg:text-5xl mt-4 md:mt-6 lg:mt-8' },
            { text: 'Kommenter løsningen i kommentarfeltet til dagens luke på Viva ⭐️', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    14: {
        type: 'text',
        format: 'flipping-card',
        heightClass: 'h-80 md:h-[340px] lg:h-[580px]',
        front: [
            { text: 'En nøtt å knekke! <br>Hint: julekalender', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: '🌰', style: 'text-8xl' },
            { text: 'Kommenter løsningen i kommentarfeltet til dagens luke på Viva ⭐️', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ],
        back: [
            { text: 'En nøtt å knekke! <br>Hint: julekalender', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: '🛞👞🪡🛣️', style: 'text-5xl lg:text-7xl'},
            { text: 'Kommenter løsningen i kommentarfeltet til dagens luke på Viva ⭐️', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    15: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Hvem står bak denne oppskriften på pepperkaker?', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: '1 kg margarin<br>1 ts farin<br>8 eggeplommer<br>1 kg hvetemel<br>1 kg pepper<br>', style: 'text-2xl md:text-3xl lg:text-5xl mt-4 md:mt-6 lg:mt-8' },
            { text: 'Kommenter løsningen i kommentarfeltet til dagens luke på Viva ⭐️', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    16: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Vi trenger adjektiv til en adjektivhistorie!', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Førstemann til mølla, skriv ditt beste/ morsomste/rareste adjektiv i kommentarfeltet på Viva! ', style: 'text-2xl md:text-3xl lg:text-5xl mt-4 md:mt-6 lg:mt-8 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    17: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Funfact', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Visste du at fotballspillere med røde drakter spiller bedre? Just sayin´😉', style: 'text-2xl md:text-3xl lg:text-5xl mt-4 md:mt-6 lg:mt-8 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    18: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Hokus, pokus, filiokus, la oss fylle Viva med mersalgsfokus!', style: 'text-2xl md:text-3xl lg:text-5xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Del bilder av fine eksponeringer og merk med #extrajul for å vinne preeemie 🪄', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    19: {
        type: 'video', 
        aspectRatio: '16:9',
        src: '', 
        description: '' 
    },
    20: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Tenkepause', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Hva er du mest stolt av med året som har gått? Hva gleder du deg mest til i året som kommer?', style: 'text-2xl md:text-3xl lg:text-5xl mt-4 md:mt-6 lg:mt-8' },
            { text: 'Del gjerne tanker i kommentarfeltet 💝', style: 'font-ExtraRound-Regular text-base md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-24 mb-2 md:mb-4 lg:mb-6' },
        ]
    },
    21: {
        type: 'text',
        format: 'flipping-card',
        heightClass: 'h-80 md:h-[340px] lg:h-[580px]',
        front: [
            { text: 'En nøtt å knekke!', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Hvorfor nyser ekornet så mye i desember?', style: 'text-2xl md:text-3xl lg:text-5xl mt-4 md:mt-6 lg:mt-8' },
        ],
        back: [
            { text: 'En nøtt å knekke!', style: 'font-ExtraRound-Regular text-xl md:text-2xl lg:text-4xl mt-11 md:mt-14 lg:mt-24' },
            { text: 'Den har spist for mange peppernøtter!', style: 'text-2xl md:text-3xl lg:text-5xl mt-4 md:mt-6 lg:mt-8'},
        ]
    },
    22: {
        type: 'video', 
        aspectRatio: '16:9',
        src: '', 
        description: '' 
    },
    23: {
        type: 'image', 
        src: '', 
        description: '' 
    },
    24: {
        type: 'video', 
        aspectRatio: '16:9',
        src: '', 
        description: '' 
    }
};