import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import App from './App'

const stripePromise = loadStripe('pk_test_51HbIVcCMfKNPNHJsPT1TaBFjofDYlvdf0Min83En63NxwVUiusBcWmH42XZdaLdqQgggI4obdrj5ynMRE7EKKirF00gstJz60U')

const PaymentCard = () => {
    return ( 
        <Elements stripe={stripePromise}>
          <App/>
        </Elements>
     );
}
 
export default PaymentCard;