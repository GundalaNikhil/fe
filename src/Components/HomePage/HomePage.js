import React from "react";
import styled from "styled-components";
import ProductHome from "../Products/ProductHome";
import x from "./../../images/chickenmeat.jpg";
import y from "./../../images/eggs.png";
import z from "./../../images/meat.jpg";

const products = [
  { id: 1, name: "Chicken", price: 240, imageUrl: x },
  { id: 2, name: "Eggs", price: 240, imageUrl: y },
  { id: 3, name: "Meat", price: 240, imageUrl: z },
  { id: 4, name: "Fresh Meat", price: 240, imageUrl: x },
];

const HomePage = () => {
  return (
    <GridContainer>
      {products.map((product) => (
        <ProductHome key={product.id} {...product} />
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
  }
`;

export default HomePage;
