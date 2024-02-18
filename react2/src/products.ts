export type Product = {
    id: number,
    name: string,
    description: string,
    price: number,
}

export const products: Product[] = [
    {
        description: '',
        id: 1,
        name: 'React Router',
        price: 80
    },
    {
        description: '',
        id: 2,
        name: 'React Redux',
        price: 180
    },
    {
        description: '',
        id: 3,
        name: 'React CSS',
        price: 280
    },
]