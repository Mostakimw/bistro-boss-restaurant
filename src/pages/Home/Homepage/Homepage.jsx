import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedItems from "../FeaturedItems/FeaturedItems";
import PopularMenu from "../PopularMenu/PopularMenu";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
      <FeaturedItems />
    </div>
  );
};

export default Homepage;
