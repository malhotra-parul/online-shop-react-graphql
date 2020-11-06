import React, { useState, useEffect } from "react";
import { Container, Box, Heading, SearchField, Icon } from "gestalt";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GridLoader } from "react-spinners";

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
  const [ searchQuery, setSearchQuery ] = useState("");
  const { loading, data } = useQuery(query);
  if (loading) {
    return <div className="loader"><GridLoader color="blue" /></div>
  }

  const categories = data.categories;

  const handleChange = (event) => {
    setSearchQuery(event.value);
  }

  const filterCategories = ( searchQuery ) => {
    const filtered =  categories.filter(category => {
      return category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase());
    })
    return filtered;
  }

  return (
    <Container>
      <Box display="flex" justifyContent="center" marginTop={4} marginBottom={4} width="100%">
      <SearchField  id="searchField" accessibilityLabel="brands search field" 
      placeholder="Search for Brands..." onChange={handleChange}
      value={searchQuery}/>
      <Box margin={2}>
        <Icon icon="filter"
              color={searchQuery ? "orange" : "gray"}
              accessibilityLabel="filter"
              size={20}
              />
      </Box>
      </Box>
      <Box display="flex" justifyContent="center" marginBottom={4}>
        <Heading size="md" color="blue">
          Categories
        </Heading>
      </Box>
      <div className="outer">
        {categories &&
          filterCategories( searchQuery).map((category) => (
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
