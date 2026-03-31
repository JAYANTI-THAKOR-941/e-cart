// import Card from "./components/Card";

import Counter from "./components/Counter";
import FetchUser from "./components/FetchUser";

const App = ()=>{
  return(
    <>
      <h1>E-Cart App</h1>
      {/* <Card name="Shubham"/>
      <Card name="Himanshu"/>
      <Card name="Jayanti"/> */}

      <Counter/>

      <FetchUser/>
    </>
  )
}

export default App;