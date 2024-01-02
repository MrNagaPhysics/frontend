import React from 'react'
import PropTypes from "prop-types"

const YoutubeEmbed = ({embedUrl}) => {
  return (
   <iframe title="testvideo" src={embedUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>

  )
}

YoutubeEmbed.protoTypes = {
    embedUrl: PropTypes.string.isRequired
}

export default YoutubeEmbed