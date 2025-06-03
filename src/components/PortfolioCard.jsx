import { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";

const PortfolioCard = ({ portfolioVideo }) => {
    const { title, video, poster } = portfolioVideo || {};
    const videoRef = useRef(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    function handlePlayVideo() {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }

    function handlePauseVideo() {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }
    function handleCardClick() {
        setIsLightboxOpen(true);
    }

    return (
        <>
            <div
                className="relative h-full border rounded-[32px] overflow-hidden cursor-pointer"
                onMouseEnter={handlePlayVideo}
                onMouseLeave={handlePauseVideo}
                onClick={handleCardClick}
            >
                <div className="absolute inset-0 z-[1] w-full h-full rounded-[32px] bg-white/20 backdrop-blur-[20px] transition duration-[250ms] [transform-style:preserve-3d] [transform-origin:top_left] overflow-hidden">
                    <div className="h-full text-black font-semibold text-lg">
                        <video
                            src={`${import.meta.env.VITE_APP_API_URL}/uploads/videos/${video}`}
                            className="w-full h-full object-cover"
                            muted
                            ref={videoRef}
                            loop
                            playsInline
                            autoPlay
                        ></video>
                    </div>
                </div>
                <span className="z-1 absolute bottom-3 md:bottom-8 px-4 py-2 rounded-[20px] left-5 md:left-14 z-10 text-white text-sm bg-white/20 backdrop-blur-[20px] [transform-style:preserve-3d] [transform-origin:top_left] video-label">
                    {title}
                </span>
            </div>

            {/* Lightbox */}
            <Lightbox
                open={isLightboxOpen}
                close={() => setIsLightboxOpen(false)}
                plugins={[Video]}
                slides={[
                    {
                        type: "video",
                        width: 1280,
                        autoPlay: true,
                        height: 720,
                        controls: false,
                        sources: [
                            {
                                src: `${import.meta.env.VITE_APP_API_URL}/uploads/videos/${video}`,
                                type: "video/mp4",
                            },
                        ],
                    },
                ]}
                render={{
                    buttonPrev: () => null,
                    buttonNext: () => null,
                }}
            />
        </>
    );
};

export default PortfolioCard;
