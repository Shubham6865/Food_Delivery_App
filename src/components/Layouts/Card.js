// import React from 'react'
// import { Col, Card } from 'react-bootstrap'
// import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { addToCart } from '../../Redux/CartSlice'

// const Cardss = ({ id, image, rating, title, paragraph, price, renderRatingIcons }) => {


//   const dispatch = useDispatch()


//   const handleAddToCart = () => {
//     const cartItem = {
//       id,
//       image,
//       rating,
//       title,
//       paragraph,
//       price,
//       renderRatingIcons
//     };

//     dispatch(addToCart(cartItem));
//   };


//   return (
//     <Col sm={6} lg={4} xl={3} className='mb-4'>
//       <Card className='overflow-hidden'>
//         <div className='overflow-hidden'>
//           <Card.Img variant="top" src={image} />

//         </div>
//         <Card.Body>
//           <div className="d-flex align-items-center justify-content-between">
//             <div className="item_rating">{renderRatingIcons(rating)}</div>
//             <div className="wishlist">
//               <i className="bi bi-heart"></i>
//             </div>
//           </div>
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>
//             {paragraph}
//           </Card.Text>


//           <div className="d-flex align-items-center justify-content-between">
//             <div className="menu_price">
//               <h5 className='mb-0'>
//                 {price} Rs
//               </h5>

//             </div>
//             <div className='add_to_cart'>
//               <Link to='/' onClick={handleAddToCart}   >
//                 <i className='bi bi-bag me-2'></i>
//                 Add to Cart
//               </Link>

//             </div>
//           </div>
//         </Card.Body>
//       </Card>
//     </Col>
//   )
// }

// export default Cardss


import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../Redux/CartSlice';


const Cardss = ({ id, image, rating, title, paragraph, price, renderRatingIcons }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, image, title, price }));
  };

  return (
    <Col sm={6} lg={4} xl={3} className='mb-4'>
      <Card className='overflow-hidden'>
        <div className='overflow-hidden'>
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className='mb-0'>{price} Rs</h5>
            </div>
            <div className='add_to_cart'>
              <Link to='/' onClick={handleAddToCart}>
                <i className='bi bi-bag me-2'></i>
                Add to Cart
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cardss;

