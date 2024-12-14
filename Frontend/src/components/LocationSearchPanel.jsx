import React from 'react'

const LocationSearchPanel = ({ 
    suggestions, 
    setVehiclePanel, 
    setPanelOpen, 
    setPickup, 
    setDestination, 
    activeField 
}) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion);
        } else if (activeField === 'destination') {
            setDestination(suggestion);
        }
        // setVehiclePanel(true)
        // setPanelOpen(false)
    };

    return (
        <div className='p-4'>


            {/* Map suggestions */}

            {
                suggestions.map((elem, idx) => (
                    <div 
                        key={idx} 
                        onClick={() => handleSuggestionClick(elem)} 
                        className='flex gap-4 border-2 p-3 border-gray-200 active:border-black rounded-xl items-center hover:bg-gray-100 my-2 justify-start cursor-pointer transition'
                        role="button"
                        tabIndex={0}
                    >
                         {/* Icon */}
                         <div className="bg-gray-200 h-8 w-12 flex items-center justify-center rounded-full">
                            <i className="ri-map-pin-fill text-gray-600"></i>
                         </div>

                         {/* Suggestion Text */}
                           <h4 className="font-medium text-gray-800 truncate">{elem}</h4>
                    </div>
                ))
            }
        </div>
    );
};

export default LocationSearchPanel