import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
// ===== CSS
import styles from "./Blognavigations.module.css";
// ===== Images
import { FaAngleDown } from "react-icons/fa";
const BlogNavigation = ({ postData }) => {
    const [h2Tags, setH2Tags] = useState([]);
    const [activeHeading, setActiveHeading] = useState(null);
    const [isNavVisible, setIsNavVisible] = useState(true);
    //=============== Parse h2 tags ===============//
    useEffect(() => {
        if (postData && postData.content) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(postData.content, "text/html");
            const h2Elements = doc.querySelectorAll("h2");
            // h2Elements.forEach((h2, index) => {
            //     const id = `heading${index + 1}`;
            //     h2.setAttribute("id", id);
            // });
            let h2ElementLeft = document.querySelectorAll("#leftcontent h2");
            Array.from(h2ElementLeft).map((e, i) => {
                e.setAttribute("id", `heading${i + 1}`)
            })
            const h2TagsArray = Array.from(h2Elements).map(h2 => h2.innerText);
            setH2Tags(h2TagsArray);
            if (h2Elements.length > 0) {
                const firstHeadingId = `#${h2Elements[0].getAttribute("id")}`;
                setActiveHeading(firstHeadingId);
            }
        }
    }, [postData]);
    //=============== Handle heading ===============//
    const handleHeadingClick = (id) => {
        setActiveHeading(id);
        console.log(id);
    };
    //=============== Toggle navigation ===============//
    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    };
    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.navigations}>
                    <div className={styles.mainHeading} onClick={toggleNavVisibility}>
                        <h3 className="flex justify-center items-center gap-2">
                            <span className="block">Navigation</span>
                            <FaAngleDown />
                        </h3>
                    </div>
                    {isNavVisible && (
                        <ul className={styles.navHeadings}>
                            {h2Tags.map((text, i) => (
                                <li key={i}>
                                    <a
                                        href={`#${"heading" + (i + 1)}`}
                                        className={`fontsfregular ${activeHeading === `#heading${i + 1}` ? styles.active : "text-black"}`}
                                        onClick={() => handleHeadingClick(`#heading${i + 1}`)}
                                    >
                                        {text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className={`${styles.articles} mr-lg:block hidden`}>
                    <h3 className="fontsfregular">Relevant Articles</h3>
                    <ul className={`${styles.noList} mt-4`}>
                        <li>
                            <p className="fontsfregular">Blockchain</p>
                            <h6 className="fontsfregular">Conquer Tech With Bitswits: <br />
                                Your Path To Unstoppable Progress!</h6>
                        </li>
                        <li>
                            <p className="fontsfregular">Mobile Application</p>
                            <h6 className="fontsfregular">Frequently Asked Questions <br />Regarding The Development Of <br />Cryptocurrency Exchange Software</h6>
                        </li>
                        <li>
                            <p className="fontsfregular">General</p>
                            <h6 className="fontsfregular">Conquer Tech With Bitswits: <br />
                                Your Path To Unstoppable Progress!</h6>
                        </li>
                        <li>
                            <p className="fontsfregular">Mobile Application</p>
                            <h6 className="fontsfregular">Conquer Tech With Bitswits: <br />
                                Your Path To Unstoppable Progress!</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
export default BlogNavigation;