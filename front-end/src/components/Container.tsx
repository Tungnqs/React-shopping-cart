/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import * as S from './Container.styled';
import axios from 'axios';
import ProductList from './ProductPage/ProductListComponent/ProductListComponent';
import ProductDetail from './ProductPage/ProductDetailComponent/ProductDetailComponent';
interface Product {
  productId: string;
  productName: string;
  description: string;
  imageUrl: string;
  price: number;
}

const Container: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const [productData, setProductData] = useState<Array<Product>>([]);
  const productUrl = 'http://localhost:4000/api/products';

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(productUrl);
        setProductData(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [productUrl]);

  useEffect(() => {
    if (!selectedProduct && productData.length > 0) {
      setSelectedProduct(productData[0]);
    }
  }, [selectedProduct, productData]);

  return (
    <S.MainBody>
      <S.MainContent>
        <S.ProductDetail>
          {selectedProduct ? (
            <ProductDetail product={selectedProduct} />
          ) : (
            <S.LoaderContainer>
              <S.SpinnerContainer>
                <S.Loader>
                  <S.Spinner>
                    <S.FirstCircle />
                    <S.SecondCircle />
                    <S.ThirdCircle />
                  </S.Spinner>
                </S.Loader>
              </S.SpinnerContainer>
            </S.LoaderContainer>
          )}
        </S.ProductDetail>
        <ProductList onSelectProduct={handleSelectProduct} />
      </S.MainContent>
    </S.MainBody>
  );
};

export default Container;
