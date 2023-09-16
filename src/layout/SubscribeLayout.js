import '../assest/css/SubscribeLayout.css'
import ficon1 from '../assest/img/fi1.png'
function SubscribeLayout() {
  return (
    <div className="subscribe-container flex flex-col justify-center items-center">
        <div className="back-circle"></div>
        <div className='back-circle1'></div>
        <div className='subscribe-content flex flex-col  justify-center items-center'>
            <div className="subscribe-design-2 skew-x-12"></div>
            <div className="subscribe-design-1 -skew-x-12"></div>
            <div className='subscribe-title text-3xl font-bold text-white'>Stay updated on the latest news about Trust AI</div>
            <div className='subscribe-input mt-5'>
              <input className='text-base text-white' placeholder='Enter Your Email'></input>
              <button className='text-base text-blue-600'>Get Started</button>
            </div>
        </div>
    </div>
  );
}

export default SubscribeLayout;