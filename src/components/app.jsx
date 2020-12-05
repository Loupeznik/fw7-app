import React from 'react';
import { Device }  from 'framework7/framework7-lite.esm.bundle.js';
import {
  App,
  Panel,
  Views,
  View,
  Page,
  Navbar,
  Toolbar,
  List,
  ListItem,
  Link,
} from 'framework7-react';
import cordovaApp from '../js/cordova-app';
import routes from '../js/routes';
import ProductList from '../assets/products.jsx';
import CategoryList from '../assets/categories.jsx';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        id: 'io.framework7.myapp', // App bundle ID
        name: 'Random aplikace', // App name
        theme: 'auto', // Automatic theme detection

        // App root data
        data: function () {
          return {

            products: ProductList,
          };
        },

        // App routes
        routes: routes,

        categories: CategoryList,

        // Input settings
        input: {
          scrollIntoViewOnFocus: Device.cordova && !Device.electron,
          scrollIntoViewCentered: Device.cordova && !Device.electron,
        },
        // Cordova Statusbar settings
        statusbar: {
          iosOverlaysWebView: true,
          androidOverlaysWebView: false,
        },
      },
    }
  }
  render() {
    return (
      <App params={ this.state.f7params } >
        <Panel left cover themeDark>
          <View>
            <Page>
              <Navbar title="Kategorie produktů" />
              <List>
                {this.state.f7params.categories.map((category) => (
                  <ListItem
                    key={category.id}
                    title={category.name}
                    link={`/category/${category.id}/`}
                  />
                ))}
              </List>
            </Page>
          </View>
        </Panel>
        <Views tabs className="safe-areas">
          <Toolbar tabbar labels bottom>
            <Link tabLink="#view-home" tabLinkActive iconIos="f7:list_bullet_below_rectangle" iconAurora="f7:list_bullet_below_rectangle" iconMd="material:list" text="Katalog" />
            <Link tabLink="#view-account" iconIos="f7:person_circle" iconAurora="f7:person_circle" iconMd="material:account_circle" text="Účet" />
            <Link tabLink="#view-about  " iconIos="f7:app_badge_fill" iconAurora="f7:app_badge_fill" iconMd="material:widgets" text="O aplikaci" />
          </Toolbar>

          <View id="view-home" main tab tabActive url="/" />

          <View id="view-account" name="account" tab url="/account/" />

          <View id="view-about" name="about" tab url="/about/" />

        </Views>
      </App>
    )
  }
  componentDidMount() {
    this.$f7ready((f7) => {
      // Init cordova APIs (see cordova-app.js)
      if (Device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
    });
  }
}