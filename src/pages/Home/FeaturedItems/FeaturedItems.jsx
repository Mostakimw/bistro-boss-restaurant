import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./FeaturedItem.css";

const FeaturedItems = () => {
  return (
    <div className="featured-item bg-fixed py-12 px-32 my-20 text-white ">
      <SectionTitle
        subtitle="check it out"
        title="Featured Item"
      ></SectionTitle>
      <div className="flex justify-center items-center gap-10 pt-8 pb-20 px-24">
        <img src={featuredImage} width={"500px"} alt="" />
        <div>
          <p>May 12 1990</p>
          <h4 className="text-3xl uppercase">Where Can I get Some?</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime ut
            accusamus, doloremque iste, cupiditate, ab praesentium cumque vero
            reiciendis possimus amet corrupti nesciunt tempora aperiam molestias
            obcaecati expedita temporibus adipisci? Accusantium, odit, itaque
            non quo expedita nulla sit qui aspernatur deserunt minus inventore
            recusandae cum molestiae nobis quasi, neque sunt?
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white mt-3">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
