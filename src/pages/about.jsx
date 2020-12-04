import React from 'react';
import { Page, Appbar} from 'framework7-react';

export default () => (
  <Page name="about">
    <Appbar>
      <div className="left" />
      <div className="right">
        <p className="navbar-text">O aplikaci</p>
      </div>
    </Appbar>
  </Page>
);