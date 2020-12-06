import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="404" backLink="Back" />
    <Block strong className="warning">
      Stránka nebyla nalezena
    </Block>
  </Page>
);
