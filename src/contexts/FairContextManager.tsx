import { useState } from 'react'
import FairContext from './FairContext';

interface Props {
    children: JSX.Element
}

// Agrupa todos los elementos del context FairContext y lo exporta con el Provider incorporado, por lo que se usa como un elemento tsx
const FairContextManager = ({children}: Props) => {
    const [products, setProducts] = useState<any>([]);

    const handleAdd = (newProduct: any)=>{
      setProducts([...products, newProduct])
    }

    const handleDelete = (id: any) => {
        const remainingProducts = products.filter((product:any) => parseInt(product.id) !== parseInt(id));
        setProducts(remainingProducts);
    }

    const handleUpdate = (product:any) => {
        const prod = products.map((elem:any) => {
            if(parseInt(elem.id) === parseInt(product.id))
                return product;
            else
                return elem;
        });
        setProducts(prod);
    }

    const getProductById = (id: any):any => {
        const product = products.find((element:any) => parseInt(element.id) === parseInt(id));
        return product;
    }

    return (
        <div>
            <FairContext.Provider value={{handleAdd, handleDelete, handleUpdate, getProductById, products}}>
                {children}
            </FairContext.Provider>
        </div>
    )
}

export default FairContextManager;
