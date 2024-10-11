import { useNavigate } from "react-router-dom"; // useNavigate Hooks

function Button(props) { // Reusable component
    const navigate = useNavigate();

    const gotToProducts = () => {
        navigate(props.url);
    }

    return (<>
        <button className="btn btn-primary" onClick={gotToProducts} >Redirect to Products</button>
    </>
    );
}

export default Button;