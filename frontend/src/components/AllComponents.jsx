import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from "./Footer";
import Home from "./Home/index.jsx"
import NewsDetails from './NewsDetails/index.jsx';
function AllComponents(props) {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />}>
                <Route path="/" element={<Footer />}/>
                <Route path="/news/:id" element={<NewsDetails />}/>
                <Route index element={<Home />}/>
            </Route>
        </Routes>
    )
}

export default AllComponents;