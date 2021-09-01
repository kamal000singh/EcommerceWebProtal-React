/* eslint-disable arrow-body-style */
import React from 'react';
import { Button, FlexboxGrid, Icon } from 'rsuite';

const Card = ({
  keyId,
  thumbnail,
  name,
  price,
  currency,
  inStock,
  addItemToCard,
}) => {
  return (
    <FlexboxGrid.Item className="flex-grid" key={keyId}>
      <div className="img-wrapper">
        <img src={thumbnail} width="100%" height="100%" alt="show" />
      </div>
      <div className="content-data">
        <h4>{name}</h4>
        <p>
          {price} {currency}
        </p>
        <p style={{ color: inStock ? 'green' : 'red' }}>
          {inStock ? 'In stock' : 'Out of stock'}
        </p>
        <Button
          className="btn-card"
          block
          onClick={addItemToCard}
          style={{
            color: 'white',
            backgroundColor: inStock ? '#012443' : 'gray',
          }}
          disabled={inStock === false}
        >
          <Icon icon="plus" /> <span>Add to Card</span>
        </Button>
      </div>
    </FlexboxGrid.Item>
  );
};

export default Card;
