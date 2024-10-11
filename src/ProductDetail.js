import { useParams } from "react-router-dom"; // useParam Hooks

function ProductDetail() {
    let { id } = useParams(); // Take params from url
    return (<>
        <div>Product Detail Component, Product Id is {id}</div>
        <div></div>
    </>);
}

export default ProductDetail;