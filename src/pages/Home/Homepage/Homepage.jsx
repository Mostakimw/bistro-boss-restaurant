import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedItems from "../FeaturedItems/FeaturedItems";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
      <FeaturedItems />
      <Testimonials />
    </div>
  );
};

export default Homepage;
