import React from "react";
import {
  Page,
  Appbar,
  Button,
  Block,
  BlockTitle,
  Row,
  Col,
  List,
  ListItem,
} from "framework7-react";
import ProductList from "../assets/products.jsx";

export default class extends React.Component {
  constructor(props) {
    super(props);
    var productId = props.f7route.params.pid;
    var products = ProductList;

    this.state = {
      currentProduct: products[productId - 1],
    };
  }
  render() {
    return (
      <Page name="product">
        <Appbar>
          <div className="left">
            <Button small back className="display-flex" iconF7="arrow_left" />
          </div>
          <div className="right">
            <p className="navbar-text">{this.state.currentProduct.title}</p>
          </div>
        </Appbar>
        <BlockTitle>
          Podrobnosti produktu <i>{this.state.currentProduct.title}</i>
        </BlockTitle>
        <Block>
          <Row>
            <Col width="33">
              <img
                src={`/static/img/${this.state.currentProduct.image}`}
                width="120"
              />
            </Col>
            <Col width="60">
              <List simple-list noHairlines>
                <ListItem title="Kategorie: ">
                  {this.state.currentProduct.category}
                </ListItem>
                <ListItem title="Cena: ">
                  {this.state.currentProduct.price } Kč
                </ListItem>
              </List>
            </Col>
          </Row>
          <Row>
            <p>Popis produktu</p>
            <p>{this.state.currentProduct.description}</p>
          </Row>
        </Block>
      </Page>
    );
  }
}
