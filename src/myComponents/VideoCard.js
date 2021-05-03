import React from "react";
import "./VideoCard.css";
import { Avatar } from "@material-ui/core";

function VideoCard({ image, title, chanel, views, timestamp, chanelImage }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="chanel" />
      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" alt={chanel} src={chanelImage} />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{chanel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
