import React, { Component } from "react";
import SHOP_DATA from "../../shop.data";

export default class ShopPage extends Component {
  constructor(props) {
    super();
    this.state = { collections: SHOP_DATA };
  }
  render() {
    return <div>ShopPage</div>;
  }
}
