import React from "react";
import {
  Page,
  Appbar,
  Button,
  List,
  ListItem,
  Searchbar,
  Block,
} from "framework7-react";
import CategoryList from "../assets/categories.jsx";
import ProductList from "../assets/products";

export default class extends React.Component {
  constructor(props) {
    super(props);
    var categoryId = props.f7route.params.cid;
    var categories = CategoryList;
    var products = ProductList;

    

    this.state = {
      category: categories[categoryId - 1],
      products: products,
      itemCount: 0,
    };

  }

  render() {
    return (
      <Page name="category">
        <Appbar>
        <div className="left">
            <Button
              small
              back
              className="display-flex"
              iconF7="arrow_left"
            />
          </div>
          <div className="right">
            <p className="navbar-text">{this.state.category.plural}</p>
          </div>
        </Appbar>
        <div>
          <Searchbar
            searchContainer=".search-list"
            searchIn=".item-title"
            disableButton={!this.$theme.aurora}
            placeholder="Hledat"
          />
        </div>
        <List className="searchbar-not-found">
          <ListItem title="Žádný výsledek" />
        </List>
        <List mediaList className="search-list searchbar-found">
          {this.state.products.map((product) => {
            if (product.category === this.state.category.name) {
              this.state.itemCount += 1;
              return (
                <ListItem
                  key={product.pid}
                  title={product.title}
                  after={product.category}
                  footer={product.descShort}
                  link={`/product/${product.pid}/`}
                >
                  <img slot="media" src={`/static/img/${product.image}`} width="60" />
                </ListItem>
              );
            }
          }
          )}
        </List>
        <div>
      {(() => {
        if (this.state.itemCount == 0) {
          return (
            <Block className="warning">V kategorii {this.state.category.plural} nebyly nalezeny žádné produkty</Block>
          )
        }
      })()}
    </div>
      </Page>
    );
  }
}
