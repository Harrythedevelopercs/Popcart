import React from 'react'

const Banner = () => {
    const video = "https://player.vimeo.com/progressive_redirect/playback/1023443117/rendition/1080p/file.mp4?loc=external&log_user=0&signature=90a581c738558be2c75bb301d6773afe09026740bb16613f3dbcb9df243fe445"
    return (
        <section className="relative h-screen">
            <div className="h-full w-full">
                <video src={video} loop autoPlay muted controls={false} className='h-full w-full object-cover'></video>
            </div>
        </section>
    )
}

export default Banner
