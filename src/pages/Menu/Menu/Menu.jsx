import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu | Bistro Boss</title>
      </Helmet>
      <Cover
        title={"Our Menu"}
        description="Would You Like To Try A Dish?"
        image={menuImage}
      ></Cover>
    </div>
  );
};

export default Menu;
