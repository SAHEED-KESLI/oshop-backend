import { PrismaClient } from "@prisma/client";

const products = [
  {
    category: "fruits",
    imageUrl: "01.jpg",
    price: 1.75,
    title: "Avacado",
  },
  {
    category: "bread",
    imageUrl: "02.jpg",
    price: 1,
    title: "Bagel Bread",
  },
  {
    category: "fruits",
    imageUrl: "03.jpg",
    price: 1.95,
    title: "Strawberry",
  },
  {
    category: "fruits",
    imageUrl: "04.jpg",
    price: 2,
    title: "Peach",
  },
  {
    category: "fruits",
    imageUrl: "05.jpg",
    price: 1.25,
    title: "Banana",
  },
  {
    category: "bread",
    imageUrl: "06.jpg",
    price: 3,
    title: "Freshly Baked Bread",
  },
  {
    category: "vegetables",
    imageUrl: "07.jpg",
    price: 1.75,
    title: "Cauliflower",
  },
  {
    category: "seasonings",
    imageUrl: "08.jpg",
    price: 0.5,
    title: "Cinnamon Sticks",
  },
  {
    category: "bread",
    imageUrl: "09.jpg",
    price: 1.25,
    title: "Lavash Bread",
  },
  {
    category: "vegetables",
    imageUrl: "10.jpg",
    price: 2.5,
    title: "Tomato",
  },
  {
    category: "fruits",
    imageUrl: "11.jpg",
    price: 2,
    title: "Grape",
  },
  {
    category: "vegetables",
    imageUrl: "12.jpg",
    price: 1,
    title: "Lettuce",
  },
  {
    category: "fruits",
    imageUrl: "13.jpg",
    price: 1.7,
    title: "Orange",
  },
  {
    category: "bread",
    imageUrl: "14.jpg",
    price: 1.25,
    title: "Baguette Bread",
  },
  {
    category: "fruits",
    imageUrl: "15.jpg",
    price: 2,
    title: "Apple",
  },
  {
    category: "seasonings",
    imageUrl: "16.jpg",
    price: 0.75,
    title: "Ground Turmeric",
  },
  {
    category: "vegetables",
    imageUrl: "17.jpg",
    price: 2.5,
    title: "Spinach",
  },
  {
    category: "seasonings",
    imageUrl: "18.jpg",
    price: 3,
    title: "Saffron",
  },
  {
    category: "seasonings",
    imageUrl: "19.jpg",
    price: 0.5,
    title: "Coriander Seeds",
  },
  {
    category: "bread",
    imageUrl: "20.jpg",
    price: 1.25,
    title: "Slice Bread",
  },
  {
    category: "bread",
    imageUrl: "21.jpg",
    price: 1.25,
    title: "Milk Bread",
  },
  {
    category: "fruits",
    imageUrl: "22.jpg",
    price: 1.25,
    title: "Water Melon",
  },
  {
    category: "vegetables",
    imageUrl: "23.jpg",
    price: 1.25,
    title: "Cucumber",
  },
  {
    category: "vegetables",
    imageUrl: "24.jpg",
    price: 1.25,
    title: "Onions",
  },
  {
    category: "vegetables",
    imageUrl: "25.jpg",
    price: 1.25,
    title: "Mushroom",
  },
  {
    category: "vegetables",
    imageUrl: "26.jpg",
    price: 1.25,
    title: "Belle Pepper",
  },
  {
    category: "vegetables",
    imageUrl: "27.jpg",
    price: 1.25,
    title: "Carrot",
  },
  {
    category: "vegetables",
    imageUrl: "28.jpg",
    price: 1.25,
    title: "Broccoli",
  },
  {
    category: "Dairy",
    imageUrl: "29.jpg",
    price: 1.25,
    title: "Almond Milk",
  },
  {
    category: "Dairy",
    imageUrl: "30.jpg",
    price: 1.25,
    title: "Hemp Milk",
  },
  {
    category: "Dairy",
    imageUrl: "31.jpg",
    price: 1.25,
    title: "Oat Milk",
  },
  {
    category: "Dairy",
    imageUrl: "32.jpg",
    price: 1.25,
    title: "Coconut Milk",
  },
  {
    category: "Dairy",
    imageUrl: "33.jpg",
    price: 1.25,
    title: "Soy Milk",
  },
  {
    category: "Dairy",
    imageUrl: "34.jpg",
    price: 1.25,
    title: "Whole Milk",
  },
  {
    category: "seasonings",
    imageUrl: "35.jpg",
    price: 1.25,
    title: "Rosemary Seasonings",
  },
  {
    category: "seasonings",
    imageUrl: "36.jpg",
    price: 1.25,
    title: "Cumin Seasonings",
  },
  {
    category: "seasonings",
    imageUrl: "37.jpg",
    price: 1.25,
    title: "Paprika Seasonings",
  },
  {
    category: "seasonings",
    imageUrl: "38.jpg",
    price: 1.25,
    title: "Garlic Powder Seasonings",
  },
  {
    category: "seasonings",
    imageUrl: "39.jpg",
    price: 1.25,
    title: "Thyme Seasonings",
  },
  {
    category: "seasonings",
    imageUrl: "40.jpg",
    price: 1.25,
    title: "Oregano Seasonings",
  },
  {
    category: "seasonings",
    imageUrl: "41.jpg",
    price: 1.25,
    title: "Basil Seasonings",
  },
  {
    category: "fruits",
    imageUrl: "42.jpg",
    price: 1.25,
    title: "Pineapple",
  },
];

const categories = ["Bread", "Dairy", "Vegetables", "Seasonings", "Fruits"];

const prisma = new PrismaClient();

async function main() {
  for (let product of products) {
    await prisma.product.create({
      data: {
        category: product.category,
        price: product.price,
        imageUrl: product.imageUrl,
        title: product.title,
      },
    });
  }
  for (let category of categories) {
    await prisma.category.create({
      data: {
        name: category,
      },
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
