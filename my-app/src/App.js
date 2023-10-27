import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
function App() {
  //const message = "Learn React";
  // const getGreatingMessage = (name) => {
  //   if (name === "hyobin") return `Hello, ${name} Learn React`;
  //   return `Welcome, ${name}! Learn React`;
  // };
  return (
    <div className="App">
      <Header />
      <Welcome />
    </div>
  );
}

export default App;
