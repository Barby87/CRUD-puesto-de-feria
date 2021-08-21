import { useContext } from "react";
// import FormProducts from "../../components/formProducts/FormProducts";
// import Product from "../../components/product/Product";
import ProductsList from "../../components/productsList/ProductsList";
import ProductsContext from "../../contexts/FairContext";
import styles from './MyFair.module.css'

const MyFair = () => {

  const { products } = useContext(ProductsContext)
    return (
        <div className="container pt-5">
          {products.length > 0 ? (
            <h1 className={styles.titleText}>Lista de productos 'Mi Feria'</h1>
            ) : (
              <div className={styles.textInfo}>
              <div className="row d-flex justify-content-center pt-5 mt-5">
                 <div className="col-6">
                 <p className="text-center">La lista de productos está vacía, para agregar más productos debes dirigirte a la sección <b>'Crear producto'</b>.</p>
                 </div>
              </div>
          </div>
              
            )
          }
            <div className="row d-flex align-content-center justify-content-center py-5">
              <div className="col-8">
                {
                  products.length > 0 ? (
                    <ProductsList/>
                  ) : null
                }           
              </div>
            </div>
        </div>
    )
}

export default MyFair;
