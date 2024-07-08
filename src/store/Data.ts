import {Option} from "../types/interfaces/Option";
import {Notification} from "../types/interfaces/Notification";
import {Product} from "../types/interfaces/Product";
import {Store} from "../types/interfaces/Store";
import {Favorite} from "../types/interfaces/Favorite";
import {Categories} from "../types/interfaces/Categories";
import {StoreStatus} from "../types/enums/StoreStatus";
import {OrderStatus} from "../types/enums/OrderStatus";
import {Order} from "../types/interfaces/Order";

export const ADDRESS: Option[] = [
  {
    isSelected: false,
    title: "Home",
    subtitle1: "Address: Vitória da Conquista",
    subtitle2: "City: Vitória da Conquista",
  },
  {
    isSelected: false,
    title: "Work",
    subtitle1: "Address: 1600 Amphitheatre Parkway",
    subtitle2: "City: Mountain View",
  },
  {
    isSelected: true,
    title: "University",
    subtitle1: "Address: Av. Sérgio Vieira de Melo, 3150",
    subtitle2: "City: Vitória da Conquista",
  },
];

export const NOTIFICATIONS: Notification[] = [
  {
    title: "Notification",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    isRead: false,
  },
  {
    title: "Notification2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    isRead: true,
  },
  {
    title: "Notification3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    isRead: true,
  },
  {
    title: "Notification4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    isRead: true,
  },
  {
    title: "Notification5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    isRead: true,
  },
  {
    title: "Notification5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    isRead: true,
  },
  {
    title: "Notification5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    isRead: true,
  },
  {
    title: "Notification5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    isRead: true,
  },
  {
    title: "Notification5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    isRead: true,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    imageURL:
      "https://starbucks-menu-with-prices.com/wp-content/uploads/2023/11/Caffe-Americano.jpeg",
    name: "Caffè Americano",
    description:
      "Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.",
    price: 12.9,
    store: "Starbucks",
    prepTimeMin: 6,
    prepTimeMax: 9,
  },
  {
    id: "2",
    imageURL:
      "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_SignatureHotChocolate.jpg?impolicy=1by1_wide_topcrop_630",
    name: "Hot Chocolate",
    description:
      "Steamed milk with chocolate-flavored syrups. Topped with sweetened whipped cream and chocolate-flavored drizzle. A timeless classic made to sweeten your spirits.",
    price: 10.85,
    store: "Starbucks",
    prepTimeMin: 6,
    prepTimeMax: 9,
  },
  {
    id: "3",
    imageURL:
      "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20211210_MochaCookieCrumbleFrapp.jpg?impolicy=1by1_wide_topcrop_630",
    name: "Mocha Cookie Crumble Frappuccino",
    description:
      "Frappuccino® Roast coffee, mocha sauce and Frappuccino® chips blended with milk and ice, layered on top of whipped cream and chocolate cookie crumble and topped with vanilla whipped cream, mocha drizzle and even more chocolate cookie crumble.",
    price: 18.2,
    store: "Starbucks",
    prepTimeMin: 6,
    prepTimeMax: 9,
  },
  {
    id: "4",
    imageURL:
      "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190531_IcedBlackTea.jpg?impolicy=1by1_wide_topcrop_630",
    name: "Iced Black Tea",
    description:
      "Premium black tea sweetened just right and shaken with ice to create an ideal iced tea—a rich and flavorful black tea journey awaits you.",
    price: 8,
    store: "Starbucks",
    prepTimeMin: 6,
    prepTimeMax: 9,
  },
  {
    id: "5",
    imageURL:
      "https://cdnstatic8.com/centralbrew.com.br/blog/wp-content/uploads/S%C3%A9rie-estilos-de-cerveja-conhe%C3%A7a-as-Red-Ale.jpg",
    name: "Dragon's Breath Ale",
    description:
      "A robust and full-bodied beer with notes of roasted malt and a slight bitterness reminiscent of a dragon's fire.",
    price: 4,
    store: "The Smoking Barrel",
    prepTimeMin: 0,
    prepTimeMax: 0,
  },
  {
    id: "6",
    imageURL:
      "https://tudonossoreceitas.com/wp-content/uploads/2021/07/Drink-Lagoa-Azul.jpg",
    name: "Wizard's Elixir",
    description:
      "A mysterious cocktail made with a secret blend of local herbs and spirits, known for its revitalizing properties and unique flavor.",
    price: 8.25,
    store: "The Smoking Barrel",
    prepTimeMin: 2,
    prepTimeMax: 3,
  },
  {
    id: "7",
    imageURL: "https://nextluxury.com/wp-content/uploads/dark-beer.jpg",
    name: "Dwarven Stout",
    description:
      "A dark and powerful beer with intense flavors of coffee and chocolate, perfect for lovers of more robust beverages.",
    price: 5,
    store: "The Smoking Barrel",
    prepTimeMin: 0,
    prepTimeMax: 0,
  },
  {
    id: "8",
    imageURL:
      "https://i0.wp.com/territoriosgastronomicos.uai.com.br/wp-content/uploads/2022/03/drink-de-maca-verde-1.jpeg?resize=582%2C960&ssl=1",
    name: "Goblin's Grog",
    description:
      "A strong and spicy drink made with a special blend of rum, spices, and a citrusy twist, popular among the boldest adventurers.",
    price: 12.8,
    store: "The Smoking Barrel",
    prepTimeMin: 2,
    prepTimeMax: 3,
  },
  {
    id: "9",
    imageURL:
      "https://www.djapa.com.br/wp-content/uploads/2020/03/harumaki-de-legumes.jpg",
    name: "Harumaki",
    description:
      "Harumaki, commonly known as spring rolls, are a delightful Japanese dish characterized by their thin, crispy wrappers filled with a savory mixture of vegetables. The filling typically includes shredded cabbage, carrots, bean sprouts, and often mushrooms, seasoned with soy sauce.",
    price: 12.25,
    store: "Sakura Garden",
    prepTimeMin: 16,
    prepTimeMax: 20,
  },
  {
    id: "10",
    imageURL:
      "https://www.djapa.com.br/wp-content/uploads/2021/09/hot-roll.jpg",
    name: "Harumaki",
    description:
      "breaded and fried sushi after being rolled. With different flavors, it brings a pleasant bittersweetness and conquers the most diverse palates.",
    price: 20.25,
    store: "Sakura Garden",
    prepTimeMin: 16,
    prepTimeMax: 20,
  },
  {
    id: "11",
    imageURL: "https://www.djapa.com.br/wp-content/uploads/2021/01/sashimi.jpg",
    name: "Sashimi",
    description:
      "Sashimi is a traditional Japanese dish consisting of thinly sliced, fresh raw fish, served with soy sauce and wasabi.",
    price: 20.25,
    store: "Sakura Garden",
    prepTimeMin: 16,
    prepTimeMax: 20,
  },
  {
    id: "12",
    imageURL:
      "https://www.receiteria.com.br/wp-content/uploads/bolo-de-carne-vegano-1.jpg",
    name: "Vegan meatloaf",
    description:
      "To accompany the everyday rice and beans, how about a vegan lentil meatloaf? Made with lentils, it's rich in protein, fiber, vitamins, and minerals. Additionally, the seasonings used (chimichurri, sweet paprika, and thyme) add an incredible touch to the dish.",
    price: 26.0,
    store: "Alma Verde",
    prepTimeMin: 20,
    prepTimeMax: 30,
  },
  {
    id: "13",
    imageURL:
      "https://www.receiteria.com.br/wp-content/uploads/bife-de-frango-vegano-730x730.jpg",
    name: "Vegan chicken steak",
    description:
      "The photo is quite deceiving, isn't it? At first glance, you wouldn't think it's a vegetable steak, but believe me, this vegan chicken steak is made with tofu! The secret to creating that delicious crispy layer is to coat it well with a mix of flours.",
    price: 23.4,
    store: "Alma Verde",
    prepTimeMin: 20,
    prepTimeMax: 30,
  },
  {
    id: "14",
    imageURL:
      "https://www.receiteria.com.br/wp-content/uploads/pao-de-queijo-vegano.jpeg",
    name: "vegan cheese bread ",
    description:
      "vegan cheese bread that has that chewy texture everyone loves. And for that, the secret ingredient that can't be missed is the russet potato, which should be well cooked and mashed until it becomes a puree!",
    price: 23.4,
    store: "Alma Verde",
    prepTimeMin: 10,
    prepTimeMax: 20,
  },
  {
    id: "15",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGsZndjPZyt_09sq0rdqy-1vRlan5EtI72A&s",
    name: "A Midsummer Night's Dream",
    description:
      "A magical blend of mixed berries with a hint of mint, capturing the whimsical spirit of the fairy world.",
    price: 12,
    store: "Milk Shakespeare",
    prepTimeMin: 8,
    prepTimeMax: 10,
  },
  {
    id: "16",
    imageURL:
      "https://i0.wp.com/www.essenciastudio.com.br/wp-content/uploads/2024/01/milk-shake-de-romeu-e-julieta-1.webp?resize=930%2C620&ssl=1",
    name: "Romeo and Juliet",
    description:
      "A guava paste and cream cheese, representing the sweet and pure love between Romeo and Juliet.",
    price: 13,
    store: "Milk Shakespeare",
    prepTimeMin: 8,
    prepTimeMax: 10,
  },
  {
    id: "17",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWADHsLcmuRE3DsQHHD8FEQbiXWSgnPqGz_w&s",
    name: "Othello",
    description:
      "A pistachio and vanilla milkshake with a blackcurrant syrup swirl, reflecting the betrayal and intense emotions of Othello.",
    price: 10,
    store: "Milk Shakespeare",
    prepTimeMin: 8,
    prepTimeMax: 10,
  },
  {
    id: "18",
    imageURL:
      "https://s2-g1.glbimg.com/ohn3b94j1Nc5JfjMuFQ1l6D_8x8=/0x216:992x1216/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/8/Z/aAnImuQySjDvtaxNdTwg/pizza-13-.jpeg",
    name: "Luffys",
    description:
      "This pizza is enough to satisfy Luffy's and your hunger. It includes jerked beef, bacon, egg, tomato, mozzarella, cheddar, parmesan, and gorgonzola.",
    price: 23,
    store: "One Pizza",
    prepTimeMin: 20,
    prepTimeMax: 30,
  },
  {
    id: "19",
    imageURL:
      "https://pt-static.z-dn.net/files/dfd/dcff812f0a800d275ccd703f847caa80.jpeg",
    name: "Three swords",
    description:
      "This pizza is so flavorful that you'll get lost in all the taste, just like Zoro gets lost. It's a barbecue beef pizza.",
    price: 20,
    store: "One Pizza",
    prepTimeMin: 20,
    prepTimeMax: 30,
  },
  {
    id: "20",
    imageURL:
      "https://pt-static.z-dn.net/files/dfd/dcff812f0a800d275ccd703f847caa80.jpeg",
    name: "Sanji",
    description:
      "As the talented cook he is, Sanji would appreciate a classic pizza with simple and fresh ingredients like tomato, mozzarella, and basil. It's a margherita pizza with fresh basil.",
    price: 20,
    store: "One Pizza",
    prepTimeMin: 20,
    prepTimeMax: 30,
  },
  {
    id: "21",
    imageURL:
      "https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-pizza-de-camarao.jpg",
    name: "Nami",
    description:
      "Inspired by Nami's navigation skills and her connection to the sea, this pizza is fresh and full of ocean flavors, complemented by aromatic pesto. It's a shrimp pizza.",
    price: 20,
    store: "One Pizza",
    prepTimeMin: 20,
    prepTimeMax: 30,
  },
];

