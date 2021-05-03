import React from 'react';
import "./ChanelRow.css";
import {Avatar} from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";


function ChanelRow({image, chanel, subs, noOfVideos, verified, description}) {
    return (
        <div className="chanelRow">
            <Avatar className="chanelRow__logo"
            alt={chanel}
            src={image}
            />
            <div className="chanelRow__text">
                <h4>{chanel} {verified && <VerifiedIcon/>}</h4>
                <p>{subs} subscribers . {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChanelRow
