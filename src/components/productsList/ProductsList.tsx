import { useContext } from 'react'
import Product from '../product/Product';
// import ProductsContext from "../../contexts/FairContext";
import styles from './ProductsList.module.css';
import LoginContext from '../../contexts/LoginContext';
import { useSelector } from 'react-redux';
import { productsListSelector } from '../../store/products/selectors';

const ProductsList = () => {
    // const { products } = useContext(ProductsContext)
    const { isLogin } = useContext(LoginContext)
    const productsList = useSelector(productsListSelector)
    return (
        productsList && productsList.length && isLogin ? (
            <table className="table">
                <thead>
                    <tr className={styles.headerTable}>
                        <th scope="col">Identificación de producto</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Stock</th>
                        {isLogin ? (<th scope="col">Eliminar producto</th>) : null}
                        {isLogin ? (<th scope="col">Editar producto</th>) : null}
                    </tr>
                </thead>
                <tbody>
                {
                    productsList.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            stock={product.stock}
                        />
                    ))
                }
                </tbody>
            </table>) : (
                <div className={styles.textInfo}>
                    <div className="row d-flex justify-content-center pt-5 mt-5">
                    <div className="col-6">
                            <p className="text-center">La lista de productos está vacía, para agregar más productos debes ir la sección <b>'Crear producto'</b>.</p>
                    </div>
                    </div>
                </div>
            )
    )
}

export default ProductsList;
