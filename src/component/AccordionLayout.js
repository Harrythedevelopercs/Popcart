import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faChevronDown,
  } from "@fortawesome/free-solid-svg-icons";

function AccordionItem({ title, content, isOpen, toggleAccordion }) {
    return (
        <div className="border rounded mb-2 bg-white mr-3">
            <div
                className="flex justify-between items-center px-4 py-3 cursor-pointer"
                onClick={toggleAccordion}
            >
                <h2 className="text-base font-medium">{title}</h2>
                <span
                    className={`transform ${isOpen ? "rotate-180" : "rotate-0"} transition-transform`}
                >
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
                
            </div>
            {isOpen && <div className="px-4 py-3">{content}</div>}
        </div>
    );
}

function App() {
    const [openIndex, setOpenIndex] = useState(null);
    const accordionItems = [
        {
            title: "What is the Average Cost of a Ghostwriter?",
            content:
                " Costs for ghostwriters vary quite a bit depending on the scope of the project and the length of the book as well."
        },
        {
            title: "What are the Services of a Ghost Writer?",
            content:
                "A ghostwriter writes your book and gets paid for it, you maintain all rights to the book whereas the ghostwriter simply gets paid for the service."
        },
        {
            title: "Do Ghostwriters Write Whole Book?",
            content:
                "Usually yes sometimes an author might write a book with an author where both parties write the book together, again this varies a bit."
        },
        {
            title: 'Is it Worth Hiring a Ghost Writer?',
            content: 'It’s absolutely worth it to hire a quality ghostwriter who has the expertise and knowledge to take your ideas to the next level.',
        },
        {
            title: 'Can a Ghostwriter Steal a Book?',
            content: 'No, as it is illegal for a ghostwriter to claim the book as their own, a ghostwriter is only someone hired to write a book on the basis that they get paid for the words they wrote.',
        },
        {
            title: 'Do all Authors use Ghost Writers?',
            content: 'Not all but many authors do even famous ones, often times authors have series and a high volume of books to complete which leads to them utilizing ghostwriters.',
        },
        {
            title: 'Do Ghostwriters Get Royalties?',
            content: 'No, as a ghostwriter you are not entitled to any royalties, you’re simply entitled to being paid for the work you’ve done.',
        },
        {
            title: 'Is Ghostwriting Illegal?',
            content: 'No it is not, it’s a perfectly legal service and many authors have utilized ghostwriters and continue to do so.',
        },
        // Add more items as needed
    ];

    const toggleAccordion = (index) => {
        if (index === openIndex) {
           
            setOpenIndex(null);
        } else {
           
            setOpenIndex(index);
        }
    };

    return (
        <section className="bg-[#F5F5F5]">
            <div className="container max-w-7xl mx-auto py-8 px-10 md:px-5 md:py-10 sm:px-3 sm:py-5 xs:px-3 xs:py-5">
                <div className="p-4 heading items-center justify-center mx-auto text-center">
                    <h6>FAQS</h6>
                    <h2 className="text-[34px] font-bold ">Frequently Asked Questions</h2>
                    <p className="max-w-[70%] mx-auto mb-10 text-[#05193c] font-normal text-[17px]">
                        Reach Out to us for any Assistance
                    </p>
                    <div className="grid grid-cols-2 grid-rows-1 xs:grid-cols-1 md:grid-cols-1 justify-between text-left">
                        {accordionItems.map((item, index) => (
                            <div key={index}>
                                <AccordionItem
                                    title={item.title}
                                    content={item.content}
                                    isOpen={index === openIndex}
                                    toggleAccordion={() => toggleAccordion(index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;
