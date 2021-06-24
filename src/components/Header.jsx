import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import content from '../content'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Typical from  'react-typical'
import { Link as ScrollLink } from 'react-scroll'
export function Header() {
    return (<div className="min-h-screen flex items-center justify-center " style={{
        background:'#091c29',
        }}>
            <div  className="w-10/12 flex flex-col md:flex-row-reverse items-center justify-between "> 
                <div  className="w-full md:w-2/5">
                    <LazyLoadImage className="" src={content.header.img} effect="opacity" />
                </div>
                <div className="text-white text-center font-dosis">
                    <h2 className="text-4xl font-bold ">{content.header.text[0]}
                        <br />
                        {content.header.text[1]}
                    </h2>
                    <h1 className="font-2xl font-bold text-gray-500">
                        {content.header.text[2]}{' '}
                        <Typical
                            steps={content.header.typical}
                            loop={Infinity}
                            className="inline-block"
                             />
                    </h1> 
                    <ScrollLink to="stack">
                    <button className= "animate-bounce bg-indigo-500 px-10 py-3 rounded-lg shadow-xs mt-10 " effect="blur"> {content.header.btnText} </button>
                    </ScrollLink>
                </div>
            </div>
        </div>
    )
}

