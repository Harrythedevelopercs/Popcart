// React
import { useContext } from "react"
// Components
import { PopupContext } from "../LP-Eight/Popup/PopupContext"
export default function CTA({
  variant = "default",
  text = "Let's Get Started",
  css = "",
  link = "",
  isPopup = true,
}) {
  const variantClasses = {
    default: "bg-transparent",
    yellow: "bg-[#f9ab0e] border-none",
    blue: "bg-[linear-gradient(to_right,_rgba(84,127,191,1)_0%,_rgba(83,188,226,1)_100%)] border-none",
  }

  const buttonClasses = variantClasses[variant] || variantClasses.default

  const { openPopup } = useContext(PopupContext)
  return isPopup ? (
    <button
      onClick={openPopup}
      className={`block ${buttonClasses} w-max border-2 border-white text-white py-[11px] px-[42px] rounded-[136px] uppercase text-[15px] tracking-[1px] font-semibold ${css}`}
    >
      {text}
    </button>
  ) : (
    <a
      href={link}
      className={`block ${buttonClasses} w-max border-2 border-white hover:text-white text-white py-[11px] px-[42px] rounded-[136px] uppercase text-[15px] tracking-[1px] font-semibold ${css}`}
    >{text}</a>
  )
}
