import React, { useContext, useState } from 'react';
import { productsContext } from '../../contexts/productsContext';
import { Button, Input, TextField } from '@mui/material';

const AddProducts = () => {
    const [nameValue, setNameValue] = useState("")
    const [typeValue, setTypeValue] = useState("")
    const [descrValue, setDescrValue] = useState("")
    const [priceValue, setPriceValue] = useState("")
    const [imgValue, setImgValue] = useState("")

    const {addProducts} = useContext(productsContext)

    function handleClick() {
        let newObj = {
            name: nameValue,
            type: typeValue,
            descr: descrValue,
            price: priceValue,
            img: imgValue,
        }
        addProducts(newObj)
        setNameValue("")
        setTypeValue("")
        setDescrValue("")
        setPriceValue("")
        setImgValue("")
    }
    return (
        <div className='d-flex m-3'>
            <TextField id="outlined-basic" label="Outlined" variant="outlined"
            type='text' 
            placeholder="Name" 
            className='w-25' 
            value={nameValue} 
            onChange={(e)=> setNameValue(e.target.value)}/>

            <TextField 
            type='text' 
            placeholder="LastName" 
            className='w-25' 
            value={typeValue} 
            onChange={(e)=> setTypeValue(e.target.value)}/>

            <TextField 
            type='text' 
            placeholder="age" 
            className='w-25' 
            value={descrValue} 
            onChange={(e)=> setDescrValue(e.target.value)}/>

            <TextField
            type='text' 
            placeholder="age" 
            className='w-25' 
            value={priceValue} 
            onChange={(e)=> setPriceValue(e.target.value)}/>

            <TextField 
            type='text' 
            placeholder="age" 
            className='w-25' 
            value={imgValue} 
            onChange={(e)=> setImgValue(e.target.value)}/>

            <Button variant="warning" onClick={handleClick}>Add</Button>
        </div>
    );
};

export default AddProducts;