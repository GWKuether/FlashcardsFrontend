import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {

  return (
    <div className="container main-background">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Main />
        </div>
      </div>
  </div>

  );
}

export default App;
