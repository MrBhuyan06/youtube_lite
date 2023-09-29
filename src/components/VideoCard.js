import React, { useEffect, useState } from "react";
import numeral from "numeral";
import request from "../api.axios.js";
import { AiFillEye } from "react-icons/ai";
import moment from "moment/moment.js";

const VideoCard = ({ info }) => {
  // console.log(info);
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishAt,
      thumbnails: { medium },
    },
  } = info;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [icon, setChannelIcon] = useState(null);

  const _videoId = id?.videoId || id;

  //get particulat video details
  useEffect(() => {
    getParticularVideo();
  }, [_videoId]);

  //get The channelIcon
  useEffect(() => {
    getParticularChannel();
  }, [channelId]);

  async function getParticularVideo() {
    const {
      data: { items },
    } = await request("/videos", {
      params: {
        part: "contentDetails,statistics",
        id: _videoId,
      },
    });
    console.log();
    setViews(items[0]?.statistics?.viewCount);
    setDuration(items[0]?.contentDetails?.duration);
  }

  async function getParticularChannel() {
    const {
      data: { items },
    } = await request("/channels", {
      params: {
        part: "snippet",
        id: channelId,
      },
    });
    setChannelIcon(items[0]?.snippet?.thumbnails?.medium);
  }

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <div className="w-[250px] p-2 hover:border-2 duration-100 transition-all ease-in">
      <div className="relative ">
        <img className="w-full rounded-md" src={medium.url} alt="" />
        <span className="absolute bottom-1 rounded-md right-1 text-black bg-lighttextGray px-2 py-1">
          {_duration}
        </span>
      </div>
      <div className="font-semibold text-sm">{title}</div>
      <div className="flex gap-2">
        <span className=" flex items-center gap-2 text-sm text-lighttextGray">
          <AiFillEye />
          {numeral(views).format("0.a")}Views
        </span>
        <span>{moment(publishAt).fromNow()}</span>
      </div>
      <div className="flex items-center gap-2">
        <img className="w-10 rounded-full  " src={icon?.url} alt="" />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;
