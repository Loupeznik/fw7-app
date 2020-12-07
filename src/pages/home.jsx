import React from "react";
import {
  Page,
  Button,
  Appbar,
  List,
  ListItem,
  Searchbar,
  Panel,
  Navbar,
} from "framework7-react";

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
        <Panel left cover>
          <Navbar title="Kategorie produktů" />
          <List>
            {this.$f7.params.categories.map((category) => (
              <ListItem
                key={category.cid}
                title={category.name}
                link={`/category/${category.cid}/`}
                panelClose
              />
            ))}
          </List>
        </Panel>
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
        <div>
          <Searchbar
            searchContainer=".search-list"
            searchIn=".item-title"
            disableButton={!this.$theme.aurora}
            placeholder="Hledat"
          ></Searchbar>
        </div>
        <List className="searchbar-not-found">
          <ListItem title="Žádný výsledek" />
        </List>
        <List mediaList className="search-list searchbar-found">
          {this.state.products.map((product) => (
            <ListItem
              key={product.pid}
              title={product.title}
              after={product.category}
              footer={product.descShort}
              link={`/product/${product.pid}/`}
            >
              <img slot="media" src={`/static/img/${product.image}`} width="60" />
            </ListItem>
          ))}
        </List>
      </Page>
    );
  }
}
