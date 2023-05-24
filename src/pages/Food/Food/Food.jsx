import Cover from "../../../shared/Cover";
import foodImg from "../../../assets/shop/banner2.jpg";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu/useMenu";
import FoodTab from "../FoodTab/FoodTab";
import { useParams } from "react-router-dom";

const Food = () => {
  const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  return (
    <div className="max-w-screen-xl mx-auto">
      <Cover
        title="Order Food"
        description="Would You Like To Try Our Dish?"
        image={foodImg}
      ></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
          <FoodTab items={salads}></FoodTab>
        </TabPanel>
        <TabPanel>
          <FoodTab items={pizza}></FoodTab>
        </TabPanel>
        <TabPanel>
          <FoodTab items={soup}></FoodTab>
        </TabPanel>
        <TabPanel>
          <FoodTab items={desserts}></FoodTab>
        </TabPanel>
        <TabPanel>
          <FoodTab items={drinks}></FoodTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Food;
