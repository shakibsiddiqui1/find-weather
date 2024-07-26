import React from 'react'
import Ashamed from '../../assets/ashamed.png'
import Oops from '../../assets/oops.png'

const NotFound = () => {
  return (
    <div>
        <div className="container pt-10 text-center ">
           <div className=" bg-black/50 backdrop:blur-sm max-w-[400px] grid place-items-center gap-4 mx-auto p-8 rounded-md border border-secondary">
                <div>
                        <img className="w-[50px] h-[50px]  sm:w-[70px] sm:h-[70px] animate-bounce " src={Oops} alt=""/>
                        <img className=" w-[120px] h-[120px] sm:w-[180px] sm:h-[180px]  " src={Ashamed} alt=""/>
                </div>
                <div>
                    <h1 className="text-sm sm:text-xl font-bold text-white">Try with correct place name</h1>
                </div>
           </div>
        </div>
    </div>
  )
}

export default NotFound