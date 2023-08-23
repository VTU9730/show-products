import { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import axios from 'axios';
import Products from './Products';
function PaginationStyle(){
    // products are array fetched from api
    let [products,setProducts]=useState([])
    // page is a integer and used to slice the intial products array
    const [page,setPage]=useState(0)
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
            .then(res=>setProducts(res.data.products))
    },[])
    let active = page;
    let items = [];
    let pages=Math.floor(products.length/5)
    // pagination buttons are created based on array length and product per page
    for (let number = 1; number <=pages-1; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={()=>setPage(number) }>
            {number}
            </Pagination.Item>,
        );
    }
    // first five products are default
    if(!page){
        products=products.slice((page*5)+1,(page*5)+6);
    }
    // user clicks on pagination buttons products will change and passed tp products component as a prop
    products=products.slice((page*5),(page*5)+6);
    const paginationBasic = (
    <div id="products">
        {/* products component has products as prop */}
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