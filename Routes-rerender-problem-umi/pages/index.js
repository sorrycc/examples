import { Component } from 'react';
import styles from './index.css';

export default class Home extends Component {
  componentDidMount() {
    console.log('home componentDidMount');
  }
  render() {
    return (
      <div className={styles.normal}>
        <h1>Page index</h1>
      </div>
    );
  }
}
