import { Fragment } from "react";
import MealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import MealsSummary from "../Meal/MealsSummary";
import AvailableMeals from "../Meal/AvailableMeals";
import MealsItem from "../Meal/MealItem/MealsItem";
import MealItemForm from "../Meal/MealItem/MealItemForm";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImage} alt="a table pic" />
      </div>
      
      <MealsSummary />
      <MealsItem />
      <cartItems/>
      <AvailableMeals />
      <MealItemForm />
    </Fragment>
  );
};
export default Header;
