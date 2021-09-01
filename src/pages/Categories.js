/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Checkbox, FlexboxGrid } from 'rsuite';
import Card from '../components/Card';
import PageHeaderLayout from '../components/PageHeaderLayout';
import { useShows } from '../misc/custom-hooks';
import data from '../products.json';
// import ShoppingCard from './ShoppingCard';

const Categories = () => {
  const [checked, setChecked] = useState(false);
  const [isStarred, dispatchedStarred] = useShows();
  const { id } = useParams();
  const onCheckbox = () => {
    setChecked(p => !p);
  };
  return (
    <>
      <PageHeaderLayout />
      <div className="categories">
        <div className="filter">
          <h4>FILTER</h4>
          <div className="checkbox-filter">
            <Checkbox checked={checked} onChange={onCheckbox}>
              InStock
            </Checkbox>
            <Checkbox>Delivery</Checkbox>
            <Checkbox>Expensive</Checkbox>
          </div>
        </div>
        <FlexboxGrid justify="space-around">
          {data.map(d => {
            <hr key={d.id} />;
            const addItemToCard = () => {
              if (isStarred) {
                dispatchedStarred({
                  type: 'ADD',
                  showId: d.id,
                });
              }
            };
            if (id === d.categoryId) {
              if (d.inStock === checked) {
                return (
                  <Card
                    key={d.id}
                    thumbnail={d.thumbnail}
                    name={d.name}
                    price={d.price}
                    currency={d.currency}
                    inStock={d.inStock}
                    addItemToCard={addItemToCard}
                    addItem={isStarred}
                  />
                );
              }
              if (d.inStock) {
                return (
                  <Card
                    key={d.id}
                    thumbnail={d.thumbnail}
                    name={d.name}
                    price={d.price}
                    currency={d.currency}
                    inStock={d.inStock}
                    addItemToCard={addItemToCard}
                    addItem={isStarred}
                  />
                );
              }
            }
            return <FlexboxGrid key={d.id} />;
          })}
        </FlexboxGrid>
      </div>
    </>
  );
};

export default Categories;
