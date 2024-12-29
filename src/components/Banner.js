import '../styles/Banner.css';
import logo from '../assets/logo.webp';


function Banner () {
    return(
        <div className='banner'>
            <img src={logo} alt='logo' className='travel-logo'></img>
            <h1>Planificateur de Voyages</h1>
            <img src={logo} alt='logo' className='travel-logo'></img>

        </div>
    )
}

export default Banner