import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../shared/Menuitem";

const PopularMenu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const popularItems = data.filter((item) => item.category === "popular");
        console.log(popularItems);
        setItems(popularItems);
      });
  }, []);
  return (
    <div className="my-12">
      <SectionTitle
        subtitle="check it out"
        title="from our menu"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
