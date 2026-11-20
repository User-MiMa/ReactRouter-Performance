import { NavLink } from "react-router-dom";

export default function(){
    return(
        <header>
            <nav aria-label="Main navigation">
                <NavLink className="HomeButton" to="/" end>#ReactRouterPage</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/vowels">Vowels</NavLink>
            </nav>
        </header>
    );
}