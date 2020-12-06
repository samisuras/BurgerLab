import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Lab</NavigationItem>
        <NavigationItem link="/">Orden</NavigationItem>
    </ul>
);

export default navigationItems;