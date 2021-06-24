import React from 'react'
import content from '../content'
function Navigation() {
    return (
        <div className="shadow-2xl" style={{
            background:'#091c29',

        }}>
            <div className='flex items-center justify-between w-10/12 py-3 mx-auto font-dosis  text-white'>
              <h1  className="text-3xl font-bold ">{content.nav.logo}
                     <span className="w-3 h-3 bg-red-500 inline-block rounded-full "></span>
              </h1>
              <div className="">{content.nav.links.map((link,index)=>{
                    return     <span className="text-xl mr-4" key={index}>
                             {link.text}
                         </span>
              })}</div>
              </div>
        </div>
    )
}

export default Navigation
