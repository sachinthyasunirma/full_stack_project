import React from 'react'

function DeliverySmCard({ image, title }) {
    return (
        <>
            <div className='lg:hidden bg-white shadow-sm rounded-md w-24 md:w-56'>
                <div className='w-full h-24'>
                    <img className='w-full h-full object-contain object-center rounded-t-md' src={image} alt={title} />
                </div>
                <div>
                    <h3 className='text-sm my-1 text-center font-light'>{title}</h3>
                </div>
            </div>
        </>
    )
}
function DeliveryLgCard({ image, title }) {
    return (
        <>
            <div className='hidden lg:block w-72 px-9'>
                <div className='w-full h-80'>
                    <img className='w-full h-full object-cover object-center rounded-t-md' src={image} alt={title} />
                </div>
                <div className='absolute z-10 bottom-0 mx-1 px-2 w-52 h-10 hover:h-14 hover:transition duration-700' style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
                    <h3 className='w-full h-full text-base my-1 text-left font-normal text-white capitalize hover:text-lg hover:transition duration-700'>{title}</h3>
                </div>
            </div>
        </>
    )
}

function DeliveryCategory(props) {
    return (
        <>
            <DeliverySmCard {...props} />
            <DeliveryLgCard {...props} />
        </>
    )
}

export default DeliveryCategory