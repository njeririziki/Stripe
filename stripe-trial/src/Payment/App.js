import React from 'react';
import '../App.css';
import Banner from 'react-js-banner';
import {CardElement} from '@stripe/react-stripe-js';
import { makeStyles } from '@material-ui/core';
import {Button} from '@material-ui/core/Button'

const useStyles = makeStyles((theme)=>({
 card:{
   display:'flex',
   alignItems:'center',
   height: '40px',
   width: '70vw'
 }
}))

function App() {
  const classes= useStyles()
  return (
    <div className="App">
      <header className="App-header">
      My test of react Stripe
        <Banner
        title='This is my goal'
        />

      </header>
      <CardElement
       options={{
         style:{
           base:{
          backgroundColor: '#f5f5f5',
             fontSize:'12px',
             color:'#424770',
             '::placeholder':{
               color:'#aab7c4',
              
             },
           },
           invalid:{
             color:'#9e2146',
             height: '40px',
             width: '70vw'
           },
         },
       }}
      
      />

    </div>
  );
}

export default App;
