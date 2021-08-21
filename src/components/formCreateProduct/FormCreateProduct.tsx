import React from 'react';
import { useDispatch } from 'react-redux';
import useFormProducts from "../../hooks/useFormProducts";
import styles from "./FormCreateProduct.module.css";
import { useHistory } from 'react-router-dom';
import { createProductAction } from '../../store/products/actions';

const FormCreateProduct = () => {
    const history = useHistory()
    const { formValues, handleChange } = useFormProducts({
        productName: '',
        productPrice: '',
        productStock: ''
    });

    const dispatch = useDispatch()

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if(formValues.productName !== '' && formValues.productPrice !== '' && formValues.productStock !== '') {
            dispatch(createProductAction({
                id: new Date().getTime(),
                name: formValues.productName, 
                price: formValues.productPrice, 
                stock: formValues.productStock
            }))
        } else {
            return;
        }
        history.push('/list');
    }

    return (
        <div>
            <h3 className={styles.titleForm}>Agregue sus productos aquí</h3>
            <form onSubmit={(e:any) => handleSubmit(e)}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="productName">Nombre de producto:</label>
                    <input 
                        type="text" 
                        placeholder="Nombre de producto"
                        className="form-control" 
                        id="productName" 
                        name="productName" 
                        value={formValues.productName} 
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="productPrice">Precio unitario:</label>
                    <input 
                        type="number" 
                        placeholder="Precio"
                        className="form-control" 
                        id="productPrice" 
                        name="productPrice" 
                        value={formValues.productPrice} 
                        onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="productPrice">Cantidad:</label>
                    <input 
                        type="number" 
                        placeholder="Cantidad"
                        className="form-control" 
                        id="productPrice" 
                        name="productStock" 
                        value={formValues.productStock} 
                        onChange={handleChange}/>
                </div>

                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-warning">Agregar producto</button>
                </div>
               
            </form>
        </div>
    )
}

export default FormCreateProduct;
