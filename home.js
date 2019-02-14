/* @flow weak */

import React from "react";
import { View, Platform, Text, Linking } from "react-native";

class Home extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  componentDidMount() {
    if (Platform.OS === "android") {
      Linking.getInitialURL().then(url => {
        console.log('url is', url);
        this.navigate(url);
      });
    } else {
      Linking.addEventListener("url", this.handleOpenURL);
    }
  }
  componentWillUnmount() {
    Linking.removeEventListener("url", this.handleOpenURL);
  }
  handleOpenURL = event => {
    console.log('event is', event);
    this.navigate(event.url);
  };
  navigate = url => {
    console.log('url is in navigate', url);
    const { navigate } = this.props.navigation;
    const route = url.replace(/.*?:\/\//g, '');
    const id = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split("/")[0];

    if (routeName === "deep") {
      navigate("People", { id, name: "chris" });
    }
  };
  render() {
    return <Text>Hello from Home!</Text>;
  }
}

export default Home;
