/**
 * title: aaa
 * Routes:
 *   - ./Route.js
 */

import { Component } from 'react';
import styles from './users.css';

export default class Users extends Component {
  componentDidMount() {
    console.log('users componentDidMount');
  }
  render() {
    return (
      <div className={styles.normal}>
        <h1>Page users</h1>
        <div>location: {this.props.location.pathname}</div>
      </div>
    );
  }
}
