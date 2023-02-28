import MealsSumm from "./MealsSumm";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";

const Meals = () => {
    return <Fragment>
        <MealsSumm />
        <AvailableMeals />
    </Fragment>
}

export default Meals;