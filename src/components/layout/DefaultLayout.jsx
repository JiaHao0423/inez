import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

const DefaultLayout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default DefaultLayout