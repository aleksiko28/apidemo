import React from 'react';
import './Products.css';
import Card from '../Card.js';
import './Products.css';
import { Default } from 'react-spinners-css';

export default class Gloves extends React.Component {
  state = {
    loading: true,
    items: null,
    stock: null,
  };

  async componentDidMount() {
    const urlProduct =
      'https://thawing-anchorage-40506.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/products/gloves';
    const urlAvailability =
      'https://thawing-anchorage-40506.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/availability/';
    // fetch product data for beanies
    const response = await fetch(urlProduct);
    const data = await response.json();
    // get distinct manufacturers from beanie list
    const distinctManufacturers = data
      .map((item) => item.manufacturer)
      .filter((value, index, self) => self.indexOf(value) === index);
    // get all availability information for beanie manufacturers
    var allAvailability = [];
    await Promise.all(
      distinctManufacturers.map(async (manufacturer) => {
        const res = await fetch(urlAvailability + manufacturer);
        const dat = await res.json();
        allAvailability.push(dat.response);
      })
    );
    // get availability information in an easy to parse format...
    var ids = {};
    for (const arr of allAvailability) {
      for (const item of arr) {
        var str = item.DATAPAYLOAD;
        if (str) {
          var availability = str.substring(
            str.lastIndexOf('<INSTOCKVALUE>') + 14,
            str.indexOf('</INSTOCKVALUE>')
          );
          ids[item.id] = availability;
        }
      }
    }
    // save data for items and availability to state
    this.setState({ items: data, loading: false, stock: ids });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className="loading">
            <Default />
          </div>
        ) : (
          <div>
            <div className="card-list">
              <h1>Current gloves availability</h1>
              <div className="card-container">
                <div className="card-wrapper">
                  <ul className="card-items">
                    {this.state.items.map((item) => {
                      const itemid = item.id.toUpperCase();
                      var avail = true;
                      if (this.state.stock[itemid] === undefined) {
                        avail = false;
                      }
                      return (
                        <Card
                          key={item.id}
                          src={process.env.PUBLIC_URL + '/logo.svg'}
                          name={item.name}
                          price={item.price + ' €'}
                          manufacturer={item.manufacturer}
                          stock={this.state.stock[itemid]}
                          hasInfo={avail}
                          color={item.color}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
