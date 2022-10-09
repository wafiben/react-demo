import "./App.css";
import CustomNavbar from "./Compoents/Navbar";
import Main from "./Compoents/Main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const name = "yosra";
  const table = [
    { firstName: "yosra", age: 25 },
    { firstName: "karim", age: 88 },
    { firstName: "oussam", age: 50 },
  ];
  const showName = (name) => {
    alert(name);
  };

  return (
    <div className="App">
      <CustomNavbar name={name} />
      <Main table={table} showName={showName} />
    </div>
  );
}

export default App;
