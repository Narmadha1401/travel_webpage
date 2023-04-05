import React, {useEffect} from "react";
import './home.css';
import video from '../../Assests/sea-6399.mp4'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import CommuteSharpIcon from '@mui/icons-material/CommuteSharp';
import ListIcon from '@mui/icons-material/List';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';

import Aos from 'aos'
import 'aos/dist/aos'
const Home = ()=>
{
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return(
        <section className="home">
           <div className="overlay"></div>
           <video src={video} muted autoPlay loop type ="sea-6399/mp4"></video>
           <div className="homeContent container">
            <div className="textDiv">
                <span data-aos="fade-up" className="smallText">
                    Our Packages
                </span>
                <h1 data-aos="fade-up" className="homeTitle">
                    Search your Holidays!!
                </h1>
            </div>
            <div className="cardDiv grid">
                <div className="destinationInput">
                    <label htmlFor="city">Search your Destination</label>
                    <div className="input flex">
                        <input type="text" placeholder="Enter name here..." />
                        <LocationOnOutlinedIcon className="icon"/>

                    </div>
                </div>
                <div className="dataInput">
                    <label htmlFor="city">Search your date:</label>
                    <div className="input flex">
                        <input type="date" />
                        
                    </div>
                </div>
                <div className="priceInput">
                    <div className="label_total flex">
                        <label htmlFor="price">Max price:</label>
                        <h3 className="total">$5000</h3>
                    </div>
                    <div className="input flex">
                        <input type="range" max="5000" min="1000" />
                    </div>
                </div>
                <div className="searchOptions flex">
                    <FilterAltOutlinedIcon className="icon"/>
                    <span>MORE FILTERS</span>

                </div>

            </div>

            <div className="homeFooterIcons flex">
                <div className="rightIcons">
                    <FacebookOutlinedIcon className="icon"/>
                    <InstagramIcon className="icon"/>
                    <CommuteSharpIcon className="icon"/>

                </div>
                <div className="leftIcons">
                <ListIcon className="icon"/>
                <AutoAwesomeMosaicOutlinedIcon className="icon"/>

                </div>
            </div>
           </div>
        </section>
    )
}
export default Home;