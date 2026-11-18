import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VowelDetail(){

    const [vowel, setVowel] = useState(null);
    const param = useParams();

    useEffect(()=>{
        fetch(`/api/vowels/${param.id}`)
        .then(res=>res.json())
        .then(data=>setVowel(data.vowels))
    },[param.id]);

    return(
        <div>
            {vowel ? (
                <div key={vowel.id}>
                    <h2>{vowel.name}</h2>
                    <img src={vowel.imageUrl} alt={vowel.name} />
                    <p>{vowel.description}</p>
            </div> 
            ) : <h2>Loading...</h2>}
        </div>
    );
}