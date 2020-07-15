import React, {Component} from 'react';
import './app.css';
import plantService from '../../services/plantService';


class App extends Component{

  plantService = new plantService();

  render(){
  return (
    <div className="App">
    <header className="App-header">
  <div id="root" className="jumbotron"></div>
  <h1 id='counter'>База данных распений и тестирование API</h1>
  <h2 id='counter'>База данных распений и тестирование API222222222</h2>
  <button id='dec' className='btn btn-primary'>prev</button>
  <button id='inc' className="btn btn-primary">next</button>
  <button id='rnd' className="btn btn-primary">random</button>
    </header>
  </div>

  )
}
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//     <div id="root" className="jumbotron"></div>
//     <h1 id='counter'>База данных распений и тестирование API</h1>
//     <button id='dec' className='btn btn-primary'>prev</button>
//     <button id='inc' className="btn btn-primary">next</button>
//     <button id='rnd' className="btn btn-primary">random</button>
//       </header>
//     </div>
//   );
// }

export default App;
