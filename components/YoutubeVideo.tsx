import React from 'react';

const YoutubeVideo = () => {
    const allVideos = [
        <iframe
            key="1"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gLASX-OyuWc?si=xHoHF3IyQkyQ1LLR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        />,
        <iframe
            key="2"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NscBi19MZjc?si=7nk83PCOvyDIJnBm"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        />,
        <iframe
            key="3"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wlINxFXQO0s?si=79T2ba9BshR-TZlz"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        />,
        <iframe
            key="4"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/b3yVhYlZV2I?si=Hz_Xo-MuaiKpIHVM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        />,
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 w-[100%] mx-auto items-center gap-[3rem] mt-[4rem] text-white' >
            {allVideos.map((video, index) => (
                <div data-aos="fade-left" key={index}>
                    {video}
                </div>
            ))}
        </div>
    );
};

export default YoutubeVideo;
