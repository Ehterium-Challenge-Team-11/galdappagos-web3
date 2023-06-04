import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './views/home';
import MainLayout from "./layouts/main";
// import Web3 from "web3";
// import Web3 from "web3/dist/web3.min";

function App() {

  useEffect(() => {
    /*
    // 
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      web3.eth.requestAccounts().then(console.log);

    } else {
      console.log("Cliente no tiene un provider");
    }*/
  }, []);
  return (
    <MainLayout>
      <Routes>
        <Route path="/" exact Component={Home}></Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
