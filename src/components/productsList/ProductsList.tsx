import { useContext } from 'react'
import Product from '../product/Product';
import styles from './ProductsList.module.css';
import LoginContext from '../../contexts/LoginContext';
import { useSelector } from 'react-redux';
import { productsListSelector } from '../../store/products/selectors';

const ProductsList = () => {
    const { isLogin } = useContext(LoginContext)
    const productsList = useSelector(productsListSelector)
    return (
        // productsList && productsList.length && isLogin ? (
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
            </table>
    )
}

export default ProductsList;
