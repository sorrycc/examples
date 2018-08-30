/**
 * Routes:
 *   - ./Route.js
 */
import { Component } from 'react';
import Link from 'umi/link';

export default class Layout extends Component {
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
