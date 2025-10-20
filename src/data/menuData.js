// Մոդելային տվյալներ - Դուք պետք է փոխարինեք img ճանապարհները Ձեր իրական նկարներով
// Ենթադրվում է, որ նկարները գտնվում են src/assets/images/ պանակում

export const menuData = [
    {
        id: 1,
        category: 'pastries',
        category_hy: 'Թխվածքներ',
        category_ru: 'Выпечка',
        category_nl: 'Gebak',       // Ավելացված
        title_hy: 'Շոկոլադե Տորթ',
        title_en: 'Chocolate Cherry Cake',
        title_ru: 'Шоколадно-Вишневый Торт', // Ավելացված
        title_nl: 'Chocolade Kersentaart',  // Ավելացված
        price: 9500,
        description_hy: 'Հարուստ շոկոլադե բիսկվիթ, թարմ բալի կրեմով և գլազուրով։',
        description_en: 'Rich chocolate sponge with fresh cherry cream and glaze.',
        description_ru: 'Насыщенный шоколадный бисквит, со свежим вишневым кремом и глазурью.', // Ավելացված
        description_nl: 'Rijke chocoladebiscuit met verse kersencrème en glazuur.',     // Ավելացված
        img: './public/images/shoko.jpg'
    },
    {
        id: 2,
        category: 'pastries',
        category_hy: 'Թխվածքներ',
        category_ru: 'Выпечка',
        category_nl: 'Gebak',
        title_hy: 'Նապոլեոն',
        title_en: 'Napoleon',
        title_ru: 'Наполеон',
        title_nl: 'Napoleon',
        price: 350,
        description_hy: 'Բազմաշերտ խմոր և նուրբ կաթնային կրեմ։',
        description_en: 'Multi-layered puff pastry with delicate custard cream.',
        description_ru: 'Многослойное слоеное тесто и нежный заварной крем.',
        description_nl: 'Meerlagig bladerdeeg met delicate banketbakkersroom.',
        img: './public/images/pastry_napoleon.jpg'
    },
    {
        id: 3,
        category: 'macarons',
        category_hy: 'Մակարոններ',
        category_ru: 'Макароны',
        category_nl: 'Macarons',
        title_hy: 'Մանգո-Մարակույա',
        title_en: 'Mango Passion Fruit',
        title_ru: 'Манго-Маракуйя',
        title_nl: 'Mango Passievrucht',
        price: 1100,
        description_hy: 'Թարմ, թթվաքաղցր մանգոյի և մարակույայի համային համադրություն։',
        description_en: 'Fresh, tangy mango and passion fruit flavor combination.',
        description_ru: 'Свежее, кисло-сладкое сочетание вкусов манго и маракуйи.',
        description_nl: 'Frisse, pittige combinatie van mango- en passievruchtsmaken.',
        img: './public/images/macaronner.png'
    },
    {
        id: 4,
        category: 'gata',
        category_hy: 'Հայկական Գաթա',
        category_ru: 'Армянская Гата',
        category_nl: 'Armeense Gata',
        title_hy: 'Ղարսի Գաթա',
        title_en: 'Kars Gata',
        title_ru: 'Карсская Гата',
        title_nl: 'Kars Gata',
        price: 700,
        description_hy: 'Ավանդական, կարագով հարուստ գաթա՝ կաթնաշոռային համեղ միջուկով։',
        description_en: 'Traditional, butter-rich gata with a delicious milk-curd filling.',
        description_ru: 'Традиционная, богатая маслом гата с вкусной молочно-творожной начинкой.',
        description_nl: 'Traditionele, boterrijke gata met een heerlijke melk-kwarkvulling.',
        img: './public/images/gata.jpg'
    },
    {
        id: 5,
        category: 'cakes',
        category_hy: 'Տորթեր',
        category_ru: 'Торты',           // Ավելացված
        category_nl: 'Taarten',         // Ավելացված
        title_hy: 'Շոկոլադե Տորթ',
        title_en: 'Chocolate Cherry Cake',
        title_ru: 'Шоколадно-Вишневый Торт', // Ավելացված
        title_nl: 'Chocolade Kersentaart',  // Ավելացված
        price: 9500,
        description_hy: 'Հարուստ շոկոլադե բիսկվիթ, թարմ բալի կրեմով և գլազուրով։',
        description_en: 'Rich chocolate sponge with fresh cherry cream and glaze.',
        description_ru: 'Насыщенный шоколадный бисквит, со свежим вишневым кремом и глазурью.', // Ավելացված
        description_nl: 'Rijke chocoladebiscuit met verse kersencrème en glazuur.',     // Ավելացված
        img: './public/images/tort_bal.jpg'
    },
    {
        id: 6,
        category: 'cakes',
        category_hy: 'Տորթեր',
        category_ru: 'Торты',           // Ավելացված
        category_nl: 'Taarten',         // Ավելացված
        title_hy: 'Շոկոլադե Տորթ',
        title_en: 'Chocolate Cherry Cake',
        title_ru: 'Шоколадно-Вишневый Торт', // Ավելացված
        title_nl: 'Chocolade Kersentaart',  // Ավելացված
        price: 9500,
        description_hy: 'Հարուստ շոկոլադե բիսկվիթ, թարմ բալի կրեմով և գլազուրով։',
        description_en: 'Rich chocolate sponge with fresh cherry cream and glaze.',
        description_ru: 'Насыщенный шоколадный бисквит, со свежим вишневым кремом и глазурью.', // Ավելացված
        description_nl: 'Rijke chocoladebiscuit met verse kersencrème en glazuur.',     // Ավելացված
        img: './public/images/tort_sev.jpg'
    },
    {
        id: 7,
        category: 'cakes',
        category_hy: 'Տորթեր',
        category_ru: 'Торты',           // Ավելացված
        category_nl: 'Taarten',         // Ավելացված
        title_hy: 'Շոկոլադե Տորթ',
        title_en: 'Chocolate Cherry Cake',
        title_ru: 'Шоколадно-Вишневый Торт', // Ավելացված
        title_nl: 'Chocolade Kersentaart',  // Ավելացված
        price: 9500,
        description_hy: 'Հարուստ շոկոլադե բիսկվիթ, թարմ բալի կրեմով և գլազուրով։',
        description_en: 'Rich chocolate sponge with fresh cherry cream and glaze.',
        description_ru: 'Насыщенный шоколадный бисквит, со свежим вишневым кремом и глазурью.', // Ավելացված
        description_nl: 'Rijke chocoladebiscuit met verse kersencrème en glazuur.',     // Ավելացված
        img: './public/images/tort_bal.jpg'
    },
    {
        id: 8,
        category: 'macarons',
        category_hy: 'Մակարոններ',
        category_ru: 'Макароны',
        category_nl: 'Macarons',
        title_hy: 'Մանգո-Մարակույա',
        title_en: 'Mango Passion Fruit',
        title_ru: 'Манго-Маракуйя',
        title_nl: 'Mango Passievrucht',
        price: 400,
        description_hy: 'Թարմ, թթվաքաղցր մանգոյի և մարակույայի համային համադրություն։',
        description_en: 'Fresh, tangy mango and passion fruit flavor combination.',
        description_ru: 'Свежее, кисло-сладкое сочетание вкусов манго и маракуйи.',
        description_nl: 'Frisse, pittige combinatie van mango- en passievruchtsmaken.',
        img: './public/images/cupcake-2.png'
    },
    {
        id: 9,
        category: 'pastries',
        category_hy: 'Թխվածքներ',
        category_ru: 'Выпечка',
        category_nl: 'Gebak',       // Ավելացված
        title_hy: 'Շոկոլադե Տորթ',
        title_en: 'Chocolate Cherry Cake',
        title_ru: 'Шоколадно-Вишневый Торт', // Ավելացված
        title_nl: 'Chocolade Kersentaart',  // Ավելացված
        price: 9500,
        description_hy: 'Հարուստ շոկոլադե բիսկվիթ, թարմ բալի կրեմով և գլազուրով։',
        description_en: 'Rich chocolate sponge with fresh cherry cream and glaze.',
        description_ru: 'Насыщенный шоколадный бисквит, со свежим вишневым кремом и глазурью.', // Ավելացված
        description_nl: 'Rijke chocoladebiscuit met verse kersencrème en glazuur.',     // Ավելացված
        img: './public/images/shoko.jpg'
    },
    {
        id: 10,
        category: 'cakes',
        category_hy: 'Տորթեր',
        category_ru: 'Торты',           // Ավելացված
        category_nl: 'Taarten',         // Ավելացված
        title_hy: 'Շոկոլադե Տորթ',
        title_en: 'Chocolate Cherry Cake',
        title_ru: 'Шоколадно-Вишневый Торт', // Ավելացված
        title_nl: 'Chocolade Kersentaart',  // Ավելացված
        price: 9500,
        description_hy: 'Հարուստ շոկոլադե բիսկվիթ, թարմ բալի կրեմով և գլազուրով։',
        description_en: 'Rich chocolate sponge with fresh cherry cream and glaze.',
        description_ru: 'Насыщенный шоколадный бисквит, со свежим вишневым кремом и глазурью.', // Ավելացված
        description_nl: 'Rijke chocoladebiscuit met verse kersencrème en glazuur.',     // Ավելացված
        img: './public/images/tort_sev.jpg'
    },
    {
        id: 11,
        category: 'pastries',
        category_hy: 'Թխվածքներ',
        category_ru: 'Выпечка',
        category_nl: 'Gebak',
        title_hy: 'Նապոլեոն',
        title_en: 'Napoleon',
        title_ru: 'Наполеон',
        title_nl: 'Napoleon',
        price: 350,
        description_hy: 'Բազմաշերտ խմոր և նուրբ կաթնային կրեմ։',
        description_en: 'Multi-layered puff pastry with delicate custard cream.',
        description_ru: 'Многослойное слоеное тесто и нежный заварной крем.',
        description_nl: 'Meerlagig bladerdeeg met delicate banketbakkersroom.',
        img: './public/images/pastry_napoleon.jpg'
    },
    {
        id: 12,
        category: 'cakes',
        category_hy: 'Տորթեր',
        category_ru: 'Торты',           // Ավելացված
        category_nl: 'Taarten',         // Ավելացված
        title_hy: 'Շոկոլադե Տորթ',
        title_en: 'Chocolate Cherry Cake',
        title_ru: 'Шоколадно-Вишневый Торт', // Ավելացված
        title_nl: 'Chocolade Kersentaart',  // Ավելացված
        price: 9500,
        description_hy: 'Հարուստ շոկոլադե բիսկվիթ, թարմ բալի կրեմով և գլազուրով։',
        description_en: 'Rich chocolate sponge with fresh cherry cream and glaze.',
        description_ru: 'Насыщенный шоколадный бисквит, со свежим вишневым кремом и глазурью.', // Ավելացված
        description_nl: 'Rijke chocoladebiscuit met verse kersencrème en glazuur.',     // Ավելացված
        img: './public/images/tort_bal.jpg'
    },
    {
        id: 13,
        category: 'macarons',
        category_hy: 'Մակարոններ',
        category_ru: 'Макароны',
        category_nl: 'Macarons',
        title_hy: 'Մանգո-Մարակույա',
        title_en: 'Mango Passion Fruit',
        title_ru: 'Манго-Маракуйя',
        title_nl: 'Mango Passievrucht',
        price: 800,
        description_hy: 'Թարմ, թթվաքաղցր մանգոյի և մարակույայի համային համադրություն։',
        description_en: 'Fresh, tangy mango and passion fruit flavor combination.',
        description_ru: 'Свежее, кисло-сладкое сочетание вкусов манго и маракуйи.',
        description_nl: 'Frisse, pittige combinatie van mango- en passievruchtsmaken.',
        img: './public/images/macaron-1.png'
    },
    {
        id: 14,
        category: 'macarons',
        category_hy: 'Մակարոններ',
        category_ru: 'Макароны',
        category_nl: 'Macarons',
        title_hy: 'Մանգո-Մարակույա',
        title_en: 'Mango Passion Fruit',
        title_ru: 'Манго-Маракуйя',
        title_nl: 'Mango Passievrucht',
        price: 400,
        description_hy: 'Թարմ, թթվաքաղցր մանգոյի և մարակույայի համային համադրություն։',
        description_en: 'Fresh, tangy mango and passion fruit flavor combination.',
        description_ru: 'Свежее, кисло-сладкое сочетание вкусов манго и маракуйи.',
        description_nl: 'Frisse, pittige combinatie van mango- en passievruchtsmaken.',
        img: './public/images/macaron-2.png'
    },
    {
        id: 15,
        category: 'gata',
        category_hy: 'Հայկական Գաթա',
        category_ru: 'Армянская Гата',
        category_nl: 'Armeense Gata',
        title_hy: 'Ղարսի Գաթա',
        title_en: 'Kars Gata',
        title_ru: 'Карсская Гата',
        title_nl: 'Kars Gata',
        price: 700,
        description_hy: 'Ավանդական, կարագով հարուստ գաթա՝ կաթնաշոռային համեղ միջուկով։',
        description_en: 'Traditional, butter-rich gata with a delicious milk-curd filling.',
        description_ru: 'Традиционная, богатая маслом гата с вкусной молочно-творожной начинкой.',
        description_nl: 'Traditionele, boterrijke gata met een heerlijke melk-kwarkvulling.',
        img: './public/images/gataerku.jpg'
    },
    {
        id: 16,
        category: 'pastries',
        category_hy: 'Թխվածքներ',
        category_ru: 'Выпечка',
        category_nl: 'Gebak',
        title_hy: 'Նապոլեոն',
        title_en: 'Napoleon',
        title_ru: 'Наполеон',
        title_nl: 'Napoleon',
        price: 350,
        description_hy: 'Բազմաշերտ խմոր և նուրբ կաթնային կրեմ։',
        description_en: 'Multi-layered puff pastry with delicate custard cream.',
        description_ru: 'Многослойное слоеное тесто и нежный заварной крем.',
        description_nl: 'Meerlagig bladerdeeg met delicate banketbakkersroom.',
        img: './public/images/pastry_napoleon.jpg'
    },
    {
        id: 17,
        category: 'gata',
        category_hy: 'Հայկական Գաթա',
        category_ru: 'Армянская Гата',
        category_nl: 'Armeense Gata',
        title_hy: 'Ղարսի Գաթա',
        title_en: 'Kars Gata',
        title_ru: 'Карсская Гата',
        title_nl: 'Kars Gata',
        price: 700,
        description_hy: 'Ավանդական, կարագով հարուստ գաթա՝ կաթնաշոռային համեղ միջուկով։',
        description_en: 'Traditional, butter-rich gata with a delicious milk-curd filling.',
        description_ru: 'Традиционная, богатая маслом гата с вкусной молочно-творожной начинкой.',
        description_nl: 'Traditionele, boterrijke gata met een heerlijke melk-kwarkvulling.',
        img: './public/images/gataereq.jpg'
    },
    {
        id: 18,
        category: 'gata',
        category_hy: 'Հայկական Գաթա',
        category_ru: 'Армянская Гата',
        category_nl: 'Armeense Gata',
        title_hy: 'Ղարսի Գաթա',
        title_en: 'Kars Gata',
        title_ru: 'Карсская Гата',
        title_nl: 'Kars Gata',
        price: 700,
        description_hy: 'Ավանդական, կարագով հարուստ գաթա՝ կաթնաշոռային համեղ միջուկով։',
        description_en: 'Traditional, butter-rich gata with a delicious milk-curd filling.',
        description_ru: 'Традиционная, богатая маслом гата с вкусной молочно-творожной начинкой.',
        description_nl: 'Traditionele, boterrijke gata met een heerlijke melk-kwarkvulling.',
        img: './public/images/gatachors.jpg'
    },
];