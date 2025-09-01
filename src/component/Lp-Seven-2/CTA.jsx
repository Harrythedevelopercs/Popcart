// React
import { useContext } from "react";
// Components
import { PopupContext } from "../LP-Eight/Popup/PopupContext";

export default function CTA({
  isPopup = false,
  link = "javascript:;",
  text = "Get Started",
  css = "",
  variant = "default",
  svgClasses = "",
  icon = true,
  handle = "",
}) {
  const variantClasses = {
    default:
      "bg-[#8f181b] p-[10px_20px] border border-[#8f181b] text-white hover:text-white",
    link: "border-none bg-transparent text-black underline",
    secondary:
      "bg-transparent p-[10px_20px] border border-[#8f181b] text-black hover:text-black",
  };

  const buttonClasses = variantClasses[variant] || variantClasses.default;
  const { openPopup } = useContext(PopupContext);
  return isPopup ? (
    <div className="relative !z-50">
      <button
        onClick={openPopup}
        className={`flex w-max rounded-[10px_10px_10px_0] transition-all ease-in-out duration-500 justify-center items-center gap-x-2 __animatedPing hover:opacity-90 ${buttonClasses} ${css}`}
      >
        <span>{text}</span>
        {icon && (
          <svg
            className={svgClasses}
            width="18"
            height="18"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="angle-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
            ></path>
          </svg>
        )}
      </button>
    </div>
  ) : (
    <div
      dangerouslySetInnerHTML={{
        __html: `<a href="${link}"  class="flex w-max rounded-[10px_10px_10px_0] transition-all ease-in-out duration-500 justify-center items-center gap-x-2 __animatedPing hover:opacity-90 ${buttonClasses} ${css}" ${handle ? `onclick="${handle}"` : ""
          }> <span>${text}</span>

      ${icon &&
          `
       <svg
       class="${svgClasses}"
       width="18"
       height="18"
       aria-hidden="true"
       focusable="false"
       data-prefix="fas"
       data-icon="angle-right"
       role="img"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 320 512"
     >
       <path
         fill="currentColor"
         d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
       ></path>
     </svg>`
          }

      
      </a>`,
      }}
    />
  );
}
