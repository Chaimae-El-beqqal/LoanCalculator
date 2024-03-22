/* eslint-disable prettier/prettier */
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { LoanCard } from "./components/LoanCard"

const App = () => (
    <div className="wrapper w-full h-full flex-col justify-center items-center">
        <h2 className="text-center text-2xl p-3 pt-20 txt">
            Let&apos;s plan your <span className="font-bold txt">loan.</span>
        </h2>
        <LoanCard />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
