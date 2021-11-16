import React from 'react'
import './card.css'

function Card({ title, content, url, image }) {
    return (
        <div className="col-md-4 mb-3">
            <div className="card card-news text-center shadow">
                <div className="w-100">
                    <img src={image} alt="" className="card-img-top" style={{backgroundSize:"cover"}}/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{content}</p>
                    <a href={url} className="btn btn-outline-warning mb-2" target='_blank' rel='noreferrer'>Read More &#x3e;</a>
                </div>
            </div>
        </div>
    )
}

export default Card