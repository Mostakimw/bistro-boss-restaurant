const MenuItem = ({ item }) => {
  const { name, price, recipe } = item;
  return (
    <div className="flex space-x-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src="https://static.spotapps.co/spots/3a/dd629f431048caa6f40f088373d266/full"
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
