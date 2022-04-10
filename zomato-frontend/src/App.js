import HomeLayoutHOC from "./HOC/Home.HOC";
import Temp from "./Components/temp";
function App() {
  return (
    <>
      <HomeLayoutHOC path = "/"  component={Temp}/>
    </>
  );
}

export default App;
