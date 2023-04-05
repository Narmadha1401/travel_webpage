import React,{useEffect} from "react";
import './footer.css';
import video2 from '../../Assests/ocean-65560.mp4';
import SendIcon from '@mui/icons-material/Send';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Aos from 'aos'
import 'aos/dist/aos'
const Footer = ()=>
{
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return(
       <section className="footer">
        <div className="videoDiv">
            <video src={video2} loop autoPlay muted type="video/mp4" ></video>
        </div>

        <div className="secContent container">
            <div className="contactDiv flex">
                <div data-aos="fade-up" className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>
                </div>

                <div data-aos="fade-up" className="inputDiv flex">
                    <input type="text" placeholder='Enter Email Address'/>
                    <button className="btn flex" type="submit">SEND
                        <SendIcon className="icon"/>
                     </button>
                </div>
            </div>

            <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="#" className="logo flex">
                            <TravelExploreIcon className="icon"/>Travel.
                        </a>

                    </div>

                    <div className="footerParagraph">
                    People you meet while on the road become some of the most valued names on your contact list. They become places on the map to visit later on.Meeting people from other cultures will teach you that the way you’ve been looking at the world isn’t the way everybody else does.
                    </div>
                    <div className="footerSocials flex">
                        <TwitterIcon className="icon"/>
                        <YouTubeIcon className="icon"/>
                        <InstagramIcon className="icon"/>
                        <ElectricBikeIcon className="icon"/>

                    </div>
                </div>

                <div className="footerLinks grid">
                    <div  className="linkGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>

                        <li className="footerList flex">
                             <ArrowForwardIosIcon className="icon"/>
                             Services
                        </li>
                        <li className="footerList flex">
                             <ArrowForwardIosIcon className="icon"/>
                             Insurances
                        </li>
                        <li className="footerList flex">
                             <ArrowForwardIosIcon className="icon"/>
                             Agency
                        </li>
                        <li className="footerList flex">
                             <ArrowForwardIosIcon className="icon"/>
                             Tourism
                        </li>
                        <li className="footerList flex">
                             <ArrowForwardIosIcon className="icon"/>
                             Payment
                        </li>
                    </div>
                    <div  className="linkGroup">
                        <span className="groupTitle">
                            PARTNERS
                        </span>

                        <li className="footerList flex">
                             <ArrowForwardIosIcon className="icon"/>
                             Bookings
                        </li>
                        <li className="footerList flex">
                             <ArrowForwardIosIcon className="icon"/>
                             RentCars
                        </li>
                        <li className="footerList flex">
                             <ArrowForwardIosIcon className="icon"/>
                             HostelWorld
                        </li>
                        <li className="footerList flex">
                             <ArrowForwardIosIcon className="icon"/>
                             Trivago
                        </li>
                        <li className="footerList flex">
                             <ArrowForwardIosIcon className="icon"/>
                             TripAdvisor
                        </li>
                    </div>
                    <div  className="linkGroup">
                        <span className="groupTitle">
                            LAST MINUTE
                        </span>

                        <li className="footerList flex">
                             <ArrowForwardIosIcon className="icon"/>
                             London
                        </li>
                        <li className="footerList flex">
                             <ArrowForwardIosIcon className="icon"/>
                             California
                        </li>
                        <li className="footerList flex">
                             <ArrowForwardIosIcon className="icon"/>
                             Indonesia
                        </li>
                        <li className="footerList flex">
                             <ArrowForwardIosIcon className="icon"/>
                             Europe
                        </li>
                        <li className="footerList flex">
                             <ArrowForwardIosIcon className="icon"/>
                             Oceania
                        </li>
                    </div>

                </div>
                <div className="footerDiv flex">
                    <small>EXPLORE THE WORLD</small>
                    <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
                </div>
            </div>
        </div>
       </section>
    )
}
export default Footer;