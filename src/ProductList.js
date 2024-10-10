import Product from "./Product";
export default function ProductList(props) {
    console.log(props);
    return <div>
        <h1>Product List Functional Component</h1>
        {
            props.products.map((item, index) => <li key={index}>{item.productName}</li>)
        }
        <Product />
    </div>
}