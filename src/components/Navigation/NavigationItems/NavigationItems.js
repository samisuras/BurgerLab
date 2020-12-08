import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/home">Burger Lab</NavigationItem>
        <NavigationItem link="/ordenes">Orden</NavigationItem>
    </ul>
);

export default navigationItems;