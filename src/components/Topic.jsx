import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import Context from './Context';

export default function Topic() {

  const yearGroups = useContext(Context);
  const {yeargroupparam, playlistparam, playlistcategoryparam} = useParams();
  // console.log(yeargroupparam,playlistparam,playlistcategoryparam)

if (yearGroups !== null) {
  
  const selectedYearGroup = yearGroups.filter((yearGroup) => yearGroup.slug === yeargroupparam)[0]
  const selectedPlaylist = selectedYearGroup['playlists'].filter((playlist) => playlist.slug === playlistparam)[0]
  const selectedPlaylistCategory = selectedPlaylist['playlist_categories'].filter((playlistCategory) => playlistCategory.slug === playlistcategoryparam)[0]
  
  const videos = selectedPlaylistCategory['videos']
  
  return (
<>
    {videos.map((video) => (
      <>
        <p>{video.video_title}</p>
          <div key={video.id} className='video-container'>
            <iframe title="testvideo" src={video.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
          </div>    
      </>

    ))
    }

</>
  )
}
}

