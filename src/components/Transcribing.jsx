import React from 'react'

function Transcribing(props) {
    const {downloading} = props
  return (
    <div className='flex items-center flex-col justify-center gap-10 md:gap-14 pb-24 p-4 text-center flex-1'>
        <div className="flex flex-col gap-2 sm:gap-4">
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
        <span className="text-blue-400 bold ">Transcribing</span>
        </h1>
        <p className="font-semibold">
            {!downloading ? "warming up cylinders" : "core cylinders engaged"}
        </p>
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 mx-auto w-full max-w-[400px] ">
            {[0,1,2].map(
                val => {
                    return <div key={val} className={"rounded-full  h-2 sm:h3 bg-slate-400 loading "+ `loading${val}`}></div>
                }
            )}
        </div>
    </div>
  )
}

export default Transcribing