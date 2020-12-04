import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Appbar,
  div,
  F7SwipeoutActions,
} from 'framework7-react';

export default () => (
  <Page name="home">
    <Appbar>
    <div className="left">
      <Button small panelToggle="left" className="display-flex" iconF7="bars" />
    </div>
    <div className="right">
      <p className="navbar-text">Katalog</p>
    </div>
  </Appbar>
  </Page>
);