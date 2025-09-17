import logo from "./logo.svg";
import "./App.css";
import CompanyUrlInput from "./components/CompanyUrlInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CompanyUrlInput />
        <CompanyUrlInput />
      </header>
    </div>
  );
}

export default App;
