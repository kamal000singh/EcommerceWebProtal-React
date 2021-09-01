/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'rsuite';
import PageHeaderLayout from '../components/PageHeaderLayout';
import data from '../categories.json';
import 'rsuite/dist/styles/rsuite-default.css';

const Home = () => {
  return (
    <>
      <PageHeaderLayout />
      <div
        style={{
          width: '100%',
          height: 'auto',
          justifyContent: 'center',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {data.map(d => (
          <Link key={d.id} to={`/categories/${d.id}`}>
            <Button
              style={{
                border: '1px solid black',
                borderRadius: '5px',
                wordBreak: 'break-all',
                margin: '20px',
              }}
            >
              <h1>{d.name}</h1>
              <span>{d.description}</span>
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
