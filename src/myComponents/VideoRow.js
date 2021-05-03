import React from 'react';
import "./VideoRow.css"

function VideoRow({views, subs, title, timestamp, chanel, image, description}) {
    return (
        <div className="videoRow">
            <img src={image} alt={chanel}/>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                    {chanel} . <span className="videoRow__subs"><span className="videoRow__subsNumber">{subs}</span> Subscribers</span> . {timestamp}
                </p>
                <p  className="videoRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
