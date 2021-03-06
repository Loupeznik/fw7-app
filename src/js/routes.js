import HomePage from '../pages/home.jsx';
import AboutPage from '../pages/about.jsx';
import ProductPage from '../pages/product.jsx';
import AccountPage from '../pages/account.jsx';
import CategoryPage from '../pages/category.jsx';
import NotFoundPage from '../pages/404.jsx';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/account/',
    component: AccountPage,
  },
  {
    path: '/product/:pid/',
    component: ProductPage,
  },
  {
    path: '/category/:cid/',
    component: CategoryPage,
  },

  {
      async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
