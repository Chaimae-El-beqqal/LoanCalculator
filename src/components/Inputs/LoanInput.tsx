import React, { useState, useEffect } from "react"
import CurrencyInput from "react-currency-input-field"

interface LoanInputProps {
    minAmount: number
    maxAmount: number
    amount: number
    onAmount: (value: number) => void
}

const LoanInput: React.FC<LoanInputProps> = ({
    minAmount,
    maxAmount,
    amount,
    onAmount,
}: LoanInputProps) => {
    const formatLoan = (value: number): string => {
        return value.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
    }

    return (
        <>
            <label htmlFor="LoanInput" className="text-gray-700 mb-1 text-xl">
                Loan amount
            </label>

            <input
                type="currency"
                id="LoanInput"
                value={amount}
                onChange={(e) => onAmount(parseFloat(e.target.value))}
                onBlur={(e) => {
                    if (e.target.value !== "")
                        onAmount(Math.min(maxAmount, Math.max(minAmount, parseInt(e.target.value))))
                }}
                placeholder={`${formatLoan(minAmount)}`}
                className=" w-full  rounded-md border-0 py-3 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 font-medium text-lg leading-6"
                required
                min={minAmount}
                max={maxAmount}
            />
        </>
    )
}

export default LoanInput
