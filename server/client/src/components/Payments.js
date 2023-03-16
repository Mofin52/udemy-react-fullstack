import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import {useDispatch} from "react-redux";
import {handleToken} from "../actions";
const Payments = () => {
    const dispatch = useDispatch();

    return (
        <StripeCheckout
            name={"Emaily"}
            description={"$5 for 5 email credits"}
            token={token => dispatch(handleToken(token))}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            amount={500}
        >
            <buttom className={"btn"}>Add Credits</buttom>
        </StripeCheckout>
    )
}

export default Payments;