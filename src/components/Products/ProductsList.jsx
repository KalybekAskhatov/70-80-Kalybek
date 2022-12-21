import { Box, Grid } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../contexts/productsContext';

const ProductsList = () => {
    const {products, getProducts} = useContext(productsContext)
    useEffect(()=>{
        getProducts()
    }, [])
    return (
        <Grid item md={9}>
            <Box sx={{display: "flex"}}>
                {products.map((item)=>(
                    <ul sx={{display: "flex"}}>
                        <div>{item.name}</div>
                        <div>{item.type}</div>
                        <div>{item.descr}</div>
                        <div>{item.price}</div>
                        <div>{item.img}</div>
                    </ul>
                ))}
            </Box>
        </Grid>
    );
};

export default ProductsList;