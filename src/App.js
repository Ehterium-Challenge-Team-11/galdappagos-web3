import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './views/home';

function App() {

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({
          method: 'eth_requestAccounts'
        })
        .then(console.log);
    } else {
      console.log("CLiente no tiene un provider");
    }



  }, []);
  return (
    <>
      <Routes>
        <Route path="/" exact Component={Home}></Route>
      </Routes>

    </>
  );
}

export default App;
