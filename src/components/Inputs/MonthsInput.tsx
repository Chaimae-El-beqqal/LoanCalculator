import React, { useState } from "react"

interface MonthProps {
    minTenure: number
    maxTenure: number
    month: number
    onMonthChange: (value: number) => void
}
function MonthsInput({ minTenure, maxTenure, month, onMonthChange }: MonthProps) {
    // const [months, setMonths] = useState(minTenure)

    const handleKeyDown = (event: { key: string }) => {
        if (event.key === "ArrowUp") {
            if (month + 1 >= maxTenure) onMonthChange(month + 1)
        } else if (event.key === "ArrowDown") {
            if (month - 1 >= minTenure) onMonthChange(month - 1)
        }
    }
    console.log(month)
    return (
        <>
            <label htmlFor="numberOfMonths" className="text-gray-700 mb-1 text-xl">
                Number of months
            </label>
            <div className="relative inline-flex">
                <input
                    type="number"
                    id="numberOfMonths"
                    value={month}
                    onChange={(e) => onMonthChange(parseInt(e.target.value))}
                    onKeyDown={handleKeyDown}
                    className=" w-full  rounded-md border-0 py-3 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  text-lg leading-7"
                    min={minTenure}
                    max={maxTenure}
                    required
                    step={1}
                    onBlur={(e) => {
                        if (e.target.value !== "")
                            onMonthChange(
                                Math.min(maxTenure, Math.max(minTenure, parseInt(e.target.value)))
                            )
                    }}
                    placeholder={`${minTenure}`}
                />
            </div>
        </>
    )
}

export default MonthsInput
