import { useState, useEffect, useRef } from "react"

const CountdownTimer = () => {
  const initialTime = 1 * 3600 + 34 * 60 + 60
  const [timeLeft, setTimeLeft] = useState(initialTime)
  const timerRef = useRef()

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(timerRef.current)
    }
  }, [timeLeft])
  const currentHours = Math.floor(timeLeft / 3600)
  const currentMinutes = Math.floor((timeLeft % 3600) / 60)
  const currentSeconds = timeLeft % 60

  const progressHours = ((currentHours / 24) * 283).toFixed(0)
  const progressMinutes = ((currentMinutes / 60) * 283).toFixed(0)
  const progressSeconds = ((currentSeconds / 60) * 283).toFixed(0)

  const colors = {
    hours: "#99ccff",
    minutes: "#bbffbb",
    seconds: "#ff9999",
  }

  return (
    <div className="flex items-center">
      {timeLeft === 0 ? (
        <h3 className="text-[#27bab2] text-4xl leading-tight font-semibold">
          Our limited offer has ended!
        </h3>
      ) : (
        <>
          {/* Hours Circle */}
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45"
                className="stroke-[#60686f]"
                strokeWidth="14"
                fill="none"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45"
                stroke={colors.hours}
                strokeWidth="14"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset={283 - progressHours}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="uppercase text-[8px] leading-tight text-[#27bab2]">
                Hours
              </div>
              <div className="text-[25px] leading-tight font-bold text-[#27bab2]">
                {currentHours}
              </div>
            </div>
          </div>

          {/* Minutes Circle */}
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45"
                className="stroke-[#60686f]"
                strokeWidth="14"
                fill="none"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45"
                stroke={colors.minutes}
                strokeWidth="14"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset={283 - progressMinutes}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="uppercase text-[8px] leading-tight text-[#27bab2]">
                Minutes
              </div>
              <div className="text-[25px] leading-tight font-bold text-[#27bab2]">
                {currentMinutes}
              </div>
            </div>
          </div>

          {/* Seconds Circle */}
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45"
                className="stroke-[#60686f]"
                strokeWidth="14"
                fill="none"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45"
                stroke={colors.seconds}
                strokeWidth="14"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset={283 - progressSeconds}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="uppercase text-[8px] leading-tight text-[#27bab2]">
                Seconds
              </div>
              <div className="text-[25px] leading-tight font-bold text-[#27bab2]">
                {currentSeconds}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CountdownTimer
