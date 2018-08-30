import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;

let routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('../index.js').default,
    "_title": "aa",
    "_title_default": "aa"
  },
  {
    "component": () => React.createElement(require('/Users/chencheng/code/github.com/umijs/umi/packages/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false }),
    "_title": "aa",
    "_title_default": "aa"
  }
];

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
