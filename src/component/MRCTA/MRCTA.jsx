// React
import { useContext } from "react"
// Components
import { PopupContext } from "../LP-Eight/Popup/PopupContext"

const MRCTA = ({
  isPopup = false,
  text,
  link = "javascript:;",
  classes = "",
  bg = "bg-primary-100",
  color = "text-white",
  border = "border-transparent",
  handle = "",
  animation = "",
}) => {
  const { openPopup } = useContext(PopupContext)

  return isPopup ? (
    <div className="relative z-10">
      <button
        onClick={openPopup}
        className={`w-full mr-md:w-max h-[50px] ${bg} ${color} rounded-md flex items-center !px-10 font-sans font-semibold justify-center border-2 transition-all ${border} ${animation} ${classes}`}
      >
        {text}
      </button>
    </div>
  ) : (
    <div
      dangerouslySetInnerHTML={{
        __html: `<a href="${link}" class="w-full mr-md:w-max h-[50px] ${bg} ${color} rounded-md flex items-center !px-10 font-sans font-semibold justify-center border-2 transition-all ${border} ${animation} ${classes}" ${
          handle ? `onclick="${handle}"` : ""
        }>${text}</a>`,
      }}
    />
  )
}

export default MRCTA
