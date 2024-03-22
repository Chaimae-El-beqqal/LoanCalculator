import React from "react"
import PropTypes from "prop-types"
import { Product } from "src/models/product"

interface ProductsProps {
    prods: Product[]
    getSelected: (id: string) => void
}
export function Products({ prods, getSelected }: ProductsProps) {
    const prodsIcons = prods.map((prod) => (
        <img
            key={prod.id}
            src={prod.image}
            alt={prod.name}
            className="w-20 h-20  basis-1/3"
            onClick={() => getSelected(prod.id)}
        />
    ))

    return <div className="prodsIcons flex justify-center items-center p-5">{prodsIcons}</div>
}

export default Products
