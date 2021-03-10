import React from 'react'
import 'css/style.css'

const Filters = () => {
    return (
    <>
        {/*<!-- Filtering product form -->*/}
        <form className="filters">
                <h2>Filter By</h2>
                <div className="filter-options">
                    <fieldset>
                        <legend>Brands</legend>
                        <ul className="filter-list">
                            <li><input type="checkbox" name="brand" value="armani-beauty" id="armani-beauty"/> <label htmlFor="armani-beauty">Armani Beauty</label></li>           
                            <li><input type="checkbox" name="brand" value="dior" id="dior"/> <label htmlFor="dior">Dior</label></li>
                            <li><input type="checkbox" name="brand" value="dolce-gabbana" id="dolce-gabbana"/> <label htmlFor="dolce-gabbana">DOLCEandGABBANA</label></li>
                            <li><input type="checkbox" name="brand" value="gucci" id="gucci"/> <label htmlFor="gucci">Gucci</label></li>
                            <li><input type="checkbox" name="brand" value="versace" id="versace"/> <label htmlFor="versace">Versace</label></li>
                        </ul>
                    </fieldset>
                    <fieldset>
                        <legend>Sizes</legend>
                            <ol className="filter-list">
                                <li><input type="checkbox" name="size" value="mini" id="mini"/> <label htmlFor="mini">Mini</label></li>
                                <li><input type="checkbox" name="size" value="value" id="value"/> <label htmlFor="value">Value</label></li>
                            </ol>
                    </fieldset>
                    <fieldset>
                        <legend>Ratings (above)</legend>
                            <ol className="filter-list">
                                    <li>
                                        <input type="radio" name="rating" value="4" id="aboveFour" />
                                        <label htmlFor="aboveFour">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </label>
                                    </li>

                                    <li>
                                        <input type="radio" name="rating" value="3" id="aboveThree" />
                                        <label htmlFor="aboveThree">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </label>
                                    </li>

                                    <li>
                                        <input type="radio" name="rating" value="2" id="aboveTwo" />
                                        <label htmlFor="aboveTwo">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </label>
                                    </li>

                                    <li>
                                        <input type="radio" name="rating" value="1" id="aboveOne" />
                                        <label htmlFor="aboveOne">
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </label>
                                    </li>

                                </ol>
                    </fieldset>
                </div>
                <fieldset>
                    <label htmlFor="sort">Show</label>
                    <select name="sort" id="sort">
                        <option value="price-high">Price, highest to lowest</option>
                        <option value="price-low">Price, lowest to highest</option>
                        <option value="newest">Newest releases</option>
                    </select>
                </fieldset>
            </form>
        
    </>)
}

export default Filters