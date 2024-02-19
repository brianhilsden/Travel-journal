import Header from "./header";
import Main from "./main";
import './App.css'
import data from "./data";

  const vacay=data.map(item=>
    <Main key={item.key} item={item} />)
    

function App(){
  return(
    <div className="App">
      <Header/>
      <div className="vacay">
      {vacay}
      </div>
    </div>
    
  );
}

export default App;