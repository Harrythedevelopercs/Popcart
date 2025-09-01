// Next
import Image from "next/image"
// Media
import Clients from "media/lp-seven/clients.webp"
const ClientsImage = () => {
  return (
   <section>
    <div className="mr-md:block hidden">
        <Image src={Clients} alt="clients" className="mx-auto w-full"/>
    </div>
   </section>
  )
}

export default ClientsImage