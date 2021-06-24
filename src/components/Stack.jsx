import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import content from '../content'

function Stack() {
    return (
        <div className=" min-h-screen flex flex-col items-center justify-center " id="stack">
                <h1 className="font-dosis text-5xl font-extrabold ">Stack I Use </h1>


                <div className="animate-bounce flex flex-wrap justify-center  py-32">
                    {content.stack.tech.map((tech, index) => {
                        return <span className="w-40 h-40 bg-white m-2 rounded-full shadow-2xl flex items-center p-5">
                            <LazyLoadImage src={tech.img} alt={tech.alt} />
                        </span>
                    })}
                </div>

                  <p className="text-lg w-10/12 md:w-3/5 text-center ">{content.stack.desc}</p>
            </div>
    )
}

export default Stack
