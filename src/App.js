import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/** Sidebar */}
        <Sidebar />

        {/** Chat */}
        <h3>Chat</h3>
      </div>
    </div>
  );
}

export default App;
