import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChanelRow from "./ChanelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChanelRow
        image="https://yt3.ggpht.com/ytc/AAUvwnjeHnMHZ7T341QLHqPhQPfsG6ugvg_SV6z6FkYqGw=s68-c-k-c0x00ffffff-no-rj"
        chanel="CodeWithHarry"
        verified
        subs="1.29M"
        noOfVideos="1268"
        description="Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.
        At Code With Harry, I provide a quick and to the point demo along with resources of anything and everything I teach. Source code and other resources are hosted on my website CodeWithHarry.com. I provide source code(if any) in the description of every video."
      />
      <hr />

      <VideoRow
        title="C Language Tutorials For Beginners"
        views="3.5M views"
        timestamp="9 months ago"
        subs="1.29M"
        chanelImage="https://yt3.ggpht.com/ytc/AAUvwnjeHnMHZ7T341QLHqPhQPfsG6ugvg_SV6z6FkYqGw=s68-c-k-c0x00ffffff-no-rj"
        chanel="CodeWithHarry"
        image="https://i.ytimg.com/vi/ZSPZob_1TOk/sddefault.jpg"
      />
      <VideoRow
        title="HTML Tutorial for Beginners"
        views="432K views"
        timestamp="1 month ago"
        subs="1.29M"
        chanelImage="https://yt3.ggpht.com/ytc/AAUvwnjeHnMHZ7T341QLHqPhQPfsG6ugvg_SV6z6FkYqGw=s68-c-k-c0x00ffffff-no-rj"
        chanel="CodeWithHarry"
        image="https://i.ytimg.com/vi/BsDoLVMnmZs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDV_-yxxGw1ExusPB3oE97HoH7Kow"
      />

      <VideoRow
        title="Basic Structure of Java Program"
        views="285K views"
        timestamp="8 months ago"
        subs="1.29M"
        chanelImage="https://yt3.ggpht.com/ytc/AAUvwnjeHnMHZ7T341QLHqPhQPfsG6ugvg_SV6z6FkYqGw=s68-c-k-c0x00ffffff-no-rj"
        chanel="CodeWithHarry"
        image="https://i.ytimg.com/vi/zIdg7hkqNE0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDj3W2FH0rFPBHvmX8qeOhFJzEMqA"
      />
      <VideoRow
        title="Java Tutorial for Beginners"
        views="1.6M views"
        timestamp="1 year ago"
        subs="1.29M"
        chanelImage="https://yt3.ggpht.com/ytc/AAUvwnge5NyVX7anyIFrIaWVfxpyOfJifDHzMAU5GMmA=s68-c-k-c0x00ffffff-no-rj"
        chanel="Telusko"
        image="https://i.ytimg.com/vi/8cm1x4bC610/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyKVjJ8-lkp389Ridv4HTngca2xA"
      />
    </div>
  );
}

export default SearchPage;
