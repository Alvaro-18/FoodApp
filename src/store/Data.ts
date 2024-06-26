import {Option} from "../types/interfaces/Option";
import {Notification} from "../types/interfaces/Notification";
import {Product} from "../types/interfaces/Product";
import {Store} from "../types/interfaces/Store";
import {Favorite} from "../types/interfaces/Favorite";
import {Categories} from "../types/interfaces/Categories";

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
    productImageUrl:
      "https://img.freepik.com/fotos-gratis/xicara-de-cafe-latte-quente_1339-8381.jpg?w=360&t=st=1699337551~exp=1699338151~hmac=3a5de69c3afaa55150bf7662d9706715fcb3d56334fbed49815fea92646a1742",
    productName: "Coffee with milk",
    productDescription: "lorem",
    productPrice: "12",
    store: "Starbucks",
  },
  {
    id: "2",
    productImageUrl:
      "https://img.freepik.com/fotos-gratis/xicara-de-cafe-latte-quente_1339-8381.jpg?w=360&t=st=1699337551~exp=1699338151~hmac=3a5de69c3afaa55150bf7662d9706715fcb3d56334fbed49815fea92646a1742",
    productName: "Coffee with milk",
    productDescription: "lorem",
    productPrice: "12",
    store: "Starbucks",
  },
  {
    id: "3",
    productImageUrl:
      "https://img.freepik.com/fotos-gratis/xicara-de-cafe-latte-quente_1339-8381.jpg?w=360&t=st=1699337551~exp=1699338151~hmac=3a5de69c3afaa55150bf7662d9706715fcb3d56334fbed49815fea92646a1742",
    productName: "Coffee with milk",
    productDescription: "lorem",
    productPrice: "12",
    store: "Starbucks",
  },
  {
    id: "4",
    productImageUrl:
      "https://img.freepik.com/fotos-gratis/xicara-de-cafe-latte-quente_1339-8381.jpg?w=360&t=st=1699337551~exp=1699338151~hmac=3a5de69c3afaa55150bf7662d9706715fcb3d56334fbed49815fea92646a1742",
    productName: "Coffee with milk",
    productDescription: "lorem",
    productPrice: "12",
    store: "Starbucks",
  },
  {
    id: "5",
    productImageUrl:
      "https://img.freepik.com/fotos-gratis/xicara-de-cafe-latte-quente_1339-8381.jpg?w=360&t=st=1699337551~exp=1699338151~hmac=3a5de69c3afaa55150bf7662d9706715fcb3d56334fbed49815fea92646a1742",
    productName: "Coffee with milk",
    productDescription: "lorem",
    productPrice: "12",
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
    id: "2"
  },
  {
    title: "Vegan", 
    id: "3"
  },
  {
    title: "Food", 
    id: "4"
  },
  {
    title: "Fruits", 
    id: "5"
  },
  {
    title: "Lacto", 
    id: "6"
  },
  {
    title: "Gluten", 
    id: "7"
  },
  {
    title: "Food", 
    id: "8"
  },
];

