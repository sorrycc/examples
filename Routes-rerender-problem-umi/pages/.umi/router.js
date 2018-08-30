import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/users",
        "exact": true,
        "component": require('../users.js').default,
        "title": "aaa",
        "Routes": [require('../../Route.js').default]
      },
      {
        "component": () => React.createElement(require('/Users/chencheng/code/github.com/umijs/umi/packages/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
      }
    ],
    "Routes": [require('../../Route.js').default]
  },
  {
    "component": () => React.createElement(require('/Users/chencheng/code/github.com/umijs/umi/packages/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
  }
];

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
