import Header from "../components/Header";
import Footer from "../components/Footer"; 

export default function Home(){
    return(
        <>
        <Header/>
        <main id="main-content" className="home-content">
            <h1>This is the Home page</h1>
            <p>This is the additional content for this page</p>
        </main>
        <Footer/>
        </>
    );
}