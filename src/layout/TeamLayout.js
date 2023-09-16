import '../assest/css/TeamLayout.css'
import ficon1 from '../assest/img/fi1.png'
import in_icon1 from "../assest/img/img (1).jpeg"
import in_icon2 from "../assest/img/img (2).jpeg"
import in_ln from "../assest/img/In.png"

function TeamLayout() {
  return (
    <div className="team-container flex flex-col justify-center items-center">
        <div className='feature-title flex flex-col mt-20'>
           <div className='text-5xl text-white text-center font-bold'>Our Team Members</div>
        </div>
        <div className='feature-content gap-8 alien-items mt-32 grid grid-cols-3'>
             <div className='team-item flex flex-col items-center'>
                 <img className='w-36 h-36 place-items-center rounded-full outline outline-white outline-offset-4' src={in_icon1}></img>
                 <div className='text-3xl text-white font-bold mt-10'>EISSA   </div>
                 <div className='text-lg text-white opacity-60 mb-8 mt-3'>CHIEF EXECUTIVE OFFICIER</div>
                 <img className='w-12 h-12' src={in_ln}></img>
             </div>     
             <div className='team-item flex flex-col items-center'>
                 <img className='w-36 h-36 place-items-center rounded-full outline outline-white outline-offset-4' src={in_icon2}></img>
                 <div className='text-3xl text-white font-bold mt-10'>Alyssa McKeown   </div>
                 <div className='text-lg text-white opacity-60 mb-8 mt-3'>CHIEF EXECUTIVE OFFICIER</div>
                 <img className='w-12 h-12' src={in_ln}></img>
             </div>   
             <div className='team-item flex flex-col items-center'>
                 <img className='w-36 h-36 place-items-center rounded-full outline outline-white outline-offset-4' src={in_icon1}></img>
                 <div className='text-3xl text-white font-bold mt-10'>sW   </div>
                 <div className='text-lg text-white opacity-60 mb-8 mt-3'>CHIEF EXECUTIVE OFFICIER</div>
                 <img className='w-12 h-12' src={in_ln}></img>
             </div>   
        </div>
    </div>
  );
}

export default TeamLayout;