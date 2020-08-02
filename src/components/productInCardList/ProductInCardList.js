import React, {useState} from 'react'
import style from "./ProductInCardList.module.css"
import Pagination from '@material-ui/lab/Pagination';
import DeleteIcon from '@material-ui/icons/Delete';


//displaying a product info in the chart
const ProductInCardList = (props) => {
    const {id, image, total} = props.product;
    const [numberP, setnumberP] = useState(1);
    const handleChange = (event, numberP) => {
        setnumberP(numberP);
        props.handleCount(id, numberP)

      };

    return (
        <div className = {style.listCont}>
            <img src={image} alt=""/>
            <Pagination count={10} color="primary" className = {style.pagination} value = {numberP} onChange = {handleChange}/>
            <DeleteIcon  className = {style.deleteIcon} onClick = {()=>props.deleteProductFromCart(id)}/>
            <div className = {style.subTotalContainer}>
                <h2>subtotal</h2>
                <h3>{total}$</h3>
            </div>

        </div>
    )
}

export default ProductInCardList;
