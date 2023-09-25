import { productsData } from '../../Consts/productsData';
import './style.css'

const ProductCard = ({id, title, price, rating, category, img}) => {

  return (
    <div className='allCards'>
      {productsData.map(({id, title, price, rating, category, img}) =>  (
        <div key={id} className='card'>
          <span>{category}</span>
          <div className='img' >
            <img src={img} alt={title}/>
          </div>
          <div className='title'>
            <h3>{title}</h3>
          </div>
          <div className='card_footer'>
            <h4>{price}</h4>
            <img className='rating' src={require("../../Assets/Rating Stars.png")}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
