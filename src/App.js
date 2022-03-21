import './App.css';
import Navbar from './components/navbar/navbar';
import Sidenavbar from './components/sidenavbar/sidenavbar';
import Home from './components/homepage/home';

function App() {
  return (
    <div className="App">
     <Navbar />
     <div  className="container">
     <div className="row">
  <div className="col-sm-4"><Sidenavbar /></div>
  <div className="col-sm-8"><Home /></div>
</div>
     </div>
    </div>
  );
}

export default App;
