import React from 'react'
import { NavLink } from 'react-router-dom'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaWifi } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import { AiFillSafetyCertificate } from "react-icons/ai";

const FeaturesData = [
    {
        name : "Accurate Weather",
        icon : (
                <TiWeatherPartlySunny className="text-4xl text-primary group-hover:text-black duration-300"/>
        ),
        link : "#",
        description : "Search accurate details with high precisions weather details of all country instantly.",
        aosDelay : "300"
    },
    {
        name : "Real Time Tracking",
        icon : (
                <FaWifi className="text-5xl text-primary group-hover:text-black duration-300"/>
        ),
        link : "#",
        description : "Discover the real time data of any place in the world with us.",
        aosDelay : "600"
    },
    {
        name : "Real Experience",
        icon : (
                <SlNote className="text-4xl text-primary group-hover:text-black duration-300"/>
        ),
        link : "#",
        description : "Making Technology more natural and intuitive for immersive experiences",
        aosDelay : "900"
    },
    {
        name : "Safety & Security",
        icon : (
            <AiFillSafetyCertificate className="text-5xl text-primary group-hover:text-black duration-300"/>
        ),
        link : "#",
        description : "Discover data safely without worrying about data breaching and security",
        aosDelay : "1200"
    }
]
const Features = () => {
  return (
    <>  
        <div className="container py-16 sm:py-12 md:py-12 ld:py-0 sm:min-h-[500px] px-4 sm:px-10">
            <div>
                <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-semibold text-center mb-14">Why Choose Us</h1>

            </div>
            {/* Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-7">
                {
                    FeaturesData.map((data)=>(
                        <div data-aos="fade-up" data-aos-delay={data.aosDelay} className="border border-primary shadow-xl grid place-items-center text-center group space-y-6 sm:space-y-4 lg:space-y-3  p-3 sm:py-5 bg-dark hover:bg-gradient-to-r from-secondary to-purple-400 hover:shadow-[0px_0px_20px_#007cfff0] text-black hover:text-white rounded-xl duration-300">
                            <div>{data.icon}</div>
                            <h1 className="text-2xl group-hover:text-black">{data.name}</h1>
                            <p>{data.description}</p>
                            <NavLink to={data.link} className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300 ">Learn More</NavLink>
                        </div>    
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Features