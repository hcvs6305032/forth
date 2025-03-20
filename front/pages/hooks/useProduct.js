import { useState, useEffect } from "react";
import axios from 'axios';
const port ="http://localhost:5000/api/product";

export default function usePro(){
    const [produs, setProdus] =useState([]);
    

    useEffect(() =>{
        const fetchdata= async() =>{
            const response =await axios.get(port);
            setProdus(response.data);
        } 
        fetchdata();
    },[]);

    return {produs};

}