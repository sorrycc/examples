/**
 * Routes:
 *   - ./src/Route.js
 */
import { connect } from 'dva';
import styles from './index.css';

function App(props) {
  return (
    <div className={styles.normal}>
      <h2>Count</h2>
      <div>{ props.count }</div>
      <div>
        <button onClick={() => {
          props.dispatch({
            type: 'count/add',
          });
        }}>dispatch count/add</button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(App);
