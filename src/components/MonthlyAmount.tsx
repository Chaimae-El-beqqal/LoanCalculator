import React, { useState, useEffect } from "react"

interface MonthlyAmountProps {
    monthly: number
    amount: number
    month: number
    target: {
        month: string
        year: number
    }
    total: number
}
export function MonthlyAmount({ monthly, amount, month, target, total }: MonthlyAmountProps) {
    const formatLoan = (value: number): string => {
        return value.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
    }
    let content = isNaN(monthly) ? 0 : formatLoan(monthly)
    console.log(target.year)
    return (
        <div className="flex-col monthly-div   light-border">
            <div className="monthly flex justify-between p-4">
                <h5 className="text-2xl	">Monthly amount</h5>
                <h5 className="monthly-color font-medium text-3xl	">{content}</h5>
            </div>
            <div className="detail flex justify-center align-middle p-4">
                <p className="text-center">
                    You&apos;re planning <span className="font-semibold">{month}</span> monthly
                    deposits to reach your&nbsp;
                    <span className="font-semibold">{formatLoan(amount)}</span> goal by{" "}
                    <span className="font-semibold">{target.month}</span>&nbsp;
                    <span className="font-semibold">{target.year}</span>. The total amount loaned
                    will be
                    <span className="font-semibold">&nbsp;{formatLoan(total)}</span>
                </p>
            </div>
        </div>
    )
}
