import React from "react";
import {
  Page,
  Appbar,
  ListItem,
  List,
  Block,
  BlockTitle,
} from "framework7-react";

export default class extends React.Component {
  constructor() {
    super();

    var date = new Date();

    date = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();

    this.state = {
      products: this.$f7.data.products,
      lastLogin: date,
    };
  }

  render() {
    return (
      <Page name="account" className="account-page">
        <Appbar>
          <div className="left" />
          <div className="right">
            <p className="navbar-text">Účet</p>
          </div>
        </Appbar>
        <List mediaList>
          <ListItem
            className="account-user"
            title="Franta Vocásek"
            subtitle="franta007@seznam.cz"
          >
            <img slot="media" />
          </ListItem>
          <ListItem>
            Bydliště: Nad Stráněmi 4511, 760 05 Zlín
          </ListItem>
          <ListItem>
            Telefon: 755254895
          </ListItem>
          <ListItem>
            Poslední přihlášení: {this.state.lastLogin}
          </ListItem>
        </List>
        <List>
          <ListItem title="Moje objednávky" link />
          <ListItem title="Oblíbené položky" link />
        </List>
        <Block>
          <BlockTitle>Naposledy prohlížené položky</BlockTitle>
          <List mediaList>
            {(() => {
              const max = this.state.products.length;
              const min = 0;
              var item = [];
              for (var i = 0; i < 3; i++) {
                var x = min + Math.floor(Math.random() * (max - min));
                //console.log(x);
                var product = this.state.products[x];
                item.push(
                  <ListItem
                    key={product.pid}
                    title={product.title}
                    subtitle={product.category}
                    media={`/img/${product.image}`}
                  />
                );
              }
              return item;
            })()}
          </List>
        </Block>
      </Page>
    );
  }
}
