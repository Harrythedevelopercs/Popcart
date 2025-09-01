// Next
import Image from "next/image"
// Media
import Book1 from "media/lp-seven/books/cutter.jpg"
import Book2 from "media/lp-seven/books/lilly.jpg"
import Book3 from "media/lp-seven/books/theodd.jpg"
import Book4 from "media/lp-seven/books/theodd1.jpg"
import Link from "next/link"
const BestSellerBooks = () => {
  const bookData = [
    {
      title: "THE CUTTER",
      img: Book1,
      author: "Thomas Maschhoff",
      description:
        "Born just west of the Bayou in Lafourche Parish in south Louisiana, Amos Jonah Garrison suffered abuse and neglect throughout his childhood. By the time he was eighteen, he had endured harsh beatings from his stepfather and emotional neglect from his mother, herself a victim of her husband’s anger.",
      agent: "LUKE",
      editor: "TRAVIS",
      amazonLink: "#",
    },
    {
      title: "MY DEAR SWEET LILLY",
      img: Book2,
      author: "MICKEY ZINCZENKO",
      description:
        "Jackson Corona was a good boy, had good grades and was socially accepted. However, his awkwardness appeared when trying to speak to girls.",
      agent: "Cliff Martin",
      editor: "BRIAN",
      amazonLink: "#",
    },
    {
      title: "THE CONSPIRACY TO SLOWLY KILL AMERICANS",
      img: Book3,
      author: "Professor Patrick Farrell",
      description:
        "This book is about life and not death. This book is about how our corrupt government gives tax subsidies to the death industry...",
      agent: "Cliff Martin",
      editor: "JOHN",
      amazonLink: "#",
    },
    {
      title: "THE ODD PUMPKIN",
      img: Book4,
      author: "Elisa Anderson",
      description:
        "A children's bedtime story for early readers, kindergartners and 1st graders with a moral lesson: A read aloud tale for children about acceptance.",
      agent: "NANCY",
      editor: "CHARLES",
      amazonLink: "#",
    },
  ]
  return (
    <section>
      <div className="mr-md:py-[80px] py-[50px]">
        <div className="mr-container">
          <div className="text-center">
            <h2 className="mr-lg:text-[34px] mr-md:text-[30px] text-[20px] leading-tight font-bold mb-[20px] max-w-[1250px] mx-auto">
              We Have Supported Countless Authors Get Best Selling Books
              Published Under Their Name
            </h2>
            <p className="mr-md:text-[18px] text-[14px] leading-normal font-normal">
              We have helped a broad range of authors publish their books
              successfully.
            </p>
          </div>
          <div className="grid mr-lg:grid-cols-2 grid-cols-1 mr-lg:gap-y-24 gap-y-14 mr-xl:gap-x-24 gap-x-16 max-w-[1250px] mt-[70px] mx-auto">
            {bookData.map((book, i) => (
              <div
                key={i}
                className="flex items-start gap-x-5 group transition-all ease-in-out duration-500 delay-100 hover:mr-md:p-[36px_40px_36px_38px] p-[36px_10px_36px_10px] hover:shadow-[-24px_16px_60px_-8px_rgba(0,_0,_0,_0.3)]"
              >
                <Image
                  src={book.img}
                  alt={book.title}
                  width={135}
                  height={156}
                  className="transition-all ease-in-out duration-500 cursor-pointer shadow-[-18px_1px_6px_-2px_rgba(0,_0,_0,_0.2),_-30px_1px_16px_-4px_rgba(0,_0,_0,_0.2)] group-hover:[transform:translate(4px,_-9px)_rotate(0.001deg)] group-hover:shadow-[-30px_1px_18px_0_rgba(0,_0,_0,_0.3),_-48px_1px_32px_0_rgba(0,_0,_0,_0.3)]"
                />
                <div className="basis-full">
                  <h3 className="mr-md:text-[24px] text-[18px] leading-tight font-medium mb-3">
                    {book.title}
                  </h3>
                  <div className="flex items-end gap-x-3 mb-4">
                    <Image
                      src={book.img}
                      alt={book.title}
                      className="w-[48px] h-[48px] rounded-full object-cover object-top"
                    />
                    <h4 className="mr-md:text-[17px] text-[14px] leading-tight font-normal uppercase tracking-wide">
                      {book.author}
                    </h4>
                  </div>
                  <p className="hidden group-hover:block mr-md:text-[17px] text-[14px] leading-normal font-medium mb-3">
                    {book.description}
                  </p>
                  <Link
                    href={book.amazonLink}
                    target="_blank"
                    className="hidden group-hover:inline-block text-base font-medium border-b border-[#8f181b] my-4"
                  >
                    View on Amazon
                  </Link>
                  <table className="table w-full transition-all ease-in-out duration-500 group-hover:hidden">
                    <tbody>
                      <tr>
                        <td className="border-r border-t border-b border-[#d1d2d4] text-[11px] text-[#474b4e] tracking-wider font-medium">
                          AGENT
                        </td>
                        <td className="border-l border-t border-b border-[#d1d2d4] p-[8px_12px] text-sm tracking-wider font-medium">
                          {book.agent}
                        </td>
                      </tr>
                      <tr>
                        <td className="border-r border-t border-b border-[#d1d2d4] text-[11px] text-[#474b4e] tracking-wider font-medium">
                          PUBLISHED BY
                        </td>
                        <td className="border-l border-t border-b border-[#d1d2d4] p-[8px_12px] text-sm tracking-wider font-medium">
                          Broadway Publishers
                        </td>
                      </tr>
                      <tr>
                        <td className="border-r border-t border-b border-[#d1d2d4] text-[11px] text-[#474b4e] tracking-wider font-medium">
                          EDITOR
                        </td>
                        <td className="border-l border-t border-b border-[#d1d2d4] p-[8px_12px] text-sm tracking-wider font-medium">
                          {book.editor}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSellerBooks
