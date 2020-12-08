import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        {sessionStorage.getItem('administrador') === "1" ?
            <div className="d-inline-block">
                <NavigationItem link="/reportes">Reporte de Ventas</NavigationItem>
                <NavigationItem link="/ingredientes">Reporte de Ingredientes</NavigationItem>
            </div>
            :
            <div className="d-inline-block">
                <NavigationItem link="/home">Burger Lab</NavigationItem>
                <NavigationItem link="/ordenes">Mis Ordenes</NavigationItem>
            </div>
        }
    </ul >
);

export default navigationItems;