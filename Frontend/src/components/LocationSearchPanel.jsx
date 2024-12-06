import React from 'react'

const LocationSearchPanel = (props) => {
    //sample array of location
    const location = [
        "24b,near kapor cafe ,bhopal",
        "Kalyani,Kolkata",
        "24b,near kapor cafe ,bhopal",
        "24b,near kapor cafe ,bhopal"
    ]
  return (
    <div>
       {/*sample data */}
        {
            location.map(function(elem){
                return <div onClick={()=>{
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }}
                className=' flex gap-4 border-2 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'
                >
                <h2 className=' bg-[#eee] h-10 w-10 flex justify-center items-center  rounded-full '><i className="ri-map-pin-fill"></i></h2>
                <h4 className=' font-medium'>{elem}</h4>
            </div>
            })
        }
        
        
       
    </div>
  )
}

export default LocationSearchPanel