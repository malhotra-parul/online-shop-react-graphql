import React, { useState, useEffect } from "react";
import { Container, Box, Heading, Text, Card } from "gestalt";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const query = gql`
  query {
    categories {
      _id
      name
      description
      products {
        _id
        name
        description
        qty
        price
        image {
          _id
          mime
          url
        }
      }
    }
  }
`;

function App() {
  const { loading, data } = useQuery(query);
  if (loading) {
    return <Container>Loading...</Container>;
  }

  const categories = data.categories;
  console.log(categories);

  return (
    <Container>
      <Box display="flex" justifyContent="center" marginBottom={2}>
        <Heading size="md" color="blue">
          List of Brands
        </Heading>
      </Box>
      <div className="outer">
        {categories &&
          categories.map((category) => (
            <div className="card" key={category._id}>
              <h4>{category.name}</h4>
              <p>{category.description}</p>
          <Link to={`/${category._id}`}>View Products</Link>
            </div>
          ))}
      </div>
    </Container>
  );
}

export default App;
