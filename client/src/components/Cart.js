import React from 'react';

import { usePizza } from '../context/pizzaContext/PizzaProvider';

import { CartData } from './CartData';

const Cart = () => {

    const { cart, createOrder } = usePizza();

    const handleClick = () => {
        cart.forEach(pizza => {
            createOrder(pizza);
        });
    }

    return (
        <div style= {{width: "90%", margin: "0 auto"}}>
        {
            cart.length === 0 ? 
                <h2> Add Pizza to your cart to make an order </h2> :
                <table className= "cart">
                    <tr>
                        <th> Pizza </th>
                        <th> Price </th>
                        <th> Quantity </th>
                        <th> Amount </th>
                    </tr>
                    {
                        cart.map(pizza => <CartData key= {pizza.id} pizza= {pizza} />)
                    }
                </table>
        }
        <div>
            <button
                onClick = {handleClick}
            >
                Make your Order
            </button>
        </div>
        </div>
        
    )
}

export {Cart}