import { Fragment } from 'react';

import CartButton from './CartButton';
import mealsImage from '../../assets/Meals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return (
        <Fragment className = {classes.header}>
            <header>
                <h1>React Meals</h1>
                <CartButton onClick={props.onShowCart} />
            </header>
            <div className = {classes['main-image']}>
                <img src={mealsImage} alt="Delicious Food!" />
            </div>
        </Fragment>
    );
};

export default Header;