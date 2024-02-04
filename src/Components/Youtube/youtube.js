import { useEffect, useState } from 'react'
export default function Youtube() {
    const [youtubevideo, setyoutubevideo] = useState([]);
    useEffect(() => {
        fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=3&order=date&key=AIzaSyA7I4F0UQKkbOqqLI23olQ-XOa77I5-oKo')
            .then((response) => response.json())
            .then((data) => {
                setyoutubevideo(data.items);
            });
    }, []);









    console.log(youtubevideo);


    return ( <
        div className = "allVideosWrapper " >
        <
        div className = "container " >
        <
        div className = "row h-100 align-items-center justify-content-center text-center menu" >
        <
        div className = "col-12 menu1" >
        <
        div className = "title-wraper bold video-title-wrapper " >
        <

        /
        div > < /
        div > {
            youtubevideo.map((singleVideo, i) => {
                let vidId = singleVideo.id.videoId;
                let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                let videoWrapper = ( <
                    div key = { i }
                    className = "col-sm-12 col-md-4 menu" >
                    <
                    div className = "singleVideoWrapper menu1 " >
                    <
                    div className = "videoThumbnail " >
                    <
                    a href = { vidLink }
                    target = "_blank" >
                    <
                    img src = { singleVideo.snippet.thumbnails.high.url }
                    /> < /
                    a > <
                    /div> <
                    div className = "videoInfoWrapper " >
                    <
                    div className = "videoTitle" >
                    <
                    a href = { vidLink }
                    target = "_blank" > { singleVideo.snippet.title } <
                    /a> < /
                    div > <
                    div className = "videoDesc" > { singleVideo.snippet.description } <
                    /div> < /
                    div > <
                    /div> < /
                    div >
                );
                return videoWrapper;
            })
        }

        <
        /div> < /
        div > <
        /div>
    );
}