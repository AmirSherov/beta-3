import "./style.scss";
import NewsData from '../../../DataBase.json';
import img1 from '../../assets/images/logo.jpg';
import img2 from '../../assets/images/photo2.jpg';
import { context } from "../../../store";
import { useContext } from "react";
import { Link } from "react-router-dom";

const images = {
    // Добавьте другие изображения, если нужно
    "logo.jpg": img1,
    "photo2.jpg": img2
};

function Home(props) {
    const { state } = useContext(context);

    return (
        <>
            <div className="home-wrapper">
                {NewsData.News.map((news, index) => {
                    const Img = images[news.Img] || '';

                    return (
                        <div
                            style={{
                                backgroundColor: state.darkMode ? "black" : "white",
                            }}
                            key={index}
                            className="news-wrapper"
                        >
                            <div style={{ color: state.darkMode ? "white" : "black" }} className="news-main-text">
                                <span>{news.Main}</span> <span><Link to={`/news/${news.Id}`} style={{ textDecoration: "none" }}>More</Link></span>
                            </div>
                            <div className="news-img">
                                {Img && <img src={Img} alt="" />}
                            </div>
                            <div style={{ color: state.darkMode ? "white" : "black" }} className="news-next-text">
                                {news.Next}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Home;
