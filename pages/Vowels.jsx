import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Vowels(){

    const [apiContent,setApiContent] = useState([]);

    useEffect(()=>{
        fetch('/api/vowels')
        .then(res=>res.json())
        .then(data=>setApiContent(data.vowels))
    },[]);

    const vowels = apiContent.map((vowel)=>(
        <div key={vowel.id}>
            <Link to={`/vowels/${vowel.id}`}>
                <h2>{vowel.name}</h2>
                <img src={vowel.imageUrl} alt={vowel.name} />
            </Link>
        </div>
    ))

    return(
        <main id="main-content" className="vowels-content">
            <h1>Vowels page</h1>
            {vowels}
        </main>
    );
}