import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";

const Checkout = ({subTotal}) => {
    const tokenHandler = (token) => {
        dispatch(placeOrder(token, subTotal));
        console.log(token);
    };
    return (
        <StripeCheckout
            amount={subTotal * 100}
            shippingAddress
            token={tokenHandler}
            stripeKey="pk_test_51MQjjeSHJV9SM56GSiR8uKdjKrB2RCrdbjpXdlgZ9ptxdhd6GV89lIFOP8U2vfDKATZ3ujBrF0U9KuQ6crJ7ydpZ00cl77XSGl"
            currency="INR"
        >
            <Button>Pay Now</Button>
        </StripeCheckout>
    )
}

export default Checkout;