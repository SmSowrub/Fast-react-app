import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const Friends=['Apon','Sojib','Sabbir','Nazmul','hasun','Fuhad'];

  const products=[
    {Name:'Digital Marketing',Price:'$100'},
    {Name:'Mop',Price:'$35'},
    {Name:'Web site', Price:'$150'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react app</p>
        <Users></Users>
        <Counter></Counter>
        <ul>
        {
          Friends.map(Friend=><li>{Friend}</li>)
        }
        {
          products.map(product=><li>{product.Name}</li>)
        }
       
        </ul>
        {
          products.map(pd =><Product products={pd}></Product>)
        }
       
        <Product products={products[0]} ></Product>
        <Product products={products[1]} ></Product>
        <Product products={products[2]} ></Product> 
       <Box Name="Hasun mahmud" GirlFriend="Nahida"></Box>
       <Box Name="habibul Hasun" GirlFriend="Hafsa"></Box>
       <Box Name="Nazmul Hasun" GirlFriend="Nisat tabassum"></Box>
       

      </header>
    </div>
  );
}


function Box(Props){

  return(
    <div style={{color:'red',border:'1px solid yellow',margin:'10px',borderRadius:'10px',width:'400px'}}>
      <h2>Name:{Props.Name}</h2>
      <h3>GirlFriend Name Of:{Props.GirlFriend}</h3>
    </div>
  )
}


function Product(Props){
  const productStyle={
    color:'tomato',
    backgroundColor:'lightgray',
    border:'1px solid light',
    borderRadius:'10px',
    margin:'10px',
    width:'200px',
    height:'250px',
 
    
  }
  return(
    <div style={productStyle} >
      <h3>{Props.products.Name}</h3>
      <h4>{Props.products.Price}</h4>
      <button style={{ borderRadius:'10px',color:'blue',padding:'5px 10px',border:'none'}} type="">Buy now</button>
    </div>
  )
}

function Counter(){
const [count,setCount]=useState(10);
const handleIncrease=()=>setCount(count+1);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users(){
const [users,setUser]=useState([]);

useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
}, [])
return (
  <div>
    <h2>Users:{users.length}</h2>
    <ul>
        {
           users.map(user=> <li>{user.name}<br></br>Phone:{user.phone}</li>)
        }
    </ul>
    
  </div>
)
}
export default App;