export const CATEGORIES: Categories[] = [
  {
    title: "Offers",
    id: "1",
  },
  {
    title: "Drinks",
    id: "2",
  },
  {
    title: "Vegan",
    id: "3",
  },
  {
    title: "Gourmet",
    id: "4",
  },
  {
    title: "Fruits",
    id: "5",
  },
  {
    title: "Home",
    id: "6",
  },
  {
    title: "Desserts",
    id: "7",
  },
  {
    title: "Inter",
    id: "8",
  },
];

export const STORE: Store[] = [
  {
    id: "1",
    name: "Startbucks",
    status: StoreStatus.OPEN,
    logoURL:
      "https://itaupowershopping.com.br/cont/uploads/2023/02/starbucks-1-1-1-1.jpg",
    bannerURL:
      "https://www.cartacapital.com.br/wp-content/uploads/2023/11/1280px-Starbucks_Coffee_Mannheim_August_2012.jpeg",
    description:
      "Starbucks is like a coffee wonderland. Imagine a cozy yet bustling space where the rich aroma of freshly brewed coffee envelops you the moment you step inside. ",
    note: "4.2",
    category: "Drinks",
    storeDistance: "1.2km", // calculado dentro da aplicação
    deliveryTime: "25", // calculado dentro da aplicação, tempo de preparo + tempo pra percorrer a distância
    products: [
      {
        id: "1",
        imageURL:
          "https://starbucks-menu-with-prices.com/wp-content/uploads/2023/11/Caffe-Americano.jpeg",
        name: "Caffè Americano",
        description:
          "Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.",
        price: 12.9,
        store: "Starbucks",
        prepTimeMin: 6,
        prepTimeMax: 9,
      },
      {
        id: "2",
        imageURL:
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_SignatureHotChocolate.jpg?impolicy=1by1_wide_topcrop_630",
        name: "Hot Chocolate",
        description:
          "Steamed milk with chocolate-flavored syrups. Topped with sweetened whipped cream and chocolate-flavored drizzle. A timeless classic made to sweeten your spirits.",
        price: 10.85,
        store: "Starbucks",
        prepTimeMin: 6,
        prepTimeMax: 9,
      },
      {
        id: "3",
        imageURL:
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20211210_MochaCookieCrumbleFrapp.jpg?impolicy=1by1_wide_topcrop_630",
        name: "Mocha Cookie Crumble Frappuccino",
        description:
          "Frappuccino® Roast coffee, mocha sauce and Frappuccino® chips blended with milk and ice, layered on top of whipped cream and chocolate cookie crumble and topped with vanilla whipped cream, mocha drizzle and even more chocolate cookie crumble.",
        price: 18.2,
        store: "Starbucks",
        prepTimeMin: 6,
        prepTimeMax: 9,
      },
      {
        id: "4",
        imageURL:
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190531_IcedBlackTea.jpg?impolicy=1by1_wide_topcrop_630",
        name: "Iced Black Tea",
        description:
          "Premium black tea sweetened just right and shaken with ice to create an ideal iced tea—a rich and flavorful black tea journey awaits you.",
        price: 8,
        store: "Starbucks",
        prepTimeMin: 6,
        prepTimeMax: 9,
      },
    ],
  },
  {
    id: "2",
    name: "The Smoking Barrel",
    status: StoreStatus.OPEN,
    logoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoOuA5KjGX9CuAsDSTauNpkWfJgd1OVz4XQ&s",
    bannerURL: "https://saopauloparacriancas.com.br/wp-content/uploads/2017/12/image-43-1.jpg",
    description:
      "The Smoking Barrel is a cozy tavern known for its warm atmosphere and hearty meals. As you enter, the inviting aroma of roasting meats and bubbling stews fills the air1", // texto grande tá quebrando no exemplo
    note: "5.0",
    category: "Drinks",
    storeDistance: "2km", // calculado dentro da aplicação
    deliveryTime: "5min", // calculado dentro da aplicação
    products: [
      {
        id: "5",
        imageURL:
          "https://cdnstatic8.com/centralbrew.com.br/blog/wp-content/uploads/S%C3%A9rie-estilos-de-cerveja-conhe%C3%A7a-as-Red-Ale.jpg",
        name: "Dragon's Breath Ale",
        description:
          "A robust and full-bodied beer with notes of roasted malt and a slight bitterness reminiscent of a dragon's fire.",
        price: 4,
        store: "The Smoking Barrel",
        prepTimeMin: 0,
        prepTimeMax: 0,
      },
      {
        id: "6",
        imageURL:
          "https://tudonossoreceitas.com/wp-content/uploads/2021/07/Drink-Lagoa-Azul.jpg",
        name: "Wizard's Elixir",
        description:
          "A mysterious cocktail made with a secret blend of local herbs and spirits, known for its revitalizing properties and unique flavor.",
        price: 8.25,
        store: "The Smoking Barrel",
        prepTimeMin: 2,
        prepTimeMax: 3,
      },
      {
        id: "7",
        imageURL: "https://nextluxury.com/wp-content/uploads/dark-beer.jpg",
        name: "Dwarven Stout",
        description:
          "A dark and powerful beer with intense flavors of coffee and chocolate, perfect for lovers of more robust beverages.",
        price: 5,
        store: "The Smoking Barrel",
        prepTimeMin: 0,
        prepTimeMax: 0,
      },
      {
        id: "8",
        imageURL:
          "https://i0.wp.com/territoriosgastronomicos.uai.com.br/wp-content/uploads/2022/03/drink-de-maca-verde-1.jpeg?resize=582%2C960&ssl=1",
        name: "Goblin's Grog",
        description:
          "A strong and spicy drink made with a special blend of rum, spices, and a citrusy twist, popular among the boldest adventurers.",
        price: 12.8,
        store: "The Smoking Barrel",
        prepTimeMin: 2,
        prepTimeMax: 3,
      },
    ],
  },
  {
    id: "3",
    name: "Sakura Garden",
    status: StoreStatus.OPEN,
    logoURL:
      "https://static.vecteezy.com/ti/vetor-gratis/p1/3221092-logo-design-para-restaurante-japones-gratis-vetor.jpg",
    bannerURL:
      "https://portal6.com.br/wp-content/uploads/2021/04/6FDBA95C-CA53-4129-8056-9CC6608524B9.jpeg",
    description:
      "At Sakura Garden, our mission is to provide an authentic and unforgettable experience, immersing you in the rich heritage of Japanese cuisine. specialized chefs.",
    note: "2.4",
    category: "Restaurant",
    storeDistance: "1.2km", // calculado dentro da aplicação
    deliveryTime: "45min", // calculado dentro da aplicação
    products: [
      {
        id: "9",
        imageURL:
          "https://www.djapa.com.br/wp-content/uploads/2020/03/harumaki-de-legumes.jpg",
        name: "Harumaki",
        description:
          "Harumaki, commonly known as spring rolls, are a delightful Japanese dish characterized by their thin, crispy wrappers filled with a savory mixture of vegetables. The filling typically includes shredded cabbage, carrots, bean sprouts, and often mushrooms, seasoned with soy sauce.",
        price: 12.25,
        store: "Sakura Garden",
        prepTimeMin: 16,
        prepTimeMax: 20,
      },
      {
        id: "10",
        imageURL:
          "https://www.djapa.com.br/wp-content/uploads/2021/09/hot-roll.jpg",
        name: "Harumaki",
        description:
          "breaded and fried sushi after being rolled. With different flavors, it brings a pleasant bittersweetness and conquers the most diverse palates.",
        price: 20.25,
        store: "Sakura Garden",
        prepTimeMin: 16,
        prepTimeMax: 20,
      },
      {
        id: "11",
        imageURL:
          "https://www.djapa.com.br/wp-content/uploads/2021/01/sashimi.jpg",
        name: "Sashimi",
        description:
          "Sashimi is a traditional Japanese dish consisting of thinly sliced, fresh raw fish, served with soy sauce and wasabi.",
        price: 20.25,
        store: "Sakura Garden",
        prepTimeMin: 16,
        prepTimeMax: 20,
      },
    ],
  },
  {
    id: "4",
    name: "Alma Verde",
    status: StoreStatus.OPEN,
    logoURL:
      "https://static.vecteezy.com/ti/vetor-gratis/p1/6484072-vegan-restaurante-logo-em-fundo-branco-vetor.jpg",
    bannerURL:
      "https://images.adsttc.com/media/images/5fd0/f124/63c0/173e/0800/0080/newsletter/_CAI7011.jpg?1607528712",
    description:
      "Welcome to Alma Verde, where plant-based dining meets culinary excellence. We prioritize using eco-friendly materials, minimizing waste.",
    note: "3.0",
    category: "Restaurant",
    storeDistance: "1.2km", // calculado dentro da aplicação
    deliveryTime: "45min", // calculado dentro da aplicação
    products: [
      {
        id: "12",
        imageURL:
          "https://www.receiteria.com.br/wp-content/uploads/bolo-de-carne-vegano-1.jpg",
        name: "Vegan meatloaf",
        description:
          "To accompany the everyday rice and beans, how about a vegan lentil meatloaf? Made with lentils, it's rich in protein, fiber, vitamins, and minerals. Additionally, the seasonings used (chimichurri, sweet paprika, and thyme) add an incredible touch to the dish.",
        price: 26.0,
        store: "Alma Verde",
        prepTimeMin: 20,
        prepTimeMax: 30,
      },
      {
        id: "13",
        imageURL:
          "https://www.receiteria.com.br/wp-content/uploads/bife-de-frango-vegano-730x730.jpg",
        name: "Vegan chicken steak",
        description:
          "The photo is quite deceiving, isn't it? At first glance, you wouldn't think it's a vegetable steak, but believe me, this vegan chicken steak is made with tofu! The secret to creating that delicious crispy layer is to coat it well with a mix of flours.",
        price: 23.4,
        store: "Alma Verde",
        prepTimeMin: 20,
        prepTimeMax: 30,
      },
      {
        id: "14",
        imageURL:
          "https://www.receiteria.com.br/wp-content/uploads/pao-de-queijo-vegano.jpeg",
        name: "vegan cheese bread ",
        description:
          "vegan cheese bread that has that chewy texture everyone loves. And for that, the secret ingredient that can't be missed is the russet potato, which should be well cooked and mashed until it becomes a puree!",
        price: 23.4,
        store: "Alma Verde",
        prepTimeMin: 10,
        prepTimeMax: 20,
      },
    ],
  },
  {
    id: "5",
    name: "Milk Shakespeare",
    status: StoreStatus.OPEN,
    logoURL:
      "https://i.pinimg.com/564x/95/ef/4d/95ef4d1cfe3f419e5f94624cff88cfbc.jpg",
    bannerURL:
      "https://i.pinimg.com/564x/c6/90/8d/c6908d146afbb109e0fda9b92826910e.jpg",
    description:
      "At Milk Shakespeare, we create for you more than just handcrafted drinks of milk and ice cream. Our hero's mission is to serve you shakes that taste like poetry.",
    note: "5.0",
    category: "Restaurant",
    storeDistance: "1.2km", // calculado dentro da aplicação
    deliveryTime: "45min", // calculado dentro da aplicação
    products: [
      {
        id: "15",
        imageURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGsZndjPZyt_09sq0rdqy-1vRlan5EtI72A&s",
        name: "A Midsummer Night's Dream",
        description:
          "A magical blend of mixed berries with a hint of mint, capturing the whimsical spirit of the fairy world.",
        price: 12,
        store: "Milk Shakespeare",
        prepTimeMin: 8,
        prepTimeMax: 10,
      },
      {
        id: "16",
        imageURL:
          "https://i0.wp.com/www.essenciastudio.com.br/wp-content/uploads/2024/01/milk-shake-de-romeu-e-julieta-1.webp?resize=930%2C620&ssl=1",
        name: "Romeo and Juliet",
        description:
          "A guava paste and cream cheese, representing the sweet and pure love between Romeo and Juliet.",
        price: 13,
        store: "Milk Shakespeare",
        prepTimeMin: 8,
        prepTimeMax: 10,
      },
      {
        id: "17",
        imageURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWADHsLcmuRE3DsQHHD8FEQbiXWSgnPqGz_w&s",
        name: "Othello",
        description:
          "A pistachio and vanilla milkshake with a blackcurrant syrup swirl, reflecting the betrayal and intense emotions of Othello.",
        price: 10,
        store: "Milk Shakespeare",
        prepTimeMin: 8,
        prepTimeMax: 10,
      },
    ],
  },
  {
    id: "6",
    name: "One Pizza",
    status: StoreStatus.OPEN,
    logoURL:
      "https://static.vecteezy.com/ti/vetor-gratis/p1/11157909-emblema-de-de-pizzaria-no-quadro-negro-modelo-de-logotipo-de-pizza-emblemaial-para-cafe-restaurante-ou-servico-de-entrega-de-comida-vetor.jpg",
    bannerURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-QWccf6mJTo3IuZcyAEMmjivKLpNYzX9fg&s",
    description:
      "Indulge in the authentic taste of Italy at One Pizza, where every slice is crafted with passion and tradition. Our pizzeria is dedicated to bringing.",
    note: "7.2",
    category: "Restaurant",
    storeDistance: "1.2km", // calculado dentro da aplicação
    deliveryTime: "45min", // calculado dentro da aplicação
    products: [
      {
        id: "18",
        imageURL:
          "https://s2-g1.glbimg.com/ohn3b94j1Nc5JfjMuFQ1l6D_8x8=/0x216:992x1216/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/8/Z/aAnImuQySjDvtaxNdTwg/pizza-13-.jpeg",
        name: "Luffys",
        description:
          "This pizza is enough to satisfy Luffy's and your hunger. It includes jerked beef, bacon, egg, tomato, mozzarella, cheddar, parmesan, and gorgonzola.",
        price: 23,
        store: "One Pizza",
        prepTimeMin: 20,
        prepTimeMax: 30,
      },
      {
        id: "19",
        imageURL:
          "https://pt-static.z-dn.net/files/dfd/dcff812f0a800d275ccd703f847caa80.jpeg",
        name: "Three swords",
        description:
          "This pizza is so flavorful that you'll get lost in all the taste, just like Zoro gets lost. It's a barbecue beef pizza.",
        price: 20,
        store: "One Pizza",
        prepTimeMin: 20,
        prepTimeMax: 30,
      },
      {
        id: "20",
        imageURL:
          "https://pt-static.z-dn.net/files/dfd/dcff812f0a800d275ccd703f847caa80.jpeg",
        name: "Sanji",
        description:
          "As the talented cook he is, Sanji would appreciate a classic pizza with simple and fresh ingredients like tomato, mozzarella, and basil. It's a margherita pizza with fresh basil.",
        price: 20,
        store: "One Pizza",
        prepTimeMin: 20,
        prepTimeMax: 30,
      },
      {
        id: "21",
        imageURL:
          "https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-pizza-de-camarao.jpg",
        name: "Nami",
        description:
          "Inspired by Nami's navigation skills and her connection to the sea, this pizza is fresh and full of ocean flavors, complemented by aromatic pesto. It's a shrimp pizza.",
        price: 20,
        store: "One Pizza",
        prepTimeMin: 20,
        prepTimeMax: 30,
      },
    ],
  },
];

