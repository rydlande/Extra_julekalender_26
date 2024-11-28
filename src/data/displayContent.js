/* 
text-2xl / text-4xl / emoji: text-6xl/-9xl
text-center
*/
import luke1 from '../assets/luke1.mp4'

export const dailyContent = {
    1: { 
        type: 'video', 
        aspectRatio: '9:16',
        src: luke1,
        description: 'A cozy Christmas video.' 
    },
    2: {
        type: 'image', 
        aspectRatio: '9:16',
        src: 'https://plus.unsplash.com/premium_photo-1664374288390-8a02d5614a8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D', 
        description: 'Day 1 image' 
    },
    3: {
        type: 'text',
        format: 'flipping-card',
        front: [
            { text: 'Tre nøtter: Hvilke julesanger er dette? Knekk nøttene for å se!', style: 'font-ExtraRound-Regular text-4xl text-center' },
            { text: '🌰', style: 'text-9xl' },
            { text: 'Kommenter løsningen i kommentarfeltet til dagens luke på Viva ⭐️', style: 'font-ExtraRound-Regular text-2xl text-center' },
        ],
        back: [
            { text: 'Tre nøtter: Hvilke julesanger er dette? Knekk nøttene for å se!', style: 'font-ExtraRound-Regular text-4xl text-center' },
            { text: '1: 🌰🔥', style: 'text-6xl'},
            { text: '2: 🐦‍⬛🍐🌳', style: 'text-6xl'},
            { text: '3: 🫴🌽🍿', style: 'text-6xl'},
            { text: 'Kommenter løsningen i kommentarfeltet til dagens luke på Viva ⭐️', style: 'font-ExtraRound-Regular text-2xl text-center' },
        ]
    },
    4: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
        { text: 'Vi trenger mer inspirasjon!', style: 'font-ExtraRound-Regular text-2xl' },
        { text: 'Legg ut et bilde fra butikken for å være med i trekningen av fin premie 🎁 ', style: 'text-4xl text-center' },
        { text: 'Merk med #extrajul', style: 'font-ExtraRound-Regular text-4xl text-center' },
        ]
    },
    5: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
        { text: 'Gåte', style: 'font-ExtraRound-Regular text-2xl text-center' },
        { text: 'De danser rundt meg, men ikke med meg. Jeg har én fot, men ingen tær. Hvem er jeg?', style: 'text-4xl text-center' },
        { text: 'Kommenter løsningen i kommentarfeltet til dagens luke på Viva ⭐️', style: 'font-ExtraRound-Regular text-2xl text-center' },
        ]
    },
    6: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Rampenissen har vært ute på sprell i pauserommet. Hva har han funnet på?', style: 'font-ExtraRound-Regular text-4xl text-center' },
            { text: 'Ta bilde og vis oss, del på Viva 📸', style: 'font-ExtraRound-Regular text-2xl text-center' }
        ]
    },
    7: {
        type: 'video', 
        aspectRatio: '16:9',
        src: '', 
        description: '' 
    },
    8: {
        type: 'video', 
        aspectRatio: '16:9',
        src: '', 
        description: '' 
    },
    9: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Du er dagens gode fe! 🪄 <br>Gjør noe fint for en kollega  i dag 🥰', style: 'font-ExtraRound-Regular text-4xl text-center' },
            { text: 'Legg ut en skrytepost om de fine folka i butikken på Viva, gi en god klem eller syng en sang. Vær kreativ for å gjøre 9. desember Extra bra for de beste folka ❤️', style: 'font-ExtraRound-Regular text-2xl text-center' }
        ]
    },
    10: {
        type: 'image', 
        aspectRatio: '9:16',
        src: '', 
        description: '' 
    },
    11: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Inspirasjonstid!', style: 'font-ExtraRound-Regular text-2xl' },
            { text: 'Del et bilde fra butikken for å være med i trekningen av fin premie 🎁', style: 'text-4xl text-center' },
            { text: 'Merk med #extrajul', style: 'font-ExtraRound-Regular text-4xl' },
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
            { text: 'Gåte', style: 'font-ExtraRound-Regular text-2xl text-center' },
            { text: 'I språket bor jeg i pølsa, i virkeligheten bor jeg oftere i bolle. Jeg kan være både øyne og knapper, men før var jeg noe helt annet. Hvem er jeg? ', style: 'text-4xl text-center' },
            { text: 'Kommenter løsningen i kommentarfeltet til dagens luke på Viva ⭐️', style: 'font-ExtraRound-Regular text-2xl text-center' },
        ]
    },
    14: {
        type: 'text',
        format: 'flipping-card',
        front: [
            { text: 'En nøtt å knekke! <br>Hint: julekalender', style: 'font-ExtraRound-Regular text-4xl text-center' },
            { text: '🌰', style: 'text-9xl' },
            { text: 'Kommenter løsningen i kommentarfeltet til dagens luke på Viva ⭐️', style: 'font-ExtraRound-Regular text-2xl text-center' },
        ],
        back: [
            { text: 'En nøtt å knekke! <br>Hint: julekalender', style: 'font-ExtraRound-Regular text-4xl text-center' },
            { text: '🛞👞🪡🛣️', style: 'text-6xl'},
            { text: 'Kommenter løsningen i kommentarfeltet til dagens luke på Viva ⭐️', style: 'font-ExtraRound-Regular text-2xl text-center' },
        ]
    },
    15: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: 'Hvem står bak denne oppskriften på pepperkaker?', style: 'font-ExtraRound-Regular text-4xl text-center' },
            { text: '1 kg margarin<br>1 ts farin<br>8 eggeplommer<br>1 kg hvetemel<br>1 kg pepper<br>', style: 'text-4xl text-center' },
            { text: 'Kommenter løsningen i kommentarfeltet til dagens luke på Viva ⭐️', style: 'font-ExtraRound-Regular text-2xl text-center' },
        ]
    },
    16: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: '', style: '' },
        ]
    },
    17: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: '', style: '' },
        ]
    },
    18: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: '', style: '' },
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
            { text: '', style: '' },
        ]
    },
    21: {
        type: 'text',
        format: 'flipping-card',
        front: [
            { text: 'En nøtt å knekke!', style: 'font-ExtraRound-Regular text-4xl text-center' },
            { text: 'Hvorfor nyser ekornet så mye i desember?', style: 'text-4xl text-center' },
        ],
        back: [
            { text: 'En nøtt å knekke!', style: 'font-ExtraRound-Regular text-4xl text-center' },
            { text: 'Svar: Den har spist for mange peppernøtter!', style: 'text-4xl text-center'},
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
        aspectRatio: '9:16',
        src: '', 
        description: '' 
    },
    24: {
        type: 'video', 
        aspectRatio: '16:9',
        src: '', 
        description: '' 
    },
    26: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: '', style: '' },
        ]
    },
    27: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: '', style: '' },
        ]
    },
    28: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: '', style: '' },
        ]
    },
    29: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: '', style: '' },
        ]
    },
    30: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: '', style: '' },
        ]
    },
    31: {
        type: 'text',
        format: 'paragraphs',
        paragraphs: [
            { text: '', style: '' },
        ]
    },
};