const state = {
    counters: {
        wish_counter: 0,
        comp_counter: 0,
        shop_counter: 0,
    },
    selected_products: [
        
    ],
    contact_info: {
        title: 'Hotline Free:',
        phone: '(+100) 123 456 7890'
    },
    location_info: {
        stote: 'Stote Location: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.',
        add: 'Add: Walls Street 68, Mahattan, New York, USA'
    },
    header: {
        top_header: {
            pers_info: {
                acc: 'My Account',
                wish: 'My Wish List',
                sign: 'Sign In',
                comp: 'Compare',
            },
        },
        header_main: {

            custom_select: {
                selected: 'select..',
                options: [
                    { value: 'chocolate' },
                    { value: 'strawberry' },
                    { value: 'vanilla' }
                ]
            },
            custom_input: {
                placeholder: 'Search entire store here...',
            },
            custom_button: {
                title: 'Search',
                type: 'button'
            },
        },
        main_menu: {
            title: "SHOP BY DEPARTMENT",
            sub_menus: [
                {
                    title: 'Bestseller Products',
                    link: '/category/bestseller-products',
                    wrap: 'wrap',
                    dir: 'row',
                    sub_menus: [
                        {
                            title: 'Phone & Tablets', link: '/category/phone-&-tablets', general: true, sub_menus: [
                                { title: 'Flip-Flops', link: '/category/flip-flops' },
                                { title: 'Fashion Scarves', link: '/category/fashion-carves' },
                                { title: 'Wallets', link: '/category/wallets' },
                                { title: 'Evening Handbags', link: '/category/evening-handbags' },
                                { title: 'Wrist Watches', link: '/category/wrist-watches' },
                            ]
                        },
                        {
                            title: 'Desktop & Computer', link: '/category/desktop-&-computer', general: true, sub_menus: [
                                { title: 'Camcorders', link: '/category/camcorders' },
                                { title: 'Cameras', link: '/category/cameras' },
                                { title: 'Lingerie', link: '/category/lingerie' },
                                { title: 'Furniture', link: '/category/furniture' },
                                { title: 'Conditioner', link: '/category/Conditioner' },
                            ]
                        },
                        {
                            title: 'TV & Audios', link: '/category/tv-&-audios', general: true, sub_menus: [
                                { title: 'Apparel', link: '/category/Apparel' },
                                { title: 'Access', link: '/category/Access' },
                                { title: 'Shirts', link: '/category/Shirts' },
                                { title: 'Fashion', link: '/category/Fashion' },
                                { title: 'Dental Care', link: '/category/dental-care' },
                            ]
                        },
                        {
                            title: 'Laptop Accessories', link: '/category/laptop-accessories', general: true, sub_menus: [
                                { title: 'Evening', link: '/category/Evening' },
                                { title: 'Blazers', link: '/category/Blazers' },
                                { title: 'Table', link: '/category/Table' },
                                { title: 'Desk lamps', link: '/category/Desk lamps' },
                                { title: 'Office', link: '/category/Office' },
                            ]
                        },
                        {
                            title: 'Lenovo', link: '/category/lenovo', general: true, sub_menus: [
                                { title: 'Footwear', link: '/category/Footwear' },
                                { title: 'Digital', link: '/category/Digital' },
                                { title: 'Davenport', link: '/category/Davenport' },
                                { title: 'Bedside', link: '/category/Bedside' },
                                { title: 'Bootees', link: '/category/Bootees' },
                            ]
                        },
                    ],
                },
                { title: 'Top 10 Offers', link: '/category/top-10-offers' },
                {
                    title: 'Phones & Tablets',
                    link: '/category/phones-&-tablets',
                    wrap: 'nowrap',
                    dir: 'column',
                    sub_menus: [
                        { title: 'Home Appliances', link: '/category/home-appliances', },
                        { title: 'Office Equipment', link: '/category/samsung', },
                        { title: 'Storage Devices', link: '/category/storage-devices', },
                        { title: 'Electrical Kettle', link: '/category/electrical-kettle', },
                        { title: 'Mobile Phones', link: '/category/mobile-phones', },
                    ],
                },
                {
                    title: 'Electronic & Digital',
                    link: '/category/electronic-&-digital',
                    wrap: 'nowrap',
                    sub_menus: [
                        {
                            title: 'Computer', link: '/category/computer', general: true, sub_menus: [
                                { title: 'Chairs', link: '/category/Chairs', },
                                { title: 'Tables', link: '/category/Tables', },
                                { title: 'Storage', link: '/category/Storage', },
                                { title: 'Beds', link: '/category/Beds', },
                                { title: "Children's", link: "/category/Children's", },
                                { title: 'Smartphones', link: '/category/Smartphones', },
                                { title: 'Video games', link: '/category/Video-games', },
                                { title: 'Lap Top', link: '/category/Lap-Top', },
                            ]
                        },
                        {
                            title: 'Samsung', link: '/category/samsung', general: true, sub_menus: [
                                { title: 'Pendants', link: '/category/Pendants', },
                                { title: 'Floor lamps', link: '/category/Floor-lamps', },
                                { title: 'Outdoor', link: '/category/Outdoor', },
                                { title: 'Clocks', link: '/category/Clocks', },
                                { title: "Small storage", link: "/category/Small-storage", },
                                { title: 'Cocktail', link: '/category/Cocktail', },
                                { title: 'Evening', link: '/category/Evening', },
                                { title: 'Sports', link: '/category/Sports', },
                            ]
                        },
                        {
                            title: 'HTC', link: '/category/htc', general: true, sub_menus: [
                                { title: 'Fashion & Clothing', link: '/category/Fashion-&-Clothing', },
                                { title: 'Beauty Spa', link: '/category/Beauty-Spa', },
                                { title: 'Decoration', link: '/category/Decoration', },
                                { title: 'Accessories', link: '/category/Accessories', },
                                { title: "Clothing", link: "/category/clothing", },
                                { title: 'Sandals', link: '/category/Sandals', },
                                { title: 'Books', link: '/category/Books', },
                                { title: 'Blazers', link: '/category/Blazers', },
                            ]
                        },
                        {
                            title: 'Nokia', link: '/category/nokia', general: true, sub_menus: [
                                { title: 'Electronic', link: '/category/Electronic' },
                                { title: 'Coats', link: '/category/Coats' },
                                { title: 'Shirts', link: '/category/Shirts' },
                                { title: 'Funiture', link: '/category/Funiture' },
                                { title: 'Books', link: '/category/Books' },
                                { title: 'Davenport', link: '/category/Davenport' },
                                { title: 'Decoration', link: '/category/Decoration' },
                                { title: 'Dental care', link: '/category/Dental-care' },
                            ]
                        },
                    ],
                },
                { title: 'Fashion & Clothings', link: '/category/fashion-&-clothings', },
                { title: 'Jewelry & Watches', link: '/category/jewelry-&-watches', },
                { title: 'Health & Beauty', link: '/category/health-&-beauty', },
                { title: 'Sound & Speaker', link: '/category/sound-&-speaker', },
                {
                    title: 'TV & Audio',
                    link: '/category/tv-&-audio',
                    wrap: 'nowrap',
                    dir: 'column',
                    sub_menus: [
                        { title: 'Sony', link: '/category/sony', },
                        { title: 'Samsung', link: '/category/samsung', },
                        { title: 'LG', link: '/category/lg', },
                        { title: 'HP', link: '/category/hp', },
                        { title: 'Beat Audio', link: '/category/beat-audio', },
                    ],
                },
                { title: 'Games & Audio Music', link: '/category/games-&-audio-music', },
                { title: '+ All Categories', },
            ]
        },
        header_menus: [
            { title: 'NEW ARRIVALS', link: '/category/new-arrivals', general: true, },
            {
                title: 'FEATURES', general: true,
                sub_menus: [
                    {
                        title: 'Product Types',
                        sub_menus: [
                            { title: 'Simple Product', link: '/category/simple-product' },
                            { title: 'Grouped Product', link: '/category/grouped-product' },
                            { title: 'Configurable Product', link: '/category/configurable-product' },
                            { title: 'Virtual Product', link: '/category/virtual-product' },
                            { title: 'Bundle Product', link: '/category/bundle-product' },
                            { title: 'Downloadable Product', link: '/category/downloadable-product' },
                        ],
                    },
                    {
                        title: 'Product Features',
                        sub_menus: [
                            { title: 'Product With Related', link: '/category/product-with-related', },
                            { title: 'Product With Upsell', link: '/category/product-with-upsell', }
                        ],
                    },
                    { title: 'Shop By Brand', link: 'shop-by-brand' },
                ],
            },
            { title: 'BLOG', link: '/blog', general: true, },
            { title: 'ABOUT US', link: '/about-us', general: true, },
            { title: 'FIND A STORE', link: '/find-a-store', general: true, }
        ],
        currency: {},
        lang_rtl: {},
    },
    home: {
        categories: {
            new_arrivals: {
                products: [
                    {
                        rating: 1,
                        images: [{
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                        },
                        {

                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                        },
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                        },
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                        },],
                        name: 'Blink Home Security Camera System 01 ',
                        sold_by: 'Young Shop ',
                        price: 620,
                        description: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book",
                        link: '/product',
                        isInStock: 'In Stock',
                        discounted: 50,
                        new: true,
                        id: 1,
                        sku: 'Blink Home Security Camera System 01 ',
                        features: [
                            { text: 'Light green crewneck sweatshirt.' },
                            { text: 'Hand pockets.' },
                            { text: 'Relaxed fit.' },
                            { text: 'Machine wash/dry.' },
                        ],
                    }, {
                        rating: 2,
                        images: [
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                            },
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                            },
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                            },
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                            },],
                        name: 'Blink Home Security Camera System',
                        sku: 'Blink Home Security Camera System',
                        sold_by: "Robert's store",
                        price: 366,
                        link: '/product',
                        description: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book",
                        id: 2,
                        isInStock: 'In Stock',
                        new: true,
                        features: [
                            { text: 'Light green crewneck sweatshirt.' },
                            { text: 'Hand pockets.' },
                            { text: 'Relaxed fit.' },
                            { text: 'Machine wash/dry.' },
                        ],
                    }, {
                        rating: 3,
                        images: [
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                            },
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                            },
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                            },
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                            },],
                        id: 3,
                        name: 'Dell UltraSharp UP3218K: £3,199.99, Scan.co.uk ',
                        sku: 'Dell UltraSharp UP3218K: £3,199.99, Scan.co.uk ',
                        sold_by: "Robert's store",
                        description: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book",
                        link: '/product',
                        price: 20000,
                        new: true,
                        isInStock: 'In Stock',
                        discounted: 32,
                        features: [
                            { text: 'Light green crewneck sweatshirt.' },
                            { text: 'Hand pockets.' },
                            { text: 'Relaxed fit.' },
                            { text: 'Machine wash/dry.' },
                        ],
                    },
                ],
            },
            on_sale: {
                products: [
                    {
                        isInStock: 'In Stock',
                        rating: 3,
                        images: [
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                            },
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                            },
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                            },
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                            },],
                        id: 4,
                        horizontal: true,
                        name: 'Dell UltraSharp UP3218K: £3,199.99, Scan.co.uk ',
                        sku: 'Dell UltraSharp UP3218K: £3,199.99, Scan.co.uk ',
                        description: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book",
                        sold_by: "Robert's store",
                        link: '/product',
                        price: 266,
                        features: [
                            { text: 'Light green crewneck sweatshirt.' },
                            { text: 'Hand pockets.' },
                            { text: 'Relaxed fit.' },
                            { text: 'Machine wash/dry.' },
                        ],
                    },
                    {
                        rating: 3,
                        isInStock: 'In Stock',
                        images: [
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                            },
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                            },
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                            },
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                            },],
                        id: 5,
                        horizontal: true,
                        name: 'Dell UltraSharp UP3218K: £3,199.99, Scan.co.uk ',
                        sku: 'Dell UltraSharp UP3218K: £3,199.99, Scan.co.uk ',
                        sold_by: "Robert's store",
                        description: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book",
                        link: '/product',
                        isInStock: 'In Stock',
                        price: 266,
                        features: [
                            { text: 'Light green crewneck sweatshirt.' },
                            { text: 'Hand pockets.' },
                            { text: 'Relaxed fit.' },
                            { text: 'Machine wash/dry.' },
                        ],
                    },
                    {
                        rating: 3,
                        images: [
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                            },
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                            },
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                            },
                            {
                                original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                                thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                            },
                        ],
                        id: 6,
                        horizontal: true,
                        name: 'Dell UltraSharp UP3218K: £3,199.99, Scan.co.uk ',
                        sku: 'Dell UltraSharp UP3218K: £3,199.99, Scan.co.uk ',
                        sold_by: "Robert's store",
                        description: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book",
                        isInStock: 'In Stock',
                        link: '/product',
                        price: 266,
                        features: [
                            { text: 'Light green crewneck sweatshirt.' },
                            { text: 'Hand pockets.' },
                            { text: 'Relaxed fit.' },
                            { text: 'Machine wash/dry.' },
                        ],
                    },
                ]
            },
            top_best_selling: {
                products: [
                    {
                    rating: 1,
                    images: [
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                        },
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                        },
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                        },
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                        },],
                    id: 7,
                    name: 'Dell UltraSharp UP3218K: £3,199.99, Scan.co.uk ',
                    sku: 'Dell UltraSharp UP3218K: £3,199.99, Scan.co.uk ',
                    sold_by: "Robert's store",
                    link: '/product',
                    price: 540,
                    new: true,
                    features: [
                        { text: 'Light green crewneck sweatshirt.' },
                        { text: 'Hand pockets.' },
                        { text: 'Relaxed fit.' },
                        { text: 'Machine wash/dry.' },
                    ],
                    description: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book",
                },
                {
                    rating: 2,
                    images: [
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                        },
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                        },
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                        },
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                        },],
                    id: 8,
                    name: 'Dell UltraSharp UP3218K: £3,199.99, Scan.co.uk ',
                    sku: 'Dell UltraSharp UP3218K: £3,199.99, Scan.co.uk ',
                    sold_by: "Robert's store",
                    link: '/product',
                    price: 712,
                    description: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book",
                    isInStock: 'In Stock',
                    discounted: 30,
                    features: [
                        { text: 'Light green crewneck sweatshirt.' },
                        { text: 'Hand pockets.' },
                        { text: 'Relaxed fit.' },
                        { text: 'Machine wash/dry.' },
                    ],
                },
                {
                    rating: 8,
                    images: [
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                        },
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                        },
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                        },
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                        },
                    ],
                    id: 9,
                    name: 'Dell UltraSharp UP3218K: £3,199.99, Scan.co.uk ',
                    sku: 'Dell UltraSharp UP3218K: £3,199.99, Scan.co.uk ',
                    sold_by: "Robert's store",
                    description: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book",
                    link: '/product',
                    price: 1266,
                    isInStock: 'In Stock',
                    discounted: 40,
                    features: [
                        { text: 'Light green crewneck sweatshirt.' },
                        { text: 'Hand pockets.' },
                        { text: 'Relaxed fit.' },
                        { text: 'Machine wash/dry.' },
                    ],
                },
                {
                    rating: 3,
                    images: [
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/7/67_1_1.jpg',
                        },
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p10.jpg',
                        },
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/p/1/p12.jpg',
                        },
                        {
                            original: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                            thumbnail: 'http://blueskytechmage.com/ayo/pub/media/catalog/product/cache/deaf9d1efb5ef1969e75252000a0cbe9/6/9/69_5.jpg',
                        },],
                    id: 10,
                    name: 'Dell UltraSharp UP3218K: £3,199.99, Scan.co.uk ',
                    sku: 'Dell UltraSharp UP3218K: £3,199.99, Scan.co.uk ',
                    sold_by: "Robert's store",
                    description: "Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book",
                    link: '/product',
                    isInStock: 'In Stock',
                    price: 442,
                    features: [
                        { text: 'Light green crewneck sweatshirt.' },
                        { text: 'Hand pockets.' },
                        { text: 'Relaxed fit.' },
                        { text: 'Machine wash/dry.' },
                    ],
                },]
            },
        },
    },
    productPage: {
        products: [
            { type: 'product', name: 'My product', price: 150 }
        ],
    },
    footer: {
        top_footer: {
            news_letter: {
                title: "Sign Up For Newsletter",
                description: 'Join 60.000+ Subscribers and get a new discount coupon on every Saturday.'
            },
            subscribe: {
                button: 'Subscribe !',
                placeholder: 'Your email address...'
            },
            support: {
                title: "Suppor@texample.com",
                description: 'Support question?'
            }
        },
        main_footer: {
            description: 'All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the Internet.',
            links: [
                {
                    title: 'INFORMATION', general: true,
                    sub_menus: [
                        { title: 'Custom Service', link: '/custom-service' },
                        { title: 'F.A.Q.’s', link: '/f-a-q' },
                        { title: 'Ordering Tracking', link: '/ordering-tracking' },
                        { title: 'Contacts', link: '/contacts' },
                        { title: 'Events', link: '/events' },
                        { title: 'Popular', link: '/popular' },
                    ],
                },
                {
                    title: 'OUR SERVICES', general: true,
                    sub_menus: [
                        { title: 'Sitemap', link: '/sitemap' },
                        { title: 'Privacy Policy', link: 'privacy-policy' },
                        { title: 'Your Account', link: '/my-account' },
                        { title: 'Advanced Search', link: '/advanced-search' },
                        { title: 'Terms & Condition', link: '/terms-condition' },
                        { title: 'Contact Us', link: '/contact-us' },
                    ],
                },
                {
                    title: 'MY ACCOUNT', general: true,
                    sub_menus: [
                        { title: 'About us', link: '/about-us' },
                        { title: 'Delivery Information', link: 'delivery-information' },
                        { title: 'Privacy Policy', link: '/privacy-policy' },
                        { title: 'Discount', link: '/discount' },
                        { title: 'Custom Service', link: '/custom-service' },
                        { title: 'Terms & Condition', link: '/terms-condition' },
                    ],
                },
                {
                    title: 'FOLLOW US ON', general: true,
                    sub_menus: [
                        { title: 'Facebook', link: 'https://www.facebook.com/' },
                        { title: 'Twitter', link: 'https://twitter.com/' },
                        { title: 'Gmail +', link: 'https://gmail.com/' },
                        { title: 'RSS', link: 'https://rss.com/' },
                        { title: 'Instagram', link: 'https://www.instagram.com/' },
                        { title: 'Pinterest', link: 'https://www.pinterest.com/' },
                    ],
                }
            ],
        }
    },
}


export const addProductToCart  = (product) => {
    console.log('asds')
    state.selected_products.push(product)
}


export default state;