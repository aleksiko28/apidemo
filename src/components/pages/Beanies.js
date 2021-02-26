import React from 'react';
import './Products.css';

export default class Beanies extends React.Component {
  state = {
    loading: true,
    item: null,
  };

  async componentDidMount() {
    const url =
      'https://thawing-anchorage-40506.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/products/beanies';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ item: data[0], loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
            <div>
              <ul>
                {this.state.data.map((item) => {
                  return <li>{item.price}</li>;
                })}
              </ul>
            </div>
          )}
      </div>
    );
  }
}
