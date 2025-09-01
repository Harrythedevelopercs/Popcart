import React from 'react'

const faqs = () => {
    return (
        <>
            <section  className="faqs bg-gray-100 py-8">
    <div  className="container max-w-7xl mx-auto">
        <div  className="text-center">
            <h6  className="text-gray-600">FAQs</h6>
            <h2  className="text-3xl font-bold mt-2">Frequently Asked Questions</h2>
            <p  className="text-gray-600 mt-2">Reach out to us for any assistance</p>
        </div>
        <div  className="faqs-wrapper mt-6">
            <div  className="accordion" id="faq">
                <div  className="grid md:grid-cols-2 grid-cols-2 gap-4">
                    <div  className="col-span-1">
                        <div  className="card">
                            <div  className="card-header" id="faqhead1">
                                <button  className="btn-header-link collapsed" data-toggle="collapse" data-target="#faq1" aria-expanded="false" aria-controls="faq1">What is the average cost of a ghostwriter?</button>
                            </div>
                            <div id="faq1"  className="collapse" aria-labelledby="faqhead1" data-parent="#faq">
                                <div  className="card-body">
                                    <p>Costs for ghostwriters vary quite a bit depending on the scope of the project and the length of the book as well.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-span-1">
                        <div  className="card">
                            <div  className="card-header" id="faqhead2">
                                <button  className="btn-header-link collapsed" data-toggle="collapse" data-target="#faq2" aria-expanded="false" aria-controls="faq2">What are the services of a ghostwriter?</button>
                            </div>
                            <div id="faq2"  className="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                                <div  className="card-body">
                                    <p>A ghostwriter writes your book and gets paid for it, you maintain all rights to the book whereas the ghostwriter simply gets paid for the service.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-span-1">
                        <div  className="card">
                            <div  className="card-header" id="faqhead3">
                                <button  className="btn-header-link collapsed" data-toggle="collapse" data-target="#faq3" aria-expanded="false" aria-controls="faq3">Do ghostwriters write the whole book?</button>
                            </div>
                            <div id="faq3"  className="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                <div  className="card-body">
                                    <p>Usually yes, sometimes an author might write a book with an author where both parties write the book together, again this varies a bit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-span-1">
                        <div  className="card">
                            <div  className="card-header" id="faqhead4">
                                <button  className="btn-header-link collapsed" data-toggle="collapse" data-target="#faq4" aria-expanded="false" aria-controls="faq4">Is it worth hiring a ghostwriter?</button>
                            </div>
                            <div id="faq4"  className="collapse" aria-labelledby="faqhead4" data-parent="#faq">
                                <div  className="card-body">
                                    <p>It's absolutely worth it to hire a quality ghostwriter who has the expertise and knowledge to take your ideas to the next level.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-span-1">
                        <div  className="card">
                            <div  className="card-header" id="faqhead5">
                                <button  className="btn-header-link" data-toggle="collapse" data-target="#faq5" aria-expanded="true" aria-controls="faq5">Can a ghostwriter steal a book?</button>
                            </div>
                            <div id="faq5"  className="collapse show" aria-labelledby="faqhead5" data-parent="#faq">
                                <div  className="card-body">
                                    <p>No, as it is illegal for a ghostwriter to claim the book as their own, a ghostwriter is only someone hired to write a book on the basis that they get paid for the words they wrote.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-span-1">
                        <div  className="card">
                            <div  className="card-header" id="faqhead6">
                                <button  className="btn-header-link collapsed" data-toggle="collapse" data-target="#faq6" aria-expanded="true" aria-controls="faq6">Do all authors use ghostwriters?</button>
                            </div>
                            <div id="faq6"  className="collapse" aria-labelledby="faqhead6" data-parent="#faq">
                                <div  className="card-body">
                                    <p>Not all but many authors do, even famous ones. Often times authors have series and a high volume of books to complete which leads to them utilizing ghostwriters.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-span-1">
                        <div  className="card">
                            <div  className="card-header" id="faqhead7">
                                <button  className="btn-header-link collapsed" data-toggle="collapse" data-target="#faq7" aria-expanded="true" aria-controls="faq7">Do ghostwriters get royalties?</button>
                            </div>
                            <div id="faq7"  className="collapse" aria-labelledby="faqhead7" data-parent="#faq">
                                <div  className="card-body">
                                    <p>No, as a ghostwriter you are not entitled to any royalties, you’re simply entitled to being paid for the work you’ve done.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-span-1">
                        <div  className="card">
                            <div  className="card-header" id="faqhead8">
                                <button  className="btn-header-link collapsed" data-toggle="collapse" data-target="#faq8" aria-expanded="true" aria-controls="faq8">Is ghostwriting illegal?</button>
                            </div>
                            <div id="faq8"  className="collapse" aria-labelledby="faqhead8" data-parent="#faq">
                                <div  className="card-body">
                                    <p>No it is not, it’s a perfectly legal service and many authors have utilized ghostwriters and continue to do so.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        </>
    )
}

export default faqs
