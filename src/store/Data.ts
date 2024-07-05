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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu40Hn8BS9s0a5eJK1-Ll1KPq1once0zkthQ&s",
    name: "Mediterranean Delight Salad",
    description:
      "Indulge in the vibrant and refreshing flavors of the Mediterranean with our Mediterranean Salad. This delightful dish features a colorful medley of fresh ingredients, including crisp romaine, lorem lorem lorem lorem",
    price: 22.9,
    store: "Starbucks",
  },
  {
    id: "2",
    imageURL:
      "https://exame.com/wp-content/uploads/2020/05/Vinil-Burger.jpg?quality=70&strip=info",
    name: "Tasty bite",
    description:
      "This mouthwatering creation features a juicy, perfectly seasoned beef patty, grilled to perfection. It's topped with melted cheddar cheese, crisp lettuce, ripe tomatoes, and crunchy pickles....",
    price: 32.25,
    store: "Starbucks",
  },
  {
    id: "3",
    imageURL:
      "https://img.freepik.com/fotos-gratis/xicara-de-cafe-latte-quente_1339-8381.jpg?w=360&t=st=1699337551~exp=1699338151~hmac=3a5de69c3afaa55150bf7662d9706715fcb3d56334fbed49815fea92646a1742",
    name: "Coffee with milk",
    description:
      "Strong, dark, and aromatic, typically one or two shots. Whole milk is often used for its creaminess, but you can choose based on your preference",
    price: 12,
    store: "Starbucks",
  },
  {
    id: "4",
    imageURL:
      "https://img.freepik.com/fotos-gratis/xicara-de-cafe-latte-quente_1339-8381.jpg?w=360&t=st=1699337551~exp=1699338151~hmac=3a5de69c3afaa55150bf7662d9706715fcb3d56334fbed49815fea92646a1742",
    name: "Coffee with milk",
    description:
      "Strong, dark, and aromatic, typically one or two shots. Whole milk is often used for its creaminess, but you can choose based on your preference",
    price: 12,
    store: "Starbucks",
  },
  {
    id: "6",
    imageURL:
      "https://img.freepik.com/fotos-gratis/xicara-de-cafe-latte-quente_1339-8381.jpg?w=360&t=st=1699337551~exp=1699338151~hmac=3a5de69c3afaa55150bf7662d9706715fcb3d56334fbed49815fea92646a1742",
    name: "Coffee with milk",
    description: "lorem",
    price: 12,
    store: "Starbucks",
  },
  {
    id: "7",
    imageURL:
      "https://img.freepik.com/fotos-gratis/xicara-de-cafe-latte-quente_1339-8381.jpg?w=360&t=st=1699337551~exp=1699338151~hmac=3a5de69c3afaa55150bf7662d9706715fcb3d56334fbed49815fea92646a1742",
    name: "Coffee with milk",
    description: "lorem",
    price: 12,
    store: "Starbucks",
  },
  {
    id: "8",
    imageURL:
      "https://img.freepik.com/fotos-gratis/xicara-de-cafe-latte-quente_1339-8381.jpg?w=360&t=st=1699337551~exp=1699338151~hmac=3a5de69c3afaa55150bf7662d9706715fcb3d56334fbed49815fea92646a1742",
    name: "Coffee with milk",
    description: "lorem",
    price: 12,
    store: "Starbucks",
  },
  {
    id: "9",
    imageURL:
      "https://img.freepik.com/fotos-gratis/xicara-de-cafe-latte-quente_1339-8381.jpg?w=360&t=st=1699337551~exp=1699338151~hmac=3a5de69c3afaa55150bf7662d9706715fcb3d56334fbed49815fea92646a1742",
    name: "Coffee with milk",
    description: "lorem",
    price: 12,
    store: "Starbucks",
  },
  {
    id: "10",
    imageURL:
      "https://img.freepik.com/fotos-gratis/xicara-de-cafe-latte-quente_1339-8381.jpg?w=360&t=st=1699337551~exp=1699338151~hmac=3a5de69c3afaa55150bf7662d9706715fcb3d56334fbed49815fea92646a1742",
    name: "Coffee with milk",
    description: "lorem",
    price: 12,
    store: "Starbucks",
  },
  {
    id: "11",
    imageURL:
      "https://img.freepik.com/fotos-gratis/xicara-de-cafe-latte-quente_1339-8381.jpg?w=360&t=st=1699337551~exp=1699338151~hmac=3a5de69c3afaa55150bf7662d9706715fcb3d56334fbed49815fea92646a1742",
    name: "Coffee with milk",
    description: "lorem",
    price: 12,
    store: "Starbucks",
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
    title: "Food",
    id: "4",
  },
  {
    title: "Fruits",
    id: "5",
  },
  {
    title: "Lacto",
    id: "6",
  },
  {
    title: "Gluten",
    id: "7",
  },
  {
    title: "Food",
    id: "8",
  },
];

