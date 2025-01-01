// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Articles.css'
import { assets } from '../../assets/assets'
import DataArticle from '../../data/DataArticle'
import { useParams } from 'react-router-dom';

const Articles = () => {
    const { slug } = useParams();

    const article = DataArticle.find(article => article.title.toLowerCase() === slug.toLowerCase());

    if (!article) {
      return <div>Article not found.</div>;
    }

  return (
    <div className="articles" id="articles">
        <div className="content-article" key={article.id}>
            <div className="content-article-header">
                <img src={assets[article.image]} alt={article.image} />
            </div>
            <div className="content-article-info">
                <div className="time">
                    <p>Time: {article.date}</p>
                    <p>Created by: {article.author}</p>
                </div>
                <div className="share">
                    <p>Share</p>
                    <div className="icons-share">
                        <img src={assets.whatsappIcon} alt="Whatsapp Icon" />
                        <img src={assets.instagramIcon} alt="Instagram Icon" />
                        <img src={assets.xIcon} alt="Twitter Icon" />
                    </div>
                </div>
            </div>
            <div className="content-article-paragraph">
                <h1>{article.title.replace(/-/g, ' ')}</h1>
                {article.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Articles
