import React from 'react'

export default function Topic() {
  const embedUrl = "https://www.youtube.com/embed/MihYVWGN_fY?si=PCTsRvcg1za2kUS9" ;
  return (
<>
    <div id='video' className="video-container">
      <iframe title="testvideo" src={embedUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
    </div>

</>
  )
}