export const STORE: Store[] = [
  {
    name: "Startbucks",
    status: StoreStatus.OPEN,
    logoURL:
      "https://itaupowershopping.com.br/cont/uploads/2023/02/starbucks-1-1-1-1.jpg",
    bannerURL:
      "https://www.cartacapital.com.br/wp-content/uploads/2023/11/1280px-Starbucks_Coffee_Mannheim_August_2012.jpeg",
    description:
      "Starbucks is like a coffee wonderland. Imagine a cozy yet bustling space where the rich aroma of freshly brewed coffee envelops you the moment you step inside. ",
    note: "7.2",
    category: "Restaurant",
    storeDistance: "1.2km", // calculado dentro da aplicação
    deliveryTime: "45min", // calculado dentro da aplicação
  },
  {
    name: "Startbucks",
    status: StoreStatus.OPEN,
    logoURL:
      "https://itaupowershopping.com.br/cont/uploads/2023/02/starbucks-1-1-1-1.jpg",
    bannerURL:
      "https://www.cartacapital.com.br/wp-content/uploads/2023/11/1280px-Starbucks_Coffee_Mannheim_August_2012.jpeg",
    description:
      "Starbucks is like a coffee wonderland. Imagine a cozy yet bustling space where the rich aroma of freshly brewed coffee envelops you the moment you step inside. ",
    note: "7.2",
    category: "Restaurant",
    storeDistance: "1.2km", // calculado dentro da aplicação
    deliveryTime: "45min", // calculado dentro da aplicação
  },
  {
    name: "Startbucks",
    status: StoreStatus.OPEN,
    logoURL:
      "https://itaupowershopping.com.br/cont/uploads/2023/02/starbucks-1-1-1-1.jpg",
    bannerURL:
      "https://www.cartacapital.com.br/wp-content/uploads/2023/11/1280px-Starbucks_Coffee_Mannheim_August_2012.jpeg",
    description:
      "Starbucks is like a coffee wonderland. Imagine a cozy yet bustling space where the rich aroma of freshly brewed coffee envelops you the moment you step inside. ",
    note: "7.2",
    category: "Restaurant",
    storeDistance: "1.2km", // calculado dentro da aplicação
    deliveryTime: "45min", // calculado dentro da aplicação
  },
  {
    name: "Startbucks",
    status: StoreStatus.OPEN,
    logoURL:
      "https://itaupowershopping.com.br/cont/uploads/2023/02/starbucks-1-1-1-1.jpg",
    bannerURL:
      "https://www.cartacapital.com.br/wp-content/uploads/2023/11/1280px-Starbucks_Coffee_Mannheim_August_2012.jpeg",
    description:
      "Starbucks is like a coffee wonderland. Imagine a cozy yet bustling space where the rich aroma of freshly brewed coffee envelops you the moment you step inside. ",
    note: "7.2",
    category: "Restaurant",
    storeDistance: "1.2km", // calculado dentro da aplicação
    deliveryTime: "45min", // calculado dentro da aplicação
  },
  {
    name: "Startbucks",
    status: StoreStatus.OPEN,
    logoURL:
      "https://itaupowershopping.com.br/cont/uploads/2023/02/starbucks-1-1-1-1.jpg",
    bannerURL:
      "https://www.cartacapital.com.br/wp-content/uploads/2023/11/1280px-Starbucks_Coffee_Mannheim_August_2012.jpeg",
    description:
      "Starbucks is like a coffee wonderland. Imagine a cozy yet bustling space where the rich aroma of freshly brewed coffee envelops you the moment you step inside. ",
    note: "7.2",
    category: "Restaurant",
    storeDistance: "1.2km", // calculado dentro da aplicação
    deliveryTime: "45min", // calculado dentro da aplicação
  },
  {
    name: "Startbucks",
    status: StoreStatus.OPEN,
    logoURL:
      "https://itaupowershopping.com.br/cont/uploads/2023/02/starbucks-1-1-1-1.jpg",
    bannerURL:
      "https://www.cartacapital.com.br/wp-content/uploads/2023/11/1280px-Starbucks_Coffee_Mannheim_August_2012.jpeg",
    description:
      "Starbucks is like a coffee wonderland. Imagine a cozy yet bustling space where the rich aroma of freshly brewed coffee envelops you the moment you step inside. ",
    note: "7.2",
    category: "Restaurant",
    storeDistance: "1.2km", // calculado dentro da aplicação
    deliveryTime: "45min", // calculado dentro da aplicação
  },
  {
    name: "Startbucks",
    status: StoreStatus.OPEN,
    logoURL:
      "https://itaupowershopping.com.br/cont/uploads/2023/02/starbucks-1-1-1-1.jpg",
    bannerURL:
      "https://www.cartacapital.com.br/wp-content/uploads/2023/11/1280px-Starbucks_Coffee_Mannheim_August_2012.jpeg",
    description:
      "Starbucks is like a coffee wonderland. Imagine a cozy yet bustling space where the rich aroma of freshly brewed coffee envelops you the moment you step inside. ",
    note: "7.2",
    category: "Restaurant",
    storeDistance: "1.2km", // calculado dentro da aplicação
    deliveryTime: "45min", // calculado dentro da aplicação
  },
  {
    name: "Startbucks",
    status: StoreStatus.OPEN,
    logoURL:
      "https://itaupowershopping.com.br/cont/uploads/2023/02/starbucks-1-1-1-1.jpg",
    bannerURL:
      "https://www.cartacapital.com.br/wp-content/uploads/2023/11/1280px-Starbucks_Coffee_Mannheim_August_2012.jpeg",
    description:
      "Starbucks is like a coffee wonderland. Imagine a cozy yet bustling space where the rich aroma of freshly brewed coffee envelops you the moment you step inside. ",
    note: "7.2",
    category: "Restaurant",
    storeDistance: "1.2km", // calculado dentro da aplicação
    deliveryTime: "45min", // calculado dentro da aplicação
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
        quantity: 2
      },
      {
        id: "2",
        name: "Tasty bite",
        price: 32.25,
        quantity: 2
      },
      {
        id: "3",
        name: "Coffee with milk",
        price: 12,
        quantity: 4
      },
    ],
    total: 0
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
        quantity: 2
      },
    ],
    total: 0
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
        quantity: 2
      },
      {
        id: "3",
        name: "Coffee with milk",
        price: 12,
        quantity: 2
      },
    ],
    total: 0
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
        quantity: 2
      },
    ],
    total: 0
  },
];