export const FAVORITES: Favorite[] = [
  {
    imageURL: "https://neofeed.com.br/wp-content/uploads/2023/11/Starbucks.jpg",
    storeName: "Starbucks",
    info: "Coffee with milk",
    price: "14",
  },
];

export const ORDERS: Order[] = [
  {
    id: "1",
    storeImage:
      "https://itaupowershopping.com.br/cont/uploads/2023/02/starbucks-1-1-1-1.jpg",
    storeName: "Starbucks",
    status: OrderStatus.COMPLETED,
    itens: [
      {
        id: "1",
        name: "Mediterranean Delight Salad",
        price: 22.9,
        quantity: 2,
      },
      {
        id: "2",
        name: "Tasty bite",
        price: 32.25,
        quantity: 2,
      },
      {
        id: "3",
        name: "Coffee with milk",
        price: 12,
        quantity: 4,
      },
    ],
    total: 0,
  },
  {
    id: "2",
    storeImage:
      "https://itaupowershopping.com.br/cont/uploads/2023/02/starbucks-1-1-1-1.jpg",
    storeName: "Starbucks",
    status: OrderStatus.SENDING,
    itens: [
      {
        id: "1",
        name: "Mediterranean Delight Salad",
        price: 22.9,
        quantity: 2,
      },
    ],
    total: 0,
  },
  {
    id: "3",
    storeImage:
      "https://itaupowershopping.com.br/cont/uploads/2023/02/starbucks-1-1-1-1.jpg",
    storeName: "Starbucks",
    status: OrderStatus.CANCELED,
    itens: [
      {
        id: "2",
        name: "Tasty bite",
        price: 32.25,
        quantity: 2,
      },
      {
        id: "3",
        name: "Coffee with milk",
        price: 12,
        quantity: 2,
      },
    ],
    total: 0,
  },
  {
    id: "4",
    storeImage:
      "https://itaupowershopping.com.br/cont/uploads/2023/02/starbucks-1-1-1-1.jpg",
    storeName: "Starbucks",
    status: OrderStatus.CANCELED,
    itens: [
      {
        id: "3",
        name: "Coffee with milk",
        price: 12,
        quantity: 2,
      },
    ],
    total: 0,
  },
];
