/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './ProductList.styled';
import ProductItems from './ProductItemsComponent/ProductItems';

interface IProductData {
  productId: string;
  productName: string;
  description: string;
  imageUrl: string;
  price: number;
}

interface ProductListProps {
  onSelectProduct: (product: IProductData) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onSelectProduct }) => {
  const productUrl = 'http://localhost:4000/api/products';
  const [productData, setProductData] = useState<Array<IProductData>>([]);

  const fetchInfo = () => {
    return axios.get(productUrl).then(res => setProductData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <S.ProductList>
      {productData.map((value, index) => {
        return (
          <ProductItems
            product={value}
            index={index}
            onSelectProduct={onSelectProduct}
          />
        );
      })}
    </S.ProductList>
  );
};

export default ProductList;
