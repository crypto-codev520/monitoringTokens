import '../assest/css/TokenFeaturesLayout.css'
import ficon1 from '../assest/img/fi1.png'
import ficon2 from '../assest/img/fi2.png'
import ficon3 from '../assest/img/fi3.png'
import ficon4 from '../assest/img/fi4.png'
import ficon5 from '../assest/img/fi5.png'
import ficon6 from '../assest/img/fi6.png'
import ficon_c1 from '../assest/img/fi_1.png'
import ficon_c2 from '../assest/img/fi_2.png'
import ficon_c3 from '../assest/img/fi_3.png'
import ficon_c4 from '../assest/img/fi_4.png'
import ficon_c5 from '../assest/img/fi_5.png'
import ficon_c6 from '../assest/img/fi_6.png'
function TokenFeaturesLayout() {
  return (
    <div className="feature-container flex flex-col justify-center items-center">
        <div className='feature-title flex flex-col'>
           <div className='text-7xl text-white text-center font-bold'> Trust Token features</div>
           <div className='text-base text-white text-center  opacity-60 mt-10'>Trust AI is focused on helping developers, companies and even individuals with zero knowledge of coding or any other protocol to be able to create smart contracts, security reporting within minutes and also with Storage system Management.</div>
        </div>
        <div className='feature-content gap-8 alien-items mt-10 grid xl:grid-cols-3 2xl: grid-cols-2'>
             <div className='feature-item flex flex-col items-center'>
                 <div className='feature-icon flex flex-row justify-center items-center'><img src={ficon1}></img></div>
                 <div className='text-3xl text-white font-bold mt-4'>Token Ecosystem</div>
                 <div className='text-lg text-white opacity-60 mt-3'>InfinityBit.io accepts IBIT tokens for 50% reduced trading fees</div>
             </div>     
             <div className='feature-item flex flex-col items-center'>
                 <div className='feature-icon flex flex-row justify-center items-center'><img src={ficon2}></img></div>
                 <div className='text-3xl text-white font-bold mt-4'>Secure</div>
                 <div className='text-lg text-white opacity-60 mt-3'>Industry standard encryption and security are implemented in the InfinityBit trade execution system.</div>
             </div>     
             <div className='feature-item flex flex-col items-center'>
                 <div className='feature-icon flex flex-row justify-center items-center'><img src={ficon3}></img></div>
                 <div className='text-3xl text-white font-bold mt-4'>Transparent</div>
                 <div className='text-lg text-white opacity-60 mt-3'>All transfers and trade executions are published to a public permissioned Ethereum-based blockchain.</div>
             </div>     
             <div className='feature-item flex flex-col items-center'>
                 <div className='feature-icon flex flex-row justify-center items-center'><img src={ficon4}></img></div>
                 <div className='text-3xl text-white font-bold mt-4'>Certified technology</div>
                 <div className='text-lg text-white opacity-60 mt-3'>The InfinityBit codebase will have passed multiple third-party security audits before launch.</div>
             </div>     
             <div className='feature-item flex flex-col items-center'>
                 <div className='feature-icon flex flex-row justify-center items-center'><img src={ficon5}></img></div>
                 <div className='text-3xl text-white font-bold mt-4'>Broad Distribution</div>
                 <div className='text-lg text-white opacity-60 mt-3'>InfinityBit is accessible to nearly everyone from individuals to large investment firms.</div>
             </div>     
             <div className='feature-item flex flex-col items-center'>
                 <div className='feature-icon flex flex-row justify-center items-center'><img src={ficon6}></img></div>
                 <div className='text-3xl text-white font-bold mt-4'>AI Powered Trading</div>
                 <div className='text-lg text-white opacity-60 mt-3'>A fully automated AI-powered trading system is being developed for IBIT holders.</div>
             </div>     
        </div>
    </div>
  );
}

export default TokenFeaturesLayout;