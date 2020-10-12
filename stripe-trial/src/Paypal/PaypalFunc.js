import React,{useEffect,useState, useRef} from 'react';

const Product = ({savings}) => {
    const [paidFor,setPaidFor]=useState(false);
    const [error,setError]= useState(null);
    const payPalRef= useRef();

    useEffect(()=>{
        window.paypal.Buttons({
            createOrder: (data,actions)=>{
                return actions.order.create({
                    purchase_units:[
                        {
                            description:'savings',
                            amount:{
                                currency_code:'USD',
                                value:savings.value,
                            },
                        },
                    ],
                });
            },
            onApprove: async(data,actions)=>{
                const order= await actions.order.capture();
                setPaidFor(true);
                console.log(order); 
            },
            onError:err =>{
                setError(err);
                console.error(err);
            }       
         })
         .render(payPalRef.current);
    },[savings.value]);
    if (paidFor) {
        return(
            <div>
                <p>Surprise Bitch!!</p>
            </div>
        )
    }
    return (  
        <div>
        {error && <div>Shit happens ya know</div>}
        <h2>Paying bills</h2>
        <div ref={payPalRef}/>
        </div>
    );
}
 



const PaypalFunc = () => {
    const savings={
        value:300
    }
    return ( 
        <div>
       <Product savings={savings}/>
        </div>
     );
}
 
export default PaypalFunc;