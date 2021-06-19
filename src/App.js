import react from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./sections/Header";
import Doctor from "./sections/Doctor";
import "../src/css/style.css";
const App =() => { 
  return(
    <>
      <Header />
      <Doctor />
    </>
  );
};
export default App;