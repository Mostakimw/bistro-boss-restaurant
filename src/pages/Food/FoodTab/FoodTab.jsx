import FoodCart from "../../../components/FoodCard/FoodCart";

const FoodTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item) => (
        <FoodCart key={item._id} item={item}></FoodCart>
      ))}
    </div>
  );
};

export default FoodTab;
