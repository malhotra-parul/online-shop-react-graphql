import React, { useState } from 'react';
import { gql, useQuery } from "@apollo/client";
import { GridLoader } from "react-spinners";



const Products = ({ match }) => {
    const query = gql`query{
        category(id: "${match.params.categoryId}"){
          _id
          name
          products{
            _id
            name
            description
            qty
            price
            image{
              mime
              url
              _id
            }
          }
        }
      }`;
    const { loading, data } = useQuery(query);

    if (loading) {
        return <div className="loader"><GridLoader color="blue" /></div>
      }
    
    const products = data.category;
    console.log(products);
    
    
    return (
        <div>
            Products
        </div>
    )
}

export default Products
