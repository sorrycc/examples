import { PureComponent } from 'react';

export default class Route extends PureComponent {
  componentDidMount() {
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
