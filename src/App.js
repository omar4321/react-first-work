import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // product-info
  const products = [
    {name: 'mobile', price: 15000 },
          {name: 'camera', price: 55000 },
          {name: 'laptop', price: 150000 },
          {name: 'watch', price: 5000 },
          {name: 'shoe', price: 500 },
  ]
  return (
    <div className="App">
       <LoadComments></LoadComments>
      <Counter></Counter>

      {
          products.map(product => <Product name={product.name} price={product.price}></Product>)
           }
        
    </div>
  );
}
  


//  counter
function Counter(){
  const [ count, setCount]= useState(0);
  const handleIncrease = () => {
    const newCount = count +1;
    setCount( newCount);
  }
  
  const handleDecrease = () => {
    const newCount = count -1;
    setCount( newCount);
  }
  return(
    <div>
      <h1> Count : {count}</h1>
      <button onClick={handleIncrease}> Increase </button>
      <button onClick={handleDecrease}> Decrease </button>
    </div>
  )
}

       
function Product(props) {
  const productStyle = {
    border: '3px solid blue',
    borderRadius: '10px'

  }
  return (
    <div className="productStylec" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  )
}

function LoadComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setComments(data))
  }, []);

  return (
    <div>
      <h3>Load Comments</h3>
      {
        comments.map(comment => <Comment title={comment.title} body={comment.body}></Comment>)
      }
    </div>
  )
}

function Comment(props) {
  return (
    <div style={{ backgroundColor: 'skyblue', margin: '20px' ,
    borderRadius: '40px',
    border: '2px solid red',
    
    }}>
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </div>
  )
}
export default App;



