import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import createHOC from 'react-create-hoc';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class Layout extends Component {
  componentDidMount() {
    console.log('layouts componentDidMount');
  }
  render() {
    return (
      <>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
        <hr />
        <div>
          current location: <strong>{ this.props.location.pathname }</strong>
        </div>
        <hr />
        {
          this.props.children
        }
      </>
    );
  }
}

const withRoute = createHOC('RouteWrapper', (ComponentToWrap, Route) => {
  class WithRoute extends React.PureComponent {
    render() {
      const { props } = this;
      return (
        <Route>
          <ComponentToWrap
            {...props}
          />
        </Route>
      );
    }
  }
  WithRoute.propTypes = {};
  return WithRoute;
}, {
  factory: true,
});

function AuthRoute(props) {
  return <div>
    <h2>Auth Route</h2>
    {
      props.children
    }
  </div>
}

function renderRoutes(routes) {
  return (
    <Switch>
      {
        routes.map((route, i) => {
          let R = Route;
          if (route.Routes) {
            R = (props) => {
              const {render, ...rest} = props;
              return <>
                {render(rest)}
              </>;
            };
            let len = route.Routes.length - 1;
            while (len >= 0) {
              R = withRoute(AuthRoute)(R);
              len -= 1;
            }
          }
          return (
            <R
              key={route.key || i}
              path={route.path}
              exact={route.exact}
              strict={route.strict}
              render={props => {
                const childRoutes = renderRoutes(route.routes || []);
                if (route.component) {
                  return (
                    <route.component
                      {...props}
                      route={route}
                    >
                      {childRoutes}
                    </route.component>
                  );
                } else {
                  return childRoutes;
                }
              }}
            />
          );
        })
      }
    </Switch>
  );
}

function App() {
  return <>
    <h1>Router Test</h1>
    <BrowserRouter>
      {
        renderRoutes([
          { path: '/', component: Layout, routes: [
              { path: '/', exact: true, component: Home },
              { path: '/users', exact: true, component: Users },
            ] },
        ])
      }
    </BrowserRouter>
  </>;
}

function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

render();
