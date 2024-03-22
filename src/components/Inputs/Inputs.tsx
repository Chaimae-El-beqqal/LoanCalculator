import React, { useState } from "react"
import LoanInput from "./LoanInput"
import MonthsInput from "./MonthsInput"

interface InputsProps {
    minTenure: number
    maxTenure: number
    minAmount: number
    maxAmount: number
    month: number
    amount: number
    onMonth: (value: number) => void
    onAmount: (value: number) => void
}
export function Inputs({
    minTenure,
    maxTenure,
    minAmount,
    maxAmount,
    amount,
    month,
    onAmount,
    onMonth,
}: InputsProps) {
    const formatLoan = (value: number): string => {
        return value.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
    }

    console.log(month, minTenure)
    return (
        <div className="form flex flex-wrap justify-center  lg:flex-nowrap">
            <div className="flex flex-col mb-4 w-full lg:w-1/2 md:pr-4">
                <LoanInput
                    minAmount={minAmount}
                    maxAmount={maxAmount}
                    amount={amount}
                    onAmount={onAmount}
                />
            </div>
            <div className="flex flex-col mb-4 w-full lg:w-1/2 md:pr-4">
                <MonthsInput
                    month={month}
                    minTenure={minTenure}
                    maxTenure={maxTenure}
                    onMonthChange={onMonth}
                />
            </div>
        </div>
    )
}
