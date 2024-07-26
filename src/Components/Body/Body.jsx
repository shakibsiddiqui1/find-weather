import React, { useEffect, useMemo, useRef, useState } from 'react'
import { MdLocationPin } from "react-icons/md";
import Sun from '../../assets/sun.png'
import Clouds from '../../assets/clouds.png'
import Drizzle from '../../assets/drizzle.png'
import Haze from '../../assets/haze.png'
import Rain from '../../assets/rain.png'
import Thunder from '../../assets/thunderstorm.png'
import Winter from '../../assets/winter.png'
import Bg from '../../assets/bg.jpg'
import Humidity from '../../assets/pngwing.com.png'
import Wind from '../../assets/wind.png'
import NotFound from '../Not Found/NotFound';
import Loaders from '../Loaders/Loaders';






const BannerImg = {
    backgroundImage : `url(${Bg})`,
    backgroundPosition : "center",
    backgroundRepeat : "no-repeat",
    backgroundSize : "cover",
    height : "100%",
    width : "100%"
}

function findDay(day)
{
    switch(day)
    {
        case(0):
        return "Sunday"
        case(1):
        return "Monday"
        case(2):
        return "Tuesday"
        case(3):
        return "Wednesday"
        case(4):
        return "Thrusday"
        case(5):
        return "Friday"
        case(6):
        return "Saturday"
        default:
        return "?" 
    }
}
function findMonth(month)
{
    switch(month)
    {
        case(0):
        return "January"
        case(1):
        return "Febuary"
        case(2):
        return "March"
        case(3):
        return "April"
        case(4):
        return "May"
        case(5):
        return "June"
        case(6):
        return "July"
        case(7):
        return "August"
        case(8):
        return "September"
        case(9):
        return "October"
        case(10):
        return "November"
        case(11):
        return "December"
        default:
        return "?"     
    }
}

function getWeatherImage(id)
{
    switch(true)
    {
        case(id>=200 && id<300):
        return Thunder;
        case(id>=300 && id<500):
        return Drizzle;
        case(id>=500 && id<600):
        return Rain;
        case(id>=600 && id<700):
        return Snow;
        case(id>=700 && id<800):
        return Haze;
        case(id==800):
        return Sun;
        case(id>800 && id<900):
        return Clouds;
        default:
        return Clouds
    }

}

