import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Nav from './components/Nav'
import Content from './components/Content';
import Footer from './components/Footer';
import Home from './components/Home';
import Car from './components/Car';

// function App() {
//   var a = 7;
//   let age = 20;
//   return (
//     <>
//     <h1>Harshita's 2nd app</h1>
//     <p>My name is Harshita Salvi. I am a third year CSE undergrade from Acropolis Institute of Technology and Research</p>
//     <h2>a is {a}</h2>
//     if(age>=18){
      
//     }
//     </>
//   );
// }
function App() {
  const age= 11;
  let text;
  if(age>=18){
    text="You are eligible to vote"
  } 
  else{
    text="You are NOT eligible to vote"
  }
  const myElement = <h1>{text}</h1>;
  const carInfo = {car:"G-wagon", old:3, model:"5008"} 
  const a=[2,4,6,8];
  return (
    <>
    <Car></Car>
    <Home brand={carInfo} bike="Apache" array={a}></Home> 
    </>
  )

}


export default App;
