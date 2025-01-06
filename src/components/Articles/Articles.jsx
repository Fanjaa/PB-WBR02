// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Articles.css'
import { assets } from '../../assets/assets'
import DataArticle from '../../data/DataArticle'
import { useParams } from 'react-router-dom';
import ComingSoonFeatures from '../../components/ComingSoonFeatures'

const Articles = () => {
    const { slug } = useParams();

    const article = DataArticle.find(article => article.title.toLowerCase() === slug.toLowerCase());

    if (!article) {
      return <div className='not-found'><h1>Article not found.</h1></div>;
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
                        <a href={`https://wa.me/?text="${article.title.toUpperCase().replace(/-/g, ' ')}."%0A%0ACheck out this awesome story! https://pbwbr02.netlify.app/article/${article.title}`} target='_blank' rel='noopener noreferrer'><img src={assets.whatsappIcon} alt="Whatsapp Icon" /></a>
                        <a href='#' onClick={(e) => {e.preventDefault(); ComingSoonFeatures('share to instagram will be released soon, you can share to whatsapp or x')}}><img src={assets.instagramIcon} alt="Instagram Icon" /></a>
                        <a href={`https://x.com/intent/tweet?url=https://pbwbr02.netlify.app/article/${article.title}&text="${article.title.toUpperCase().replace(/-/g, ' ')}."%0A%0ACheck out this story!`} target='_blank' rel='noopener noreferrer'><img src={assets.xIcon} alt="Twitter Icon" /></a>
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
