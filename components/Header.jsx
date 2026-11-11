import { Link } from "react-router-dom";

export default function(){
    return(
        <header>
            <Link to="/">#ReactRouterPage</Link>
            <Link to="/about">About</Link>
        </header>
    );
}