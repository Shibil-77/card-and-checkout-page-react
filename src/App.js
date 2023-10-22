/* eslint-disable array-callback-return */
// import logo from './logo.svg';
import "./App.css";
import Card from "./com/Card";
import Checkout from "./com/Checkout";
import Navbar from "./com/Navbar";

const arr = [1, 2, 3];

function App() {
  return (
    <>
    <Navbar/>
       <h1 className="h1">Shop</h1>
      <div className="App">
       

        {arr.map((value, index) => {
          return <Card key={value} />;
        })}
      </div>
      <div className="App">
       

        {arr.map((value, index) => {
          return <Card key={value} />;
        })}
      </div>
      <div className="App">
       

        {arr.map((value, index) => {
          return <Card key={value} />;
        })}

        {/* <Checkout/> */}
      </div>
    </>
  );
}

export default App;
