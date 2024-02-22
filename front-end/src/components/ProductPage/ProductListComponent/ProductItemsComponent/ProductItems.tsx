import React, { useState } from 'react';
import * as S from '../ProductList.styled'

interface IProductData{
    productId: string;
    productName: string;
    description: string;
    imageUrl: string;
    price: number;
}

interface IProductListProp{
    product: IProductData,
    index: number,
    onSelectProduct: (item:IProductData) => void,
}

const ProductItems = ({product, index, onSelectProduct} : IProductListProp) => {
    const [textExpand, setTextExpand] = useState(true);
    let handleExpandText = () =>{
        if(!textExpand){
          setTextExpand(true);
        }
        else{
          setTextExpand(false);
        }
      }
    return (
        <S.ProductItem>
            <S.ProductItemImg
              src={product.imageUrl}
              alt=""
            />
            <S.ProductItemRight className="product-item-right">
              <div>
                <b>{product.productName}</b>
                <p style={{cursor: "pointer"}} onClick={handleExpandText} className={textExpand ? "text-truncate" : ""}>{product.description}</p>
              </div>
              <S.ProductItemPriceDetail>
                <h4 style={{margin:0}}>${product.price}</h4>
                <p onClick={() => onSelectProduct(product)}>Details</p>
              </S.ProductItemPriceDetail>
            </S.ProductItemRight>
          </S.ProductItem>
    );
};

export default ProductItems;