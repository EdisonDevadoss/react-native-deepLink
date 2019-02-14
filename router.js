import React from "react";
import PropTypes from "prop-types";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./home";
import People from "./people";

const Router = createStackNavigator({
  Home: { screen: Home },
  People: { screen: People }
});

export default createAppContainer(Router);
