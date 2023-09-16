import { useEffect, useState } from 'react';
import '../assest/css/Landlayout.css';
import Web3 from 'web3';
import abi from '../config/abi.json';

const web3 = new Web3("https://arb1.arbitrum.io/rpc");
const contractAddress = '0x690e66fc0F8be8964d40e55EdE6aEBdfcB8A21Df'; //arbitrum address
var flag = 0;

function Landlayout() {
  const [usd_value, setUsdValue] = useState(0);
  const [token_value, setTokenValue] = useState(0);
  const [usd_limit, setUsdLimit] = useState(0);
  const [token_limit, setTokenLimit] = useState(0);


  useEffect(()=>{
    if(flag == 1) return;
    getInformation();
    setInterval(()=>{
      getInformation();
    }, 10000);
    flag = 1;
  },[]);

  const getInformation = () => {
    getUSD();
    getToken();
  }

  const getUSD = async () => {
    const contract = new web3.eth.Contract(abi, contractAddress);
    const result = await contract.methods.vUsdBalance().call();
    const decimals = Number.parseInt(await contract.methods.decimals().call());
    const tvl = Number.parseFloat(result)/(10**decimals);
    setUsdValue(tvl);
  }

  const getToken = async () => {
    const contract = new web3.eth.Contract(abi, contractAddress);
    const result = await contract.methods.tokenBalance().call();
    const tvl = Number.parseFloat(result);
    setTokenValue(tvl);
  }

  return (
    <div className="land-container flex justify-center items-center">
        <div className="back-circle"></div>
        <div className='back-circle1'></div>
        <div className='land-content flex flex-col text-left px-10'>
            <div className='land-title text-7xl font-bold text-white leading-tight mb-10'>Test task requirements</div>
            <div className='land-title text-2xl text-white  leading-relaxed mb-10 w-4/5'>Use the Solana/web3.js library for interacting with the Solana blockchain.
                Monitor the token balance and vUSD balance of the USDC pool.
                Set a threshold for both the token balance and vUSD balance.
                If either balance surpasses its respective threshold (of your choice), print a message to the console.
                Check these parameters every 10 minutes.
                Optimize your code for efficiency and conciseness. 
            </div>
            <div className='text-lg text-white opacity-60 leading-relaxed'> Arbitrum pool (Token):  {token_value} {token_limit<usd_value?"(Overload)":""}</div>
            <div className='email-input mt-5 mb-5'>
              <input className='text-base text-white' placeholder='Enter the limitation' value={token_limit} onChange={(e)=>setTokenLimit(e.target.value)}></input>
            </div>

            <div className='text-lg text-white opacity-60 leading-relaxed'> Arbitrum pool (USD):  {usd_value} {usd_limit<usd_value?"(Overload)":""}</div>
            <div className='email-input mt-5'>
              <input className='text-base text-white' placeholder='Enter the limitation' value={usd_limit} onChange={(e)=>setUsdLimit(e.target.value)}></input>
            </div>
        </div>
    </div>
  );
}

/*
INTRODUCTION

TRUST AI is an Ecosystem built on the Binance Blockchain with integrated AI.
Trust AI is focused on helping developers, companies and even individuals with zero knowledge of coding or any other protocol to be able to create smart contracts, security reporting within minutes and also with Storage system Management. To achieve the “code-per-byte” granularity, each software could send out a language every few seconds. 

A very important aspect of the TRUST AI Ecosystem is the establishment and continuous refinement of processes to enable smooth data sharing between different AI systems and further enable smooth interactions.
*/


export default Landlayout;