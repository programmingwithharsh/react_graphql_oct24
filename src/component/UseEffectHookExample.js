import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UseEffectHookExample() {
    const [products, setProducts] = useState([]); // default empty value
    /*
        const [show, setShow] = useState(false); // default value is false
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        toggleImage = () => {
            setShow(showImage: !showImage);
        };
    */

    useEffect(() => { // Best place to make API calls
        // to update products, like this.setState in class component
        setProducts([
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                "productId": 3,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2016",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            },
            {
                "productId": 4,
                "productName": "Saw",
                "productCode": "TBX-0022",
                "releaseDate": "May 15, 2016",
                "description": "15-inch steel blade hand saw",
                "price": 11.55,
                "starRating": 3.7,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
            },
            {
                "productId": 5,
                "productName": "Video Game Controller",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2015",
                "description": "Standard two-button video game controller",
                "price": 35.95,
                "starRating": 4.6,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
            }
        ])
    }, [])

    /*

    Class component 
        this.state 
        this.setState({})
     
    Functional Component (useState Hook)
        products is empty array
        setProducts is a method which we use to update data
    */

    console.log(products);
    return (<>
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
                    products.map((item, index) => <tr key={index}>
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
    </>);
}

export default UseEffectHookExample;