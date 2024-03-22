import React, { useState, useEffect } from "react"
import { Products } from "./Products"
import { Inputs } from "./Inputs/Inputs"
import { Product } from "src/models/product"
import { MonthlyAmount } from "./MonthlyAmount"
import { Button } from "./Button"
export function LoanCard() {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    //======== products array ==============
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        fetch("./products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error))
    }, [])

    // get needed infos from selected product =================================================================
    const [selectedProduct, setSelectedProduct] = useState("")

    const [selectedProductDetails, setSelectedProductDetails] = useState({
        minAmount: 0,
        maxAmount: 0,
        minTenure: 0,
        maxTenure: 0,
        interest: 0,
    })
    const [amount, setAmount] = useState(0)
    const [month, setMonth] = useState(0)

    //----------- selected product minAmount, minTenure ...

    useEffect(() => {
        if (selectedProduct !== "") {
            // Find the selected product details from products array
            const product = products.find((prod: Product) => prod.id === selectedProduct)
            if (product) {
                setSelectedProductDetails({
                    minAmount: parseFloat(product?.min_amount),
                    maxAmount: parseFloat(product.max_amount),
                    minTenure: parseInt(product.min_tenure),
                    maxTenure: parseInt(product.max_tenure),
                    interest: parseFloat(product.interest),
                })
                setAmount(parseFloat(product?.min_amount))
                setMonth(parseInt(product?.min_tenure))
            }
        }
    }, [selectedProduct, products])
    //========= Loan details ===============
    //------- TOTAL AMOUNT
    const [total, setTotal] = useState(0)
    const [monthlyAmount, setMonthlyAmount] = useState(0)
    useEffect(() => {
        setTotal(amount + amount * selectedProductDetails.interest)
    }, [amount])

    //------- MONTHLY AMOUNT
    useEffect(() => {
        setMonthlyAmount(total / month)
    }, [total, month])

    //------- DEADLINE
    const today = new Date()

    const [target, setTarget] = useState({ month: "", year: 0 })
    useEffect(() => {
        const today = new Date()
        const newMonth = today.getMonth() + 1 + month
        const newYear = Math.floor(newMonth / 12) + today.getFullYear()
        const monthName = months[(newMonth - 1) % 12]
        setTarget({ month: monthName, year: newYear })
    }, [month])

    return (
        <div className="pt-6 px-10 pb-12  lg:w-2/6  lg:mx-auto w-full mb-10  bg-white rounded-xl shadow-lg flex-col justify-center items-center">
            <Products prods={products} getSelected={setSelectedProduct} />
            <Inputs
                minAmount={selectedProductDetails.minAmount}
                maxAmount={selectedProductDetails.maxAmount}
                minTenure={selectedProductDetails.minTenure}
                maxTenure={selectedProductDetails.maxTenure}
                onMonth={setMonth}
                onAmount={setAmount}
                month={month}
                amount={amount}
            />
            <MonthlyAmount
                month={month}
                amount={amount}
                target={target}
                monthly={monthlyAmount}
                total={total}
            />
            <Button />
        </div>
    )
}
