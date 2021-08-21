import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProductsList from "../../components/productsList/ProductsList";
import LoginContext from "../../contexts/LoginContext";
import { productsListSelector } from "../../store/products/selectors";
import styles from './Home.module.css';

const Home = () => {
    const location = useLocation();
    const productsList = useSelector(productsListSelector);
    const { isLogin } = useContext(LoginContext);

    useEffect(() => {
      console.log('location', location);
    }, [location])
  
    return (
        <div className="container pt-5">
        {productsList.length > 0 && isLogin ? (
          <>
            <h1 className={styles.titleText}>Lista de productos 'Mi Feria'</h1>
            <ProductsList/>
          </>
          ) : productsList.length > 0 && !isLogin ? (
            <div className={styles.textInfo}>
                <div className="row d-flex justify-content-center pt-5 mt-5">
                   <div className="col-6">
                        
                        <ProductsList/>
                        <div className={styles.textRed}>
                          <small className="text-center pt-5 text-red">*Para acceder a las demás funcionalidades debes iniciar sesión.</small>
                        </div>
                   </div>
                </div>
            </div>
          ) : (
            <div className={styles.textInfo}>
              <div className="row d-flex justify-content-center pt-5 mt-5">
                <div className="col-6">
                      <p className="text-center">La lista de productos está vacía, para agregar más productos debes <b>iniciar sesión</b> e ir la sección <b>'Crear producto'</b>.</p>
                </div>
              </div>
            </div>
           
          )
        }
         
      </div>
    )
}

export default Home;
