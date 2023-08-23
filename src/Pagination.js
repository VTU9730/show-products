import { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import axios from 'axios';
import Products from './Products';
function PaginationStyle(){
    let [products,setProducts]=useState([])
    const [page,setPage]=useState(0)
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
            .then(res=>setProducts(res.data.products))
    },[])
    let active = page;
    let items = [];
    let pages=Math.floor(products.length/5)
    for (let number = 1; number <=pages-1; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={()=>setPage(number) }>
            {number}
            </Pagination.Item>,
        );
    }
    if(!page){
        products=products.slice((page*5)+1,(page*5)+6);
    }
    products=products.slice((page*5),(page*5)+6);
    const paginationBasic = (
    <div id="products">
        <div>
            <Products products={products}/>
        </div>
        <div id="pagination-buttons">
            <Pagination>{items}</Pagination>
        </div>
    </div>
    );
    return paginationBasic
}
export default PaginationStyle;