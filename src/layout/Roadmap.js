import '../assest/css/Roadmap.css'
import ficon1 from '../assest/img/fi1.png'
function Roadmap() {
  return (
    <div className="roadmap-container flex flex-col justify-center items-center my-20">
        <div className="back-circle"></div>
        <div className='back-circle1'></div>
        <div className="roadmap-design-1 -skew-x-12"></div>
        <div className="roadmap-design-2 skew-x-12"></div>
        <div className='roadmap-content'>
            <div className='text-white font-bold text-5xl'>Our Roadmap</div>
            <div className='roadmap-bar grid grid-cols-5 mt-10'>
                <div className='roadmap-complete-bar'></div>
                <div className='flex flex-col justify-center items-center'>
                    <div className=' w-4 h-4 bg-white rounded-full'></div>
                    <div className='text-lg text-white font-bold mt-4'>May 14, 2023</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className=' w-4 h-4 bg-white rounded-full'></div>
                    <div className='text-lg text-white font-bold mt-4'>Jun 15, 2023</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className=' w-4 h-4 bg-white opacity-60 rounded-full'></div>
                    <div className='text-lg text-white font-bold mt-4'>July 2023</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className=' w-4 h-4 bg-white opacity-60 rounded-full'></div>
                    <div className='text-lg text-white font-bold mt-4'>Auguest 2023</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className=' w-4 h-4 bg-white opacity-60 rounded-full'></div>
                    <div className='text-lg text-white font-bold mt-4'>Sceptember 2023</div>
                </div>
            </div>
            <div className='roadmap-content-bar grid grid-cols-5 mt-20'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-lg text-white mt-4'>pre Sale</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-lg text-white mt-4'>Contract AI</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-lg text-white mt-4'>Test contract AI</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-lg text-white mt-4'>Store</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-lg text-white mt-4'>Launch</div>
                </div>
            </div>
            <div className='text-white text-lg opacity-60 mt-28'>
                Demo accounts will be <br/>
                available for platform testing.
            </div>
        </div>
    </div>
  );
}

export default Roadmap;