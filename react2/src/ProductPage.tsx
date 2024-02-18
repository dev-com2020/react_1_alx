import { useParams } from "react-router-dom"
import { products } from "./products"

type Params = {
    id: string
}

export function ProductPage() {
    const params = useParams<Params>()
    const id = params.id === undefined ? undefined: parseInt(params.id)
    const product = products.find(
        (product) => product.id === id
    )
    return (
        <div>
            {product === undefined ? (<h1>Nieznany produkt</h1>):(<>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{new Intl.NumberFormat('pl-PL', {
                currency: 'PLN',
                style: 'currency',}).format(product.price)}
            </p>
            </>
            )}
        </div>
    )
}