import './style.scss'
import { useState, useEffect } from 'react';
import DataBase from '../../../DataBase.json';
import { useParams } from 'react-router';
import img1 from '../../assets/images/logo.jpg';
import img2 from '../../assets/images/photo2.jpg';
import { Link } from 'react-router-dom';
function NewsDetails(props) {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {

        const newsItem = DataBase.News.find(news => news.Id === parseInt(id));

        if (newsItem) {
            setData(newsItem);
        }
    }, [id]);


    if (!data) {
        return <div>Загрузка...</div>;
    }
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;
    const images = {
        "logo.jpg": img1,
        "photo2.jpg": img2
    };
    const Img = images[data.Img] || '';
    return (
        <>
            <div className="NewsDetailsMainContainer">
                <Link className='back-link' to={"/"}> ←
                Back</Link>
                <div className="NewsDetailsContainer">
                    <div className="NewsDetailsMainText">
                        <span>{data.Main}</span>
                    </div>
                    <div className="NewsDetailsImg">
                        <img src={Img} alt="" />
                    </div>
                    <div className="NewsDetailsNextText">
                        <span>{data.Next}</span>
                    </div>
                    <div className="NewsDetailsDate">
                        <span>{formattedDate}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewsDetails