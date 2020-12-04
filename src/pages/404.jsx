import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="404" backLink="Back" />
    <Block strong>
      <p>Stránka nebyla nalezena</p>
    </Block>
  </Page>
);
