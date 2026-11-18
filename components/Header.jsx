import { Link } from "react-router-dom";

export default function(){
    return(
        <header>
            <nav aria-label="Main navigation">
                <Link className="HomeButton" to="/">#ReactRouterPage</Link>
                <Link to="/about">About</Link>
                <Link to="/vowels">Vowels</Link>
            </nav>
        </header>
    );
}