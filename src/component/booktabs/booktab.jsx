"use client";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

// Image imports
import Book01 from "media/portfolio/book/1.webp";
import Book02 from "media/portfolio/book/2.webp";
import Book03 from "media/portfolio/book/3.webp";
import Book04 from "media/portfolio/book/4.webp";
import Book05 from "media/portfolio/book/5.webp";
import Book06 from "media/portfolio/book/6.webp";
import Book07 from "media/portfolio/book/7.webp";
import Book08 from "media/portfolio/book/8.webp";

const data = {
    subtitle: "Our Gallery",
    title: "Our Latest Book Publishing Projects",
    desc: "Your app journey begins with a vision, and we’re here to transform it into reality. Through careful design, expert development, and seamless execution.",
    BookTabsItem: [
        {
            tabtitle: "All Books",
            TabContent: [
                {
                    tit: "Symphony on a Toy Piano",
                    txt: "Life is a mix of fleeting harmony and inevitable chaos—sometimes everything falls into place, and other times, it feels like an off-key melody. Symphony on a Toy Piano is a collection of poems that embraces both the triumphs and the stumbles, the laughter and the lessons. With words that are never quite enough, April Adams captures the music of the soul—the tune we’re all humming—while exploring faith, doubt, and the search for meaning. Whether wrestling with belief, celebrating grace, or simply finding humor in life’s unpredictability, this book invites readers to listen, reflect, and join in the song.",
                    name: "April Adams",
                    link: "#",
                    img: Book08.src,
                },
                {
                    tit: "Snow the White Horse",
                    txt: "Snow the White Horse is a magical children’s tale about a white horse named Snow with dazzling blue eyes and an extraordinary secret. Living on a cozy farm with two sisters, their parents, and a gray horse named Boris, Snow’s life is exciting. When Santa discovers Snow’s hidden powers, he teaches her to fly and invites her to join him in the Santa Village to help save Christmas. This enchanting story takes young readers on Snow’s thrilling adventures as she embarks on a mission to save the holiday, capturing the wonder of friendship, courage, and magic.",
                    name: "Ihor Babiak",
                    link: "#",
                    img: Book07.src,
                },
                {
                    tit: "Priest A Novel",
                    txt: "Faith slurred that pastors should be told to, &quot;...keep their hands off little girls.&quot; Faith McGuire is a lawyer with a firm that represents individuals who claim they were abused by clergy in the archdiocese of Baltimore.When a well- regarded pastor of an inner - city church is accused of sexual misconduct after his funeral, the priest's diaries cause her to doubt the claims. This sets in motion a dizzying trail of deceit, family secrets, criminal activity and murder that will put Faith's trust in her church and career to the test.",
                    name: "Al Dawson",
                    link: "#",
                    img: Book06.src,
                },
                {
                    tit: "Gemini in Twain",
                    txt: "Hi! Welcome! I'm Alyssa Farrow, author of the book Gemini in Twain. Someone much smarter than me once said that Whatever you pretended to be as a kid is what you should be when you grow up. My favorites were telling stories, being a mermaid, and being an international super-spy. I feel like I ultimately made the right decision, given the choices. My road to writing wasn't linear, however. I first had to go to culinary school and work in a bakery to figure out I didn't want to be a pastry chef. I got a bachelor's degree in Nutritional Sciences and a minor in chemistry in order to arrive at the conclusion that I wanted to be a Pilates and yoga teacher. I've traveled all over the world with my husband. Through all these interesting careers, in my free time, I wrote stories. I wanted to keep writing when I was done with my first book. But it took a global pandemic and being a first-time mother to finally convince me that my lifelong dream of writing could be a viable career option. This book, Gemini in Twain, is Book One of the Immortallis series; there will be many more books after the series is concluded. I hope you'll stick around and enjoy the ride.",
                    name: "Alyssa Farrow",
                    link: "#",
                    img: Book05.src,
                },
                {
                    tit: "The Valleys Of Fairyland",
                    txt: "After befriending Peter, the gardener’s four-year-old son, seven-year-old Penny decides to have a picnic with him by the river. After enjoying a hearty meal, the two children fall asleep, only to wake up and find themselves in the middle of the river and floating further away from the shore. On and on they go until they go through a tunnel and find themselves in a magical world called Fairyland. And thus, a magical journey begins. In Fairyland, the young children encounter all kinds of magical beings, from talking cats to dolls to candy people to elves and so many more! Eventually, they meet and are adopted by the Queen of Fairyland, after which they enjoy all kinds of luxuries.However, even those get old soon enough as they begin to miss their parents and their own world.After striking a deal with the Queen of Fairyland, they decide to reverse the adoption and return home – the deal being that they can never return to Fairyland. However, their love for their parents and home outweighs the magical beings and wonderful experiences they encountered in Fairyland, and they finally return home to their worried parents, always keeping the memories of Fairyland close to heart.",
                    name: "Alfreda Pearl (Hewitt) Lees",
                    link: "#",
                    img: Book04.src,
                },
                {
                    tit: "The Rainbow World Talent Show",
                    txt: "The Rainbow World Talent Show! is a heartwarming and imaginative adventure that invites children back into the colorful and whimsical world of Rainbow World. In this delightful sequel to The Wonderful World of The Happy Colors, young readers join a cast of vibrant characters as they prepare for their very first talent show—an event full of magic tricks, music, fashion, science, laughter, and a flying teddy bear! When sweet little Molly struggles to discover her own special talent, her friends rally around her, showing the power of friendship, encouragement, and creativity.Through humor, surprises, and a meaningful lesson about self- worth and perseverance, this book reminds children that everyone has something unique to offer. Perfect for read - aloud moments or early independent readers, The Rainbow World Talent Show! celebrates imagination, kindness, and the courage to be yourself.",
                    name: "David Cromin",
                    link: "#",
                    img: Book03.src,
                },
                {
                    tit: "Macmurphy",
                    txt: "Inspector Macmurphy is a police detective who works diligently to sift through the nuances of a case, figure out the ones truly guilty using the smallest of clues, and ensure that no one gets away with anything. However, many cases that end up on Inspector Macmurphy’s desk are not as straightforward as they seem. The question is, can he find the criminal? Join Inspector Macmurphy on his thrilling adventures as he deploys his award- worthy brilliance to make sure that justice is served… always.",
                    name: "David Sherman",
                    link: "#",
                    img: Book02.src,
                },
                {
                    tit: "Millennial Lyrics with Demo Songs",
                    txt: "Millennial Lyrics with Demo Songs is a valuable resource for music producers, musicians, and songwriters. It explores contemporary lyrics that speak to people today and features demo songs to encourage new ideas. With enough songs to last a lifetime in genres such as R&B, Afropop, Gospel, and more, this groundbreaking book is perfect for both aspiring and professional musicians. Each lyric is followed by a demo recording to inspire and improve compositions for contemporary audiences.Beyond a compilation, this book provides an innovative perspective on songwriting, assisting you in producing hit after hit with lyrics that capture the moment and demos that bring them to life.",
                    name: "David Sherman",
                    link: "#",
                    img: Book01.src,
                },
            ],
        },
    ],
};

const BookTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={`pt-100 ${styles.bookTabs}`}>
            <Container>
                <Row>
                    <Col md={7} className="text-center mb-5 mb-lg-4 mb-md-3 mb-sm-2 mx-auto">
                        <div className={styles.subtitle}>{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p className={styles.bookPara}>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.tabContainer}>
                            {/* Optional Tab Buttons */}
                            {/* <div className={styles.tabHeader}>
                <ul>
                  {data.BookTabsItem.map((tab, index) => (
                    <li
                      key={index}
                      className={activeTab === index ? styles.active : ""}
                      onClick={() => setActiveTab(index)}
                    >
                      <span>{tab.tabtitle}</span>
                    </li>
                  ))}
                </ul>
              </div> */}

                            <div className={styles.tabBody}>
                                {data.BookTabsItem[activeTab].TabContent.map((book, index) => (
                                    <div className={styles.ImageBox} key={index}>
                                        <Image src={book.img} alt={`Book ${index + 1}`} fill />
                                        <div className={styles.TxtBox}>
                                            <div className={styles.title}>
                                                <h5>{book.tit}</h5>
                                                <p>{book.txt}</p>
                                                <Link href={book.link} target="_blank">
                                                    Visit on Amazon
                                                </Link>
                                            </div>
                                            <div className={styles.profile}>
                                                <div className={styles.imgBox}>
                                                    <Image src={book.img} alt={book.name} fill />
                                                </div>
                                                <div className={styles.imgTitle}>
                                                    {book.name}
                                                    <span>Author</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BookTabs;
