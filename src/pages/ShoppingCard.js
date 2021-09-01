/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Button, Icon } from 'rsuite';
import { useShows } from '../misc/custom-hooks';
import product from '../products.json';
import 'rsuite/dist/styles/rsuite-default.css';
import PageHeaderLayout from '../components/PageHeaderLayout';

const ShoppingCard = () => {
  const [isStarred, dispatchedStarred] = useShows();
  const counts = {};
  const total = [];
  const persisted = localStorage.getItem('shows');
  const added = persisted ? JSON.parse(persisted) : [];
  const itemSorted = added.sort();
  itemSorted.forEach(x => {
    counts[x] = (counts[x] || 0) + 1;
  });
  return (
    <div>
      <PageHeaderLayout />
      <div
        style={{
          width: '100%',
          height: 'auto',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        {' '}
        {Object.entries(counts).length > 0 && (
          <div style={{ width: '80%', height: 'auto' }}>
            <table border="0" width="100%">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total price</th>
                </tr>
              </thead>
              {Object.entries(counts).map(s => (
                <tbody key={s}>
                  {product
                    .filter(x => x.id === s[0])
                    .map(x => (
                      <tr key={x.id} style={{ textAlign: 'center' }}>
                        <td
                          style={{
                            padding: '5px',
                            width: '10%',
                          }}
                        >
                          <img
                            src={x.thumbnail}
                            width="100%"
                            height="auto"
                            alt={x.name}
                          />
                        </td>
                        <td
                          style={{
                            padding: '0px',
                            width: '30%',
                          }}
                        >
                          {x.name}
                        </td>
                        <td
                          style={{
                            padding: '0px',
                            width: '15%',
                          }}
                        >
                          {x.price} {x.currency}
                        </td>
                        <td
                          style={{
                            padding: '0px',
                            width: '30%',
                          }}
                        >
                          <Button
                            onClick={() => {
                              dispatchedStarred({
                                type: 'DECREASE',
                                showId: x.id,
                              });
                            }}
                            disabled={s[1] === 1}
                          >
                            <Icon icon="minus" />
                          </Button>
                          <span style={{ padding: '0px 10px' }}>{s[1]}</span>
                          <Button
                            onClick={() => {
                              dispatchedStarred({
                                type: 'ADD',
                                showId: x.id,
                              });
                            }}
                          >
                            <Icon icon="plus" />
                          </Button>
                        </td>
                        <td
                          style={{
                            padding: '0px',
                            width: '15%',
                          }}
                        >
                          {console.log(total.push(x.price * s[1]))}
                          {x.price * s[1]}
                        </td>
                        <td
                          style={{
                            padding: '0px',
                            width: '15%',
                          }}
                        >
                          <Button
                            onClick={() => {
                              if (isStarred) {
                                dispatchedStarred({
                                  type: 'REMOVE',
                                  showId: x.id,
                                });
                              }
                            }}
                          >
                            <Icon icon="trash" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              ))}
            </table>
            <Button block appearance="primary">
              <span>
                Pay{' '}
                {total.reduce((acc, val) => {
                  return acc + val;
                }, 0)}{' '}
                USD
              </span>
            </Button>
          </div>
        )}
        {added.length === 0 && (
          <p style={{ fontSize: '5rem', marginTop: '8%' }}>
            <b>No Item added</b>
          </p>
        )}
      </div>
    </div>
  );
};
export default ShoppingCard;
