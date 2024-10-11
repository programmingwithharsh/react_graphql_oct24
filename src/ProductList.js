import Product from "./Product";
import { Link } from "react-router-dom";

export default function ProductList(props) {
    console.log(props);
    return <div>
        <h1>Product List Functional Component</h1>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Product Code</th>
                    <th>Release Date</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.products.map((item, index) => <tr key={index}>
                        <td><img width="50" height="50" src={item.imageUrl} /></td>
                        <td><Link to={`/products/${item.productId}`}>{item.productName}</Link></td>
                        <td>{item.productCode}</td>
                        <td>{item.releaseDate}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>{item.starRating}</td>
                    </tr>)
                }
            </tbody>
        </table>
        <Product />
    </div>
}
