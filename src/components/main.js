import React from 'react'
import Filters from './filters'
import products from './products'

const Main = () => {

    console.log(products);

    const listItems = products.map((item) =>

            <article className="product" key={item.id}>
            <header>
                <img src={require(`img/${item.imgSrc}`).default} alt={item.name}/>
                <h2>{item.name}</h2>
                <h3>{item.subname}</h3>
                <data value={item.sailingPrice}>
                    <del>{item.actualPrice}</del> 
                    <ins>{item.sailingPrice}</ins>
                </data>
                <p>
                    {item.description}
                    <a href="#">see more</a>
                </p>
                <dl>
                    <dt>Rating:</dt>
                    <dd>
                    <i className={(item.rating == 0) ? 'far fa-star' : (item.rating > 0 && item.rating < 1) ? 'fas fa-star-half-alt' : 'fas fa-star'}></i>
                    <i className={(item.rating > 1 && item.rating < 2) ? 'fas fa-star-half-alt' : (item.rating >= 2) ? 'fas fa-star' : 'far fa-star'}></i>
                    <i className={(item.rating > 2 &&item.rating < 3) ? 'fas fa-star-half-alt' : (item.rating >= 3) ? 'fas fa-star' : 'far fa-star'}></i>
                    <i className={(item.rating > 3 && item.rating < 4) ? 'fas fa-star-half-alt' : (item.rating >= 4) ? 'fas fa-star' : 'far fa-star'}></i>
                    <i className={(item.rating > 4 && item.rating < 5) ? 'fas fa-star-half-alt' : (item.rating >= 5) ? 'fas fa-star' : 'far fa-star'}></i>
                    </dd>
                    <a href="#"><i className="fas fa-heart"></i></a>
                </dl>   
            </header>
        <form>
            <fieldset>
            <legend>Sizes</legend>
            
                {item.sizes.map((ele) =>(  
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
    
    ); 

            
    return (
    <>
        <main className="products">

            <header className="heading">
                <h1>Sale on Women's Perfume</h1>
            </header>
            <Filters></Filters>
            <section className="results">
                <h2 className="subheading">Results</h2>
                {listItems}
            </section>

            <nav aria-label="Pagination" className="pagination">
                <p>1-6 of 23 products found</p>
                <ol className="pages">
                    <li><a href="#" aria-label="Current Page, Page 1" aria-current="true">1</a></li>
                    <li><a href="#" aria-label="Page 2">2</a></li>
                    <li><a href="#" aria-label="Page 3">3</a></li>
                    <li><a href="#" aria-label="Page 4">4</a></li>
                    <li><a href="#" aria-label="Page 5">5</a></li>
                </ol>
            </nav>
            
        </main>
            
    </>
    )
}

export default Main