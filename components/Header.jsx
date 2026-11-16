import { Link } from "react-router-dom";

export default function(){
    return(
        <header>
            <Link className="HomeButton" to="/">#ReactRouterPage</Link>
            <Link to="/about">About</Link>
            <Link to="/vowels">Vowels</Link>
        </header>
    );
}