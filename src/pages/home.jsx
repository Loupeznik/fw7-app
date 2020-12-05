import React from "react";
import { Page, Button, Appbar, List, ListItem } from "framework7-react";

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      products: this.$f7.data.products,
    };
  }

  render() {
    return (
      <Page name="home">
        <Appbar>
          <div className="left">
            <Button
              small
              panelToggle="left"
              className="display-flex"
              iconF7="bars"
            />
          </div>
          <div className="right">
            <p className="navbar-text">Katalog produktů</p>
          </div>
        </Appbar>
        <List mediaList>
          {this.state.products.map((product) => (
            <ListItem
              key={product.id}
              title={product.title}
              after={product.category}
              footer={product.descShort}
              link={`/product/${product.id}/`}
              media={`/img/${product.image}`}
            />
          ))}
        </List>
      </Page>
    );
  }
}