export const STORE: Store[] = [
  {
    storeImageUrl:
      "https://cdn.ibahia.com/img/Artigo-Destaque/290000/Artigo-Destaque_00292013_00.jpg?xid=1299388",
    storeName: "Starbucks",
    storeDescription:
      "Include crisp lettuce varieties like romaine, iceberg, or mixed greens as a base .you'll find tomatoes, cucumbers, and bell peppers.",
    storeDistance: "1.2km", // calculado dentro da aplicação
    deliveryTime: "45min", // calculado dentro da aplicação
    storeNote: "10",
    category: "Offers",
  },
  {
    storeImageUrl:
      "https://cdn.ibahia.com/img/Artigo-Destaque/290000/Artigo-Destaque_00292013_00.jpg?xid=1299388",
    storeName: "Starbucks",
    storeDescription:
      "Include crisp lettuce varieties like romaine, iceberg, or mixed greens as a base .you'll find tomatoes, cucumbers, and bell peppers.",
    storeDistance: "1.2km",
    deliveryTime: "46min",
    storeNote: "10",
    category: "Offers",
  },
  {
    storeImageUrl:
      "https://cdn.ibahia.com/img/Artigo-Destaque/290000/Artigo-Destaque_00292013_00.jpg?xid=1299388",
    storeName: "Starbucks",
    storeDescription:
      "Include crisp lettuce varieties like romaine, iceberg, or mixed greens as a base .you'll find tomatoes, cucumbers, and bell peppers.",
    storeDistance: "1.2km",
    deliveryTime: "45min",
    storeNote: "10",
    category: "Vegan",
  },
  {
    storeImageUrl:
      "https://cdn.ibahia.com/img/Artigo-Destaque/290000/Artigo-Destaque_00292013_00.jpg?xid=1299388",
    storeName: "Starbucks",
    storeDescription:
      "Include crisp lettuce varieties like romaine, iceberg, or mixed greens as a base .you'll find tomatoes, cucumbers, and bell peppers.",
    storeDistance: "1.2km",
    deliveryTime: "45min",
    storeNote: "10",
    category: "Vegan",
  },
  {
    storeImageUrl:
      "https://cdn.ibahia.com/img/Artigo-Destaque/290000/Artigo-Destaque_00292013_00.jpg?xid=1299388",
    storeName: "Starbucks",
    storeDescription:
      "Include crisp lettuce varieties like romaine, iceberg, or mixed greens as a base .you'll find tomatoes, cucumbers, and bell peppers.",
    storeDistance: "1.2km",
    deliveryTime: "45min",
    storeNote: "10",
    category: "Vegan",
  },
  {
    storeImageUrl:
      "https://cdn.ibahia.com/img/Artigo-Destaque/290000/Artigo-Destaque_00292013_00.jpg?xid=1299388",
    storeName: "Starbucks",
    storeDescription:
      "Include crisp lettuce varieties like romaine, iceberg, or mixed greens as a base .you'll find tomatoes, cucumbers, and bell peppers.",
    storeDistance: "1.2km",
    deliveryTime: "45min",
    storeNote: "10",
    category: "Vegan",
  },
  {
    storeImageUrl:
      "https://cdn.ibahia.com/img/Artigo-Destaque/290000/Artigo-Destaque_00292013_00.jpg?xid=1299388",
    storeName: "Starbucks",
    storeDescription:
      "Include crisp lettuce varieties like romaine, iceberg, or mixed greens as a base .you'll find tomatoes, cucumbers, and bell peppers.",
    storeDistance: "1.2km",
    deliveryTime: "45min",
    storeNote: "10",
    category: "Vegan",
  },
  {
    storeImageUrl:
      "https://cdn.ibahia.com/img/Artigo-Destaque/290000/Artigo-Destaque_00292013_00.jpg?xid=1299388",
    storeName: "Starbucks",
    storeDescription:
      "Include crisp lettuce varieties like romaine, iceberg, or mixed greens as a base .you'll find tomatoes, cucumbers, and bell peppers.",
    storeDistance: "1.2km",
    deliveryTime: "45min",
    storeNote: "10",
    category: "Vegan",
  },
  {
    storeImageUrl:
      "https://cdn.ibahia.com/img/Artigo-Destaque/290000/Artigo-Destaque_00292013_00.jpg?xid=1299388",
    storeName: "Starbucks",
    storeDescription:
      "Include crisp lettuce varieties like romaine, iceberg, or mixed greens as a base .you'll find tomatoes, cucumbers, and bell peppers.",
    storeDistance: "1.2km",
    deliveryTime: "45min",
    storeNote: "10",
    category: "Vegan",
  },
  {
    storeImageUrl:
      "https://cdn.ibahia.com/img/Artigo-Destaque/290000/Artigo-Destaque_00292013_00.jpg?xid=1299388",
    storeName: "Starbucks",
    storeDescription:
      "Include crisp lettuce varieties like romaine, iceberg, or mixed greens as a base .you'll find tomatoes, cucumbers, and bell peppers.",
    storeDistance: "1.2km",
    deliveryTime: "45min",
    storeNote: "10",
    category: "Vegan",
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
