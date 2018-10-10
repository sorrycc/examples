import { PureComponent } from 'react';

export default class Route extends PureComponent {
  constructor(props) {
    super(props);
    console.warn('Route.js constructor');
  }
  componentDidMount() {
    console.warn('Route.js did mount');
  }
  render() {
    const { children } = this.props;
    console.log(this.props.route);
    return (
      <div>
        <h2>Auth Route for {this.props.location.pathname}</h2>
        {
          children
        }
      </div>
    );
  }
}
