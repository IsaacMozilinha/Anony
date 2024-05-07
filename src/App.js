import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login/Login';
import Cadastro from './components/cadastro/Cadastro';

function App() {
  return (
    <Router>
    <Login></Login>
    <Routes>
        
        <Route path="/cadastro" component={<Cadastro/>} />
        </Routes>
        
    </Router>
  );
    
      
}

export default App;
