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
  colorChange
}) {
  const variantClasses = {
    default: "bg-gradient-to-r from-[#28b8b1] to-[#1fdbcb]",
    yellow: "bg-[#f9ab0e]",
    red: "bg-[#ff0000]",
    changed: "bg-[#3EA99F] text-white"
  }

  const buttonClasses = colorChange
    ? variantClasses.changed
    : variantClasses[variant] || variantClasses.default;

  const { openPopup } = useContext(PopupContext);
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
    >
      {text}
    </a>
  )
}
