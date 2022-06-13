import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

function ProductWrapper(props: { imagesUrl: string; name: string; concentration: string; quantity: number }) {
    return (
    <ProductContainerWrapper>
      <ProductContainer>
        <ProductData>
          <ImageContainer>
            <img src={props.imagesUrl} alt={props.name} />
          </ImageContainer>
          <ProductDescription>
            <h3>{props.name}</h3>
            <h4>{props.concentration}</h4>
            <h4 className="remainingProducts">Quedan {props.quantity} comprimidos</h4>
            <h4 className="remainingProducts">Para {props.quantity} días</h4>
          </ProductDescription>
        </ProductData>

        <IconsContainer>
          <CartIconContainer><FaShoppingCart size={20}/></CartIconContainer>
          <AddCartIconContainer><IoIosAddCircle size={25}/></AddCartIconContainer>
        </IconsContainer>

      </ProductContainer>
      <hr></hr>
    </ProductContainerWrapper>
      );
}

export default ProductWrapper

const ProductContainerWrapper = styled.div`
  hr{
    margin: 0;
    background-color: rgba(0, 0, 0, 0.12);
  }
`;

const ProductContainer = styled.div`
  display: flex;
  padding: 7.5px 15px;
  align-items: center;
  justify-content: space-between;
`;

const ProductData = styled.div`
  display: flex;`;

const ImageContainer = styled.div`
  display: flex;
  width: 65px;
  height: 65px;
  text-align: center;
  padding: 10px;
  img {
    width:100%;
    height:100%;
  }
`;

const ProductDescription = styled.div`
  margin-left: 10px;
  h3{
      font-weight: bold;
      font-size: 15px;
      /* identical to box height */
      letter-spacing: 0.15px;
      color: #414046;
      margin:0;
  }
  h4{
    font-weight: 400;
    font-size: 13px;
    /* identical to box height */
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.54);
    margin:0;
  }
  .remainingProducts{
      letter-spacing: 0.4px;
      text-decoration-line: underline;
      color: #0277BD;
    }
  p{
    font-weight: 400;
    font-size: 13px;
    /* identical to box height */
    letter-spacing: 0.15px;
    text-decoration-line: underline;

    color: #0277BD;
    margin:0;
  }
`;

const IconsContainer = styled.div`
  display: flex;
`;

const CartIconContainer = styled.div`
  color: #414046;
`;

const AddCartIconContainer = styled.div`
  color: #0277BD;
  position: relative;
  bottom: 12.5px;
  right: 7.5px;
`;
