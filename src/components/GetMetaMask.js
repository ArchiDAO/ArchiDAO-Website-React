import React, { useState } from "react";
import { ethers } from "ethers";
import './GetMetaMask.css';
import './Button';


const GetMetamask = () => {

    const[accountAddress, setAccountAddress] = useState('');
    const[accountBalance, setAccountBalance] = useState('');

    const handleAccountsChanged = (accounts) => {
        if (accounts.length === 0 ) {
            console.log("Please connect to metamask")
        } else {    
            window.ethereum.on("accountsChanged", () => { window.location.reload() });
            return accounts[0];
        }
    }

    const GetMetamask = async () => {
        
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
        // const account = accounts[0];
        const account = handleAccountsChanged(accounts);
        console.log(account)
        setAccountAddress(account)

        const getBalance = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const balance = await provider.getBalance(account);
            const balanceInEthereum = ethers.utils.formatEther(balance);
            console.log(balanceInEthereum);
            const balanceInEth =  (+balanceInEthereum).toFixed(4);

            setAccountBalance(balanceInEth)
        }
        getBalance()
    }
    
        return (
            <div className="metamask-container">
                <button className="btn--metamask" onClick={() => GetMetamask()}>Connect MetaMask</button>
                {/* <div className="ui divider"></div>
                <label>Account Address: {accountAddress}</label>
                <div className="ui divider"></div>
                <label>Balance: {accountBalance} Eth</label>
                <div className="ui divider"></div> */}
            </div>
        )
}

export default GetMetamask;