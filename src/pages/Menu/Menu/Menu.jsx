import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import soupImage from "../../../assets/menu/soup-bg.jpg";
import dessertImage from "../../../assets/menu/dessert-bg.jpeg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [items] = useMenu();
  const offered = items.filter((item) => item.category === "offered");
  const desserts = items.filter((item) => item.category === "dessert");
  const pizza = items.filter((item) => item.category === "pizza");
  const soup = items.filter((item) => item.category === "soup");
  const salad = items.filter((item) => item.category === "salad");
  return (
    <div>
      <Helmet>
        <title>Menu | Bistro Boss</title>
      </Helmet>
      {/* Menu cover */}
      <Cover
        title={"Our Menu"}
        description="Would You Like To Try A Dish?"
        image={menuImage}
      ></Cover>

      {/* todays offer */}
      <SectionTitle subtitle="Don't Miss" title="today's offer"></SectionTitle>
      <MenuCategory menuItems={offered}></MenuCategory>

      {/* desserts */}
      <MenuCategory
        menuItems={desserts}
        title={"desserts"}
        description="Would You Like To Try Our Desserts?"
        menuImage={dessertImage}
      ></MenuCategory>
      {/* pizza */}
      <MenuCategory
        menuItems={pizza}
        title={"pizza"}
        description="Would You Like To Try Our Pizza?"
        menuImage={pizzaImage}
      ></MenuCategory>
      {/* soup */}
      <MenuCategory
        menuItems={soup}
        title={"soup"}
        description="Would You Like To Try Our Soup?"
        menuImage={soupImage}
      ></MenuCategory>
      {/* salad */}
      <MenuCategory
        menuItems={salad}
        title={"salad"}
        description="Would You Like To Try Our Salad?"
        menuImage={saladImage}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
