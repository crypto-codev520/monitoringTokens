import logo from '../assest/img/Logo.png';
import '../assest/css/Navbar.css'
 
function Coming() {
  return (
    <div className="navbar-container  w-100 f-center">
      <div className="land-container flex justify-center items-center flex-col">
          <div className='land-title text-7xl font-bold text-white leading-tight mb-10'>Coming soon</div>
          <div className='land-title text-8xl text-white  leading-relaxed mb-10 w-4/5'> . . . </div>
      </div>
      <div id="footer">
        <a href = "https://twitter.com/_houseofspark"> <img src="static/icons/twitter.png" width="35" height="35"/> </a>
        <a href = "https://www.facebook.com/groups/houseofsparkupland"> <img src ="static/icons/facebook.png"  width="35" height="35"/> </a>
        <a href = "https://www.vectorstock.com/royalty-free-vector/circular-white-social-media-icon-set-vector-25714248"> <img src = "static/icons/media.png" width="35" height="35" /> </a>
        <a href = "houseofspark0@gmail.com"> <img src="static/icons/contact.png" width="35" height="35" /> </a>
        <a href = "https://discord.gg/FAmAK63GYB"> <img src="static/icons/discord.png" width="35" height="35" /> </a>
      </div>
    </div>
  );
}

export default Coming;