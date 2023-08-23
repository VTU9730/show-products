import CardComponent from "./Card";
function Products(props){
    return(
        <div class="container-fluid">
            <div className="row">
                {props.products[0]?props.products.map((product)=><CardComponent  product={product}/>):null}
            </div>
        </div>
    )
}
export default Products;