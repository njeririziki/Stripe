import React from 'react';
import PaypalFunc from './PaypalFunc';
import Drawer from '../Component/Drawer'



const Expense = () => {
   
    const savings= 400
    
    return ( 
        <div >
        <Drawer
        children= { <PaypalFunc 
            savings={savings}/>}
        />    
      
        </div>
     );
}

export default Expense;
 