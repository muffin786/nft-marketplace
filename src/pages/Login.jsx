import react, { useEffect } from "react";
import Card from "../components/base/Card";
import Header from "../components/Header";
import { useEthers, useEtherBalance } from "@usedapp/core";

const Login = () => {
  const {activateBrowserWallet, account} = useEthers();
  const etherBalance = useEtherBalance(account);

  useEffect(()=>{
    activateBrowserWallet();
  },[])

  return (
    <>
      <Header />
    </>
  );
};

export default Login;