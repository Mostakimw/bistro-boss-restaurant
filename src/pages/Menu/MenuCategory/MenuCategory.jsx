import { Link } from "react-router-dom";
import Cover from "../../../shared/Cover";
import MenuItem from "../../../shared/Menuitem";

const MenuCategory = ({ menuItems, title, description, menuImage }) => {
  return (
    <div>
      {title && (
        <Cover
          title={title}
          description={description}
          image={menuImage}
        ></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-10 my-12 max-w-screen-xl mx-auto">
        {menuItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <Link to={`/food/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-3">
            Order Your Favorite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
