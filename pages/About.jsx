import Header from "../components/Header";
import Footer from "../components/Footer"; 

export default function About(){
    return(
        <>
        <Header/>
        <main id="main-content" className="about-content">
            <h1>This is the About page</h1>
            <p>This is the additional content for this other page</p>
        </main>
        <Footer/>
        </>
    );
}