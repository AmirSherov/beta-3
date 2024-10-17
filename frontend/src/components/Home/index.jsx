import "./style.scss";
import NewsData from '../../../DataBase.json';
import img1 from '../../assets/images/logo.jpg'
const images = {
    "logo.jpg": img1,
    // Добавьте другие изображения, если нужно
};
function Home(props) {
    return (
        <>
            <div className="home-wrapper">
                {NewsData.News.map((news, index) => {
                    const Img = images[news.Img];
                    return (
                        <div key={index + 1} className="news-wrapper">
                            <div className="news-main-text">
                                {news.Main}
                            </div>
                            <div className="news-img">
                                <img src={Img}  alt="" />
                            </div>
                            <div className="news-next-text">
                                {news.Next}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}
export default Home;