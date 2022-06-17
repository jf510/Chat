import "./App.css";
import Chat from "./Chat";
import Home from "./Home";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat />}></Route>
            <Route path="/" ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
