import React from 'react';
import Layout from '../../Layout';
import ProductCard from '../../Components/ProductCard/ProductCard';
import "./style.css"
import Nesletter from '../../Components/Newletter/Nesletter';

const Shop = ({id, title, price, rating, category, img}) => {
  

  return (
    <Layout>
      <img src={require("../../Assets/Shop_Banner.png")}/>
      <div className="card_past">
        <ProductCard
        key={id}/>
      </div>
      <div className='newsletter'>
        <Nesletter/>
      </div>
    </Layout>
  );
};

export default Shop;
