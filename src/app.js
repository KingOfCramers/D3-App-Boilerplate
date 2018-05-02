// IMPORT OUR DEPENDENCIES
import React from "react";
// import './styles/styles.css';
import ReactDOM from "react-dom";
import BarChart from "./components/BarChart";
import "./styles/styles.scss"

// FINAL RENDER
class App extends React.Component {
   render() {
   return (
      <div className='App'>
      <div className='App-header'>
      <h2>d3ia dashboard</h2>
      </div>
      <div>
      <BarChart data={[5,10,1,3]} size={[500,500]} />
      </div>
      </div>
   )
   }
}
export default App

ReactDOM.render(<App/>, document.getElementById("app"));