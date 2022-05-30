import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
      <Router>
        <Header />
        <div className="container mt-3">
          <Routes>
            <Route exact path={["/", "/article"]}  />
            <Route exact path="/add"  />
            <Route path="/article/:id"/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
