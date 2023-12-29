import React from "react";
import styled from "styled-components";

const ProductHome = ({ id, name, price, imageUrl, onAddToCart }) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ id, name, price });
    }
  };
  return (
    <StyledHome>
      <ProductGrid>
        <ProductCard key={id}>
          <ProductImage src={imageUrl} alt={name} />
          <ProductInfo>
            <ProductName>{name}</ProductName>
            <ProductPrice>Rs. {price}</ProductPrice>
            <AddToCartButton onClick={handleAddToCart}>
              Add to Cart
            </AddToCartButton>
          </ProductInfo>
        </ProductCard>
      </ProductGrid>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 10px;
  }
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media screen and (max-width: 768px) {
    /* max-width: 100%; */
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 100%;
  margin-bottom: 10px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Align items in a column with space between */
  height: 100%;
`;

const ProductName = styled.h3`
  /* margin-bottom: 5px; */
  font-size: 1.2rem;
`;

const ProductPrice = styled.p`
  color: #007bff;
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  overflow: hidden;
  object-fit: cover;
  transition: background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const AddToCartButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  align-self: flex-end;
  transition: background-color 0.3s ease, transform 0.3s ease,
    margin-top 0.3s ease;

  &:hover {
    background-color: #218838;
    transform: scale(1.05);
    margin-top: 5px;
  }
`;

export default ProductHome;
