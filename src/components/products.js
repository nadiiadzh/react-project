import React from 'react'

const products = [{
    id: 1,
    imgSrc: `frag.jpg`,
    name: `Versace`,
    subname: `Eros`,
    actualPrice: 110.00,
    sailingPrice: 86.00,
    description: ` Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: `4.5`,
    sizes: [
        { id: 1, size: `0.3 oz/ 10 mL Eau de Toilette Spray` },
        { id: 2, size: `1.7 oz/ 50 mL Eau de Toilette Spray` },
        { id: 3, size: `3.4 oz/ 100 mL Eau de Toilette Spray` }
    ]
}, {
    id: 2,
    imgSrc: `frag.jpg`,
    name: `Dior`,
    subname: `Sauvage Eau de Toilette`,
    actualPrice: 130.00,
    sailingPrice: 110.00,
    description: ` Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: `3.5`,
    sizes: [
        { id: 1, size: `2 oz/ 60 mL Eau de Toilette Spray` },
        { id: 2, size: `3.4 oz/ 100 mL Eau de Toilette Spray` },
        { id: 3, size: `6.7 oz/ 200 mL Eau de Toilette Spray` }
    ]
}, {
    id: 3,
    imgSrc: `frag.jpg`,
    name: `DOLCE&GABBANA`,
    subname: `The Only One 2`,
    actualPrice: 155.00,
    sailingPrice: 138.00,
    description: ` Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: `4.5`,
    sizes: [
        { id: 1, size: `1.6 oz/ 50 mL Eau de Parfum Spray` },
        { id: 2, size: `3.3 oz/ 100 mL Eau de Parfum Spray` },
        { id: 3, size: `6.7 oz/ 200 mL Eau de Parfum Spray` },

    ]
}, {
    id: 4,
    imgSrc: `frag.jpg`,
    name: `Dior`,
    subname: `Miss Dior Eau de Parfum`,
    actualPrice: 115.00,
    sailingPrice: 99.00,
    description: ` Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: `3.5`,
    sizes: [
        { id: 1, size: `1.0 oz/ 30 mL Eau de Parfum Spray` },
        { id: 2, size: `1.7 oz/ 50 mL Eau de Parfum Spray` },
        { id: 3, size: `3.4 oz/ 100 mL Eau de Parfum Spray` }
        
    ]
}, {
    id: 5,
    imgSrc: `frag.jpg`,
    name: `Gucci`,
    subname: `Flora By Gucci - Gorgeous Gardenia`,
    actualPrice: 115.00,
    sailingPrice: 99.00,
    description: ` Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: `4`,
    sizes: [
        { id: 1, size: `0.25 oz/ 7.4 mL Eau de Toilette Rollerball` },
        { id: 2, size: `1.7 oz/ 50 mL Eau de Toilette Spray` },
        { id: 3, size: `3.4oz/100mL Eau de Toilette Spray` }
    ]
},{
    id: 6,
    imgSrc: `frag.jpg`,
    name: `Armani Beauty`,
    subname: `Acqua Di Gio Pour Homme`,
    actualPrice: 120.00,
    sailingPrice: 92.00,
    description: ` Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: `4.5`,
    sizes: [
        { id: 1, size: `1.7 oz/ 50 mL Eau de Toilette Spray` },
        { id: 2, size: `3.4oz/100mL Eau de Toilette Spray` },
        { id: 3, size: `5 oz/ 150 mL Eau de Toilette Spray` }
    ]
}
]
export default products