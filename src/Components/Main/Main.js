import React,{useEffect} from "react";
import './main.css';
import RoomIcon from '@mui/icons-material/Room';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import img1 from '../../Assests/img1.jpg';
import img2 from '../../Assests/img2.jpg';
import img3 from '../../Assests/img3.jpg';
import img4 from '../../Assests/img4.jpg';
import img5 from '../../Assests/img5.jpg';
import img6 from '../../Assests/img6.jpg';
import img7 from '../../Assests/img7.jpg';
import img8 from '../../Assests/img8.jpg';
import img9 from '../../Assests/img9.jpg';
import Aos from 'aos'
import 'aos/dist/aos'

const Data=[
    {
        id:1,
        imgSrc:img1,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description:'The epomatic of romance, Bora Bora is one of the best travel destination in the World.This place is known for its luxurious stays and adventure activites.'
    },
    {
        id:2,
        imgSrc:img2,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description:' Machu Picchu is one of the New Seven Wonders of the World.Amazingly, no wheels were used to transport heavy rocks for the construction of the city.'
        
    },
    {
        id:3,
        imgSrc:img3,
        destTitle: 'Manali',
        location: 'Himachal',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description:'Solang Valley also known as Snow Valley is a perfect place for adventure sports. Beautiful Views of the Mountains in Manali'
    },
    {
        id:4,
        imgSrc:img4,
        destTitle: 'Colosseum',
        location: 'Rome',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description:'The Colosseum is one of the most famous attractions in Rome and is where most gladiatorial fights took place. '
    },
    {
        id:5,
        imgSrc:img5,
        destTitle: 'The Tropical Haven',
        location: 'Maldives',
        grade: 'CULTURAL RELAX',
        fees: '$1000',
        description:'Time stands still in the Maldives as you lie on the white sand beaches, hearing the crystal clear waves crash against the seashore, swim with the manta rays and reef sharks and feast on a wide array of fishes with the locals'
    },
    {
        id:6,
        imgSrc:img6,
        destTitle: 'Barcelona',
        location: 'Spain',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description:'The city has a beautiful charm and a rich cultural significance. It is the capital city of autonomous community of Catalonia in Spain and the second largest city in Spain.'
     },
    {
        id:7,
        imgSrc:img7,
        destTitle: 'Effiel Tower',
        location: 'Paris',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description:'Young travelers heading out on the road for the first time, couples looking for a special getaway, artists looking to spur their creativity, and romantics of all types are all drawn to Paris'
   },
   {
    id:8,
    imgSrc:img8,
    destTitle: 'Shark Bay',
    location: 'Autralia',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description:'The area is diverse – there’s a beach made up entirely of tiny white shells, stromatolites on the shore of Hamelin Pool and the salt mine at Useless Loop'
   },
   {
    id:9,
    imgSrc:img9,
    destTitle: 'Death Valley',
    location: 'Calfornia',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description:'One of the most popular locations is the multi-hued Artists Palette,‘Star Wars’ fans will be keen to see the site that inspired the planet Tatooine.'
   },

 ]
const Main = ()=>
{
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return(
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>
            
            <div className="secContent grid">
                {
                    Data.map(({id,imgSrc,destTitle,location,grade, fees,
                        description})=>{
                            return(
                                <div  key={id} data-aos="fade-up" className="singleDestination">
                                    <div className="imageDiv">
                                        <img src={imgSrc} alt={destTitle}/>
                                    </div>

                                    <div className="cardInfo">
                                        <h4 className="destTitle">{destTitle}</h4>
                                        <span className="continent flex">
                                            <RoomIcon className="icon"/>
                                            <span className="name">{location}</span>
                                        </span>
                                        <div className="fees flex">
                                            <div className="grade">
                                                <span>{grade}<small>+1</small></span>
                                            </div>
                                            <div className="price">
                                                <h5>{fees}</h5>
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <p>{description}</p>
                                        </div>
                                        <button className="btn flex">DETAILS <InventoryOutlinedIcon className="icon"/>
                                        </button>
                                    </div>

                                </div>
                            )
                        })
                }
            </div>
        </section>
    )
}
export default Main;