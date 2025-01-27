import React from "react";
import Welcome from "./Welcome";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import Hello from "./component/Hello";
import Title from "./Title";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import NotFound from "./NotFound";
import ProductDetail from "./ProductDetail";
import UseEffectHookExample from "./component/UseEffectHookExample";
import UserList from "./UserList";
import UserList2 from "./UsersList2";
import Books from "./Books";

export default class Main extends React.Component {
    constructor(props) { // Class component lifecycle
        super(props);
        this.state = {
            products: [] // empty products
        }
    }

    componentDidMount() { // Lifecycle automatically calls, Best place to make any API call
        this.setState({ // to update state, whenever state update component rerender
            products: getDataFromDb()
        })
    }

    render() { // Class component lifecycle, render view
        return <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav />}>
                        <Route index element={<Welcome message="I am learning React" />}></Route>
                        <Route path="/title" element={<Title />}></Route>
                        <Route path="/products" element={<ProductList products={this.state.products} />}></Route>
                        <Route path="/products/:id" element={<ProductDetail />}></Route>
                        <Route path="/addproduct" element={<AddProduct />}></Route>
                        <Route path="/hello" element={<Hello />}></Route>
                        <Route path="/hooks" element={<UseEffectHookExample />}></Route>
                        <Route path="/users" element={<UserList />}></Route>
                        <Route path="/users2" element={<UserList2 />}></Route>
                        <Route path="/books" element={<Books />}></Route>
                    </Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    }
}

function getDataFromDb() {
    return [
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
    ];
}