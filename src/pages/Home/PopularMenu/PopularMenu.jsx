import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../shared/Menuitem";
import useMenu from "../../../hooks/useMenu/useMenu";

const PopularMenu = () => {
  const [items] = useMenu();
  const popularItems = items.filter((item) => item.category === "popular");
  return (
    <div className="my-12 max-w-screen-xl mx-auto ">
      <SectionTitle
        subtitle="check it out"
        title="from our menu"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="btn btn-outline border-0 border-b-4 mt-3">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
