import React from 'react'
import {Link} from 'react-router-dom'

const Product = ({data}) => {
  //const {id, name, img} = data // data: {id: 0, name: `xyz`, img: `some-url.jpg`}

  const productImg = require(`img/${data.imgSrc}`).default

  return (
    <article className="product" key={data.id}>
            <header>
                <img src={productImg} alt={data.name} />
                <h2><Link to={`/product/${data.slug}`}>{data.name}</Link></h2>
                <h3>{data.subname}</h3>
                <data value={data.sailingPrice}>
                    <del>{data.actualPrice}</del> 
                    <ins>{data.sailingPrice}</ins>
                </data>
                <p>
                    {data.description}
                    <a href="#">see more</a>
                </p>
                <dl>
                    <dt>Rating:</dt>
                    <dd>
                    <i className={(data.rating == 0) ? 'far fa-star' : (data.rating > 0 && data.rating < 1) ? 'fas fa-star-half-alt' : 'fas fa-star'}></i>
                    <i className={(data.rating > 1 && data.rating < 2) ? 'fas fa-star-half-alt' : (data.rating >= 2) ? 'fas fa-star' : 'far fa-star'}></i>
                    <i className={(data.rating > 2 && data.rating < 3) ? 'fas fa-star-half-alt' : (data.rating >= 3) ? 'fas fa-star' : 'far fa-star'}></i>
                    <i className={(data.rating > 3 && data.rating < 4) ? 'fas fa-star-half-alt' : (data.rating >= 4) ? 'fas fa-star' : 'far fa-star'}></i>
                    <i className={(data.rating > 4 && data.rating < 5) ? 'fas fa-star-half-alt' : (data.rating >= 5) ? 'fas fa-star' : 'far fa-star'}></i>
                    </dd>
                    <a href="#"><i className="fas fa-heart"></i></a>
                </dl>   
            </header>
        <form>
            <fieldset>
            <legend>Sizes</legend>
            
                {data.sizes.map((ele) =>(  
                    <ol key={ele.id}>
                        <li><label><input type="radio" name="size" value= {ele.size}/> {ele.size}</label></li>     
                    </ol>
                ))} 
            </fieldset>
        </form>
        <footer>
            <button type="button">Add to cart &nbsp;<i className="fas fa-cart-plus"></i></button>    
        </footer>
        </article> 
  )
}

export default Product