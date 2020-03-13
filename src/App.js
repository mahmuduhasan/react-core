import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name: "PhotoShop",price:"$99.99"},
    {name: "Illustrator",price:"$99.99"},
    {name: "Adobe Xd",price:"$99.99"},
    {name: "PDF reader",price:"$89.99"},
    {name: "Chrome",price:"$9.99"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            products.map(product => <li>{product.name} {product.price}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers]= useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
        <br></br>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
      {
        console.log(users)
      }
      
    </div>
  )
}
function Counter(){
  const [count, setCount]= useState(10);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(count+1)}>Increase</button>
      
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    marginBottom:'30px',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name , price} = props.product;
  console.log(name,price)
  return (
    <div className="container" style={productStyle}>
      <h4> {name} </h4>
      <h3>{price}</h3>
      <button>Buy Now!</button>
    </div>
  )
}

export default App;
