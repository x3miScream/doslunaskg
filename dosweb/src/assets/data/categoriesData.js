import cli1_img from "../images/items/1/1.jpg";
import cli2_img from "../images/items/2/1.jpg";
import cli3_img from "../images/items/3/1.jpg";

const categoriesData = [
    {
      id: 0,
      name: 'Body Care',
      mainImage: cli1_img,
      description: 'Some fancy description',
      isNewCategory: true
    },
    {
      id: 1,
      name: 'Face Care',
      mainImage: cli2_img,
      description: 'Some fancy description',
      isNewCategory: true
    },
    {
      id: 2,
      name: 'Hair Care',
      mainImage: cli3_img,
      description: 'Some fancy description',
      isNewCategory: true
    },
    {
      id: 3,
      name: 'My Home Spray',
      mainImage: cli3_img,
      description: 'Some fancy description',
      isNewCategory: false
    }
]

export default categoriesData;