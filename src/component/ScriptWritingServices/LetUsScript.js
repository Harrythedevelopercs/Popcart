import React from 'react'
import Image from 'next/image';

const creativeGhostWriters = () => {
    return (
        <>
            <section className="exceptional py-16 relative">
                <div className="container mx-auto max-w-7xl z-10 relative">
                    <div className="text-center mb-8 heading">
                        <h6 className="font-semibold">
                            THE SCRIPT THAT IS
                        </h6>
                        <h2 className='text-4xl font-semibold'>
                           Written With Pure Perfection 
                        </h2>
                        <p className="mt-4 max-w-[60%] mx-auto">
                        Scriptwriting is massive, but with us, it becomes easy and accessible. You choose your script, and our writers do wonders with it. Our scriptwriting is known and appreciated worldwide.                        </p>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-1 space-y-5 space-x-5 md:w-[90%]">
                        <div className='flex-rows justify-center items-center text-center pt-5 pl-5'>
                             <Image quality={95} width={50} height={50} className='' src='/assets/images/newimg/script-writing-1.jpg' alt='script writing'/>
                            <h3 className='text-2xl font-bold'>Film <br></br> Writing</h3>
                        </div>

                        <div className='flex-rows justify-center items-center text-center'>
                             <Image quality={95} width={50} height={50} className='' src='/assets/images/newimg/script-writing-2.jpg' alt='script writing'/>
                            <h3 className='text-2xl font-bold'>Video <br></br>Scripting</h3>
                        </div>
                        
                        <div className='flex-rows justify-center items-center text-center'>
                             <Image quality={95} width={50} height={50} className='' src='/assets/images/newimg/script-writing-3.jpg' alt='script writing'/>
                            <h3 className='text-2xl font-bold'>Documentary <br></br> Scripting</h3>
                        </div>

                        <div className='flex-rows justify-center items-center text-center'>
                             <Image quality={95} width={50} height={50} className='' src='/assets/images/newimg/script-writing-4.jpg' alt='script writing'/>
                            <h3 className='text-2xl font-bold'>Story <br></br> Scripting</h3>
                        </div>

                        <div className='flex-rows justify-center items-center text-center'>
                             <Image quality={95} width={50} height={50} className='' src='/assets/images/newimg/script-writing-5.jpg' alt='script writing'/>
                            <h3 className='text-2xl font-bold'>Manuscript <br></br> Scripting</h3>
                        </div>

                        <div className='flex-rows justify-center items-center text-center'>
                             <Image quality={95} width={50} height={50} className='' src='/assets/images/newimg/script-writing-6.jpg' alt='script writing'/>
                            <h3 className='text-2xl font-bold'>Content <br></br> Scripting</h3>
                        </div>

                    </div>
                    
                </div>

            </section>


        </>
    )
}

export default creativeGhostWriters
