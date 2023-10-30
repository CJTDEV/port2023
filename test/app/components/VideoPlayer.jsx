import React, { useEffect, useRef } from 'react';

function VideoPlayer({ videoSource, isPlaying, togglePlayPause }) {
    const videoRef = useRef(null);

    // useEffect(() => {
    //     console.log("child")
    //     if (isPlaying) {
    //         videoRef.current.play()

    //     } else {

    //         videoRef.current.pause()
    //     }
    // }, [isPlaying])

    return (
        <div>
            <video muted autoplay loop ref={videoRef}>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;
