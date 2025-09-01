import React from 'react'

const manuscript = () => {
    return (
        <>
            <section className='bg-[#f2f2f2]'>
                <div className='container max-w-7xl mx-auto py-28 font-secondary'>
                    <div className='grid grid-cols-2 grid-rows-1 justify-between space-x-4'>
                        <div className='w-[85%]'>
                            <h6 className='text-xl'>Our outstanding approach to writing</h6>
                            <h3 className='font-semibold text-4xl'>We will create a manuscript
                                free of errors</h3>
                            <p className='text-justify'>Our writers will work tirelessly to produce a manuscript that is not only devoid of errors but is also something that reads really well and requires a lot less micromanagement in the form of revisions.</p>
                        </div>
                        <div>
                            <h6 className='text-xl'>Our outstanding publishing expertise</h6>
                            <h3 className='font-semibold text-4xl'>Publishing made easy with
                                our services</h3>
                            <p className='text-justify'>Publishing is the hardest aspect of crafting a novel due to the complexities of publishing in this day and age, the older system of having large publishers who are entrenched in the industry and working with them to publish your book is not something that is accessible to everyone, which is why our in house publishing allows for convenience and ease so that you don't have to worry about a single thing.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default manuscript
