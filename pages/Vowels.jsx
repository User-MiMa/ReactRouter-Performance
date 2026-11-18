import Header from "../components/Header";
import Footer from "../components/Footer"; 
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
                <img src={vowel.imageUrl}/>
                <p>{vowel.description}</p>
            </Link>
        </div>
    ))

    return(
        <>
        <Header/>
        <div className="vowels-content">
                    <h1>Vowels page</h1>
                    {vowels}
                </div>
        <Footer/>
        </>
    );
}