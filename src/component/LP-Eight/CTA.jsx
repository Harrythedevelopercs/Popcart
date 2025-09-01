// React
import { useContext } from "react"
// CSS
import styles from "./styles/cta.module.css"
// Components
import { PopupContext } from "./Popup/PopupContext"

export default function CTA({
  isPopup = false,
  link = "javascript:;",
  text = "Get Started",
  css = "",
  handle = "",
}) {
  const { openPopup } = useContext(PopupContext)
  return isPopup ? (
    <div className="relative !z-50">
      <button onClick={openPopup} className={`${styles.cta} ${css}`}>
        {text}
      </button>
    </div>
  ) : (
    <div
      dangerouslySetInnerHTML={{
        __html: `<a href="${link}" class="${styles.cta} ${css}" ${
          handle ? `onclick="${handle}"` : ""
        }>${text}</a>`,
      }}
    />
  )
}
