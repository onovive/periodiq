"use client";

import React, { useState } from 'react';

const index = () => {
    const [enabled, setEnabled] = useState(true);

    const toggleDivs = () => {
        setEnabled(!enabled);
    };

    return (
        <div className='p-7 md:p-14 mt-12'>
            <div className="flex items-center gap-3 py-7">
                <div className="relative">
                    <input
                        type="checkbox"
                        checked={enabled}
                        onChange={() => setEnabled(!enabled)}
                        className="sr-only"
                        id="toggle"
                        onClick={toggleDivs}
                    />
                    <label
                        htmlFor="toggle"
                        className={`block w-10 h-5 rounded-full cursor-pointer transition-colors ${enabled ? 'bg-[#017e48] ' : 'bg-gray-300'}`}
                    ></label>
                    <span
                        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${enabled ? 'translate-x-5' : ''}`}
                    />
                </div>
                <p className='text-black'> I'm technical </p>
            </div>

            {enabled ? (
                <div className="">
                    <div className="text-black flex flex-col justify-center items-start gap-4">
                        <h1 className='text-[#017e48] leading-[48px] sm:leading-[70px]  text-3xl md:text-4xl lg:text-6xl tracking-normal'>Build your AI apps 20x faster</h1>
                        <h2 className='text-violet-300	text-2xl md:text-3xl tracking-normal'><i>with Natural Language Programming</i></h2>
                        <p className='text-slate-500 text-base	 py-5 tracking-normal'>Wordware enables anyone to develop, iterate and deploy useful AI Agents.</p>
                    </div>
                </div>
            ) : (
                <div className="md:pr-[14rem] lg:pr-[20rem]">
                    <div className="text-black">
                        <h1 className='text-[#000033] text-3xl lg:text-4xl font-bold tracking-normal'>Iterate on LLM applications without the need to code</h1>
                        <p className='text-slate-500 text-base py-5 tracking-normal'>We believe that as a domain expert—whether you're a lawyer, marketer, or medical doctor—you should be involved in the process.</p>
                        <p className='text-slate-500 text-base py-5 tracking-normal'>Are you tired of fighting for engineering resources, frustrated with a slow feedback loop, and feeling like your hands are tied? Let us empower you with the right tools so you can simply share your API key with your engineers and get things done.</p>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-2 md:flex justify-start items-center gap-5 py-8">
                <button className="text-black border md:px-4 py-3 rounded text-md ">Book a demo</button>
                <button className="text-white  md:px-4 py-3 rounded text-md bg-[#232523]">Start for free</button>
            </div>
        </div>
    );
};

export default index;
