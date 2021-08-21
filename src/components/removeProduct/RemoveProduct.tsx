import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteProductAction } from "../../store/products/actions";
import { productsListSelector } from "../../store/products/selectors";

const RemoveProduct = () => {
    const { id } = useParams<any>();
    const [ name, setName ] = useState<any>('');
    const [ price, setPrice ] = useState<any>(0);
    const history = useHistory();
    
    const productsList = useSelector(productsListSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        // const product = dispatch(readProductAction(id))
        const product = productsList.find((product:any) => parseInt(product.id) === parseInt(id));
        console.log('product', product)
        // debugger
        setName(product?.name);
        setPrice(product?.price);
    }, [productsList, name, price, id]);

    const handleDelete = (id: any) => {
        dispatch(deleteProductAction(id));
        history.push('/list');
    }

    return (
            name&&price&& <div>
                        <h4 className="text-center mt-5">¿Estás seguro que deseas borrar el siguiente producto?</h4>
                        <div className="row d-flex align-content-center justify-content-center pt-5 pb-4 mx-auto">
                            <div className="col-3">
                                <div><b>id:</b> {id}</div>
                                <div><b>nombre:</b> {name}</div>
                                <div><b>Precio:</b> {price}</div>
                               <div className="d-grid gap-2 mx-auto mt-3">
                                    <button className="btn btn-danger" onClick={() => handleDelete(id)}>Borrar producto</button>
                               </div>
                            </div>
                        </div>
                    </div>        
    )
}

export default RemoveProduct;
