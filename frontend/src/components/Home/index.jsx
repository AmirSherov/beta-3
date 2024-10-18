import "./style.scss";
import NewsData from '../../../DataBase.json';
import img1 from '../../assets/images/logo.jpg'
import img2 from '../../assets/images/photo2.jpg'
const images = {
    // Добавьте другие изображения, если нужно
    "logo.jpg": img1,
    "photo2.jpg": img2
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