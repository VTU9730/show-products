import CardComponent from "./Card";
function Products(props){
    return(
        // container fluid and row are used to make responsive
        <div class="container-fluid">
            <div className="row">
            {/* map function is used to show all the products in a row */}
                {props.products[0]?props.products.map((product)=><CardComponent  product={product}/>):null}
            </div>
        </div>
    )
}
export default Products;