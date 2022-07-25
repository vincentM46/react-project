import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Random from './components/Random';
import SignUpPage from './components/SignUpPage';
import ErrorPage from './components/ErrorPage';



//Navbar
//navLinks
function Container() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<AboutUs/>}/>
                <Route path="/Random" element={<Random/>}/>
                <Route path="/SignUpPage" element={<SignUpPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </div>
    )
}

export default Container;