const Body = () => {

    const date = new Date()
    const t=date.getHours()+" : "+(date.getMinutes()<10 ? date.getMinutes()+"0" : date.getMinutes())  +" : "+(date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds())
    const [time, setTime] = useState(t);
    const [city,setCity] = useState()
    const [result,setResult] = useState()
    const [loading,setLoading] = useState(true)
    const inputRef = useRef()
    const handleSubmit = (e)=>{
        setCity(inputRef.current.value)
        e.preventDefault();
    }
 
    const fetchApi = async ()=>{
        if(city && city.length>0)
        {
            try{
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=secretkey&units=metric`
                let response = await fetch(url)
                if(response.ok)
                {
                    let respJson = await response.json()
                    setResult(respJson)
                }
                else
                {
                    setResult(undefined)
                }
                console.log(result)
            }
            catch(err){
                console.log(err)
            }

        }
    }

    

    const fetchLocation = ()=>{
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition((Position)=>{
                const fetchCurrentLocation=async ()=>
                                            {
                                                try{
                                                    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${Position.coords.latitude}&lon=${Position.coords.longitude}&appid=e684164b4610bee37e8df889e9083c18&units=metric`
                                                    let response = await fetch(url)
                                                    if(response.ok)
                                                    {
                                                        let respJson=await response.json()
                                                        setResult(respJson)
                                                        setLoading(!loading)
                                                        setCity(respJson.name)
                                                    }
                                                    else
                                                    setResult(undefined)
                                                }
                                                catch(err)
                                                {
                                                    console.log(err)
                                                }
                                            }
                fetchCurrentLocation()
            },(err)=>{
                console.log(err.message)
            })
        }
    }

    useEffect(()=>{
      fetchLocation()
    },[])

    useMemo(()=>{
        fetchApi()
    },[city])

    useEffect(()=>{
        const interval = setInterval(() => setTime(t), 1000);
        return () => {
          clearInterval(interval);
        };
    },[t])

 
    
  return (
    <div style={BannerImg}>
        <div className="container py-10 md:px-0 px-5">
            <div className=" ">
                <div className="py-4">
                    <form onSubmit={handleSubmit} className=" max-w-sm md:max-w-lg mx-auto">
                        <input className="bg-gray-50 outline-none p-2 rounded-lg md:w-[80%] sm:w-[70%] w-[61%] border border-secondary focus:ring-blue-800 focus:border-secondary" type="text" placeholder="Enter Country" ref={inputRef}/>
                        <button className="hover:scale-105 duration-400 bg-gradient-to-r from-blue-500 to-secondary py-2 px-6 ml-1 rounded-md text-white text-md font-semibold" type='submit'>Search</button>
                    </form>
                </div>
                 
                 {
                    loading ? (
                            <Loaders/>
                    
                        ) :
                        (
                            
                        result!==undefined ? 
                        <div className="grid md:grid-cols-3 grid-cols-1 place-items-center ">
                        {/* left divison */}
                        <div data-aos="fade-up" data-aos-delay="0" className="hover:scale-105 duration-300 border border-secondary rounded-lg my-5 md:my-0 w-full md:w-[200px] md:order-1 order-2 backdrop-blur-sm grid place-items-center p-6 gap-4 bg-black/20 ">
                            <h1 className="text-3xl font-mono text-white">{result?.main?.humidity}%</h1>
                            <img src={Humidity} alt="" className="w-[50px] h-[50px]"/>
                            <h1 className="text-2xl text-white font-mono">Humidity</h1>
                        </div>
                        {/* Main divison */}
                        <div data-aos="fade-up" data-aos-delay="200" className="hover:scale-105 duration-300 md:order-2 order-1 py-5 md:max-w-[300px] w-full border border-secondary mx-auto backdrop-blur-sm bg-black/50 rounded-lg shadow-lg mt-10">
                            <div className="flex flex-col gap-2 items-center">
                                <div className="flex gap-1 items-center pt-3">
                                    <MdLocationPin className="text-2xl text-secondary" />
                                    <h1 className="text-2xl font-mono text-white">{city}</h1>
                                </div>
                                <img src={getWeatherImage(result?.weather[0].id)} className="h-[170px] w-[170px]" alt=''/> 
                                <p className="text-2xl text-purple-300 font-mono">{result?.weather[0]?.main}</p>
                                <h1  className="text-4xl text-white font-mono ">{result.main?.temp}<span className="text-4xl -translate-y-4">°</span></h1>
                                <p className=" text-purple-300 text-xl">{time}</p>
                                <div className="flex gap-2 text- text-purple-300 text-xl">
                                    <p>{findDay(date.getDay())},</p>
                                    <p>{date.getDate()}</p>
                                    <p>{findMonth(date.getMonth())}</p>
                                    <p>{date.getFullYear()}</p>
                                </div>
                            </div>
                        </div>
                        {/* left divison */}
                        <div data-aos="fade-up" data-aos-delay="400" className="hover:scale-105 duration-300 border border-secondary rounded-lg my-5 md:my-0 w-full md:w-[200px] order-3 backdrop-blur-sm grid place-items-center p-6 gap-4 bg-black/20 ">
                            <h1 className="text-2xl font-mono text-white">{result.wind?.speed} M/S</h1>
                            <img src={Wind} alt="" className="w-[50px] h-[50px]"/>
                            <h1 className="text-2xl text-white font-mono">Wind Speed</h1>
                        </div>
                    </div> : <NotFound/>
                    )
                 }         
            </div>
        </div>
    </div>
  )
}

export default Body