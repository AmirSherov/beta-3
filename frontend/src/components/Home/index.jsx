import "./style.scss";
import AIpart from './AIpart/index.jsx'
import Logos from './Logos/index.jsx'
import Acsions from './Acsions/index.jsx'
function Home(props) {
    return (
        <>
            <AIpart />
            <Logos />
            <div className="Acsions">
                <div className="text">Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.</div>
                <Acsions />
            </div>
        </>
    )
}
export default Home