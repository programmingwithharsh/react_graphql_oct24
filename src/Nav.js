import { Outlet, Link } from "react-router-dom";

function Nav() {
    return (<>
        <nav>
            <Link to="/">Home</Link>&nbsp;|&nbsp;
            <Link to="/title">Title</Link>&nbsp;|&nbsp;
            <Link to="/products">Products</Link>&nbsp;|&nbsp;
            <Link to="/addproduct">Add Product</Link>&nbsp;|&nbsp;
            <Link to="/hello">Hello</Link>
        </nav>
        <div>
            <Outlet />
        </div>
    </>
    );
}

export default Nav;