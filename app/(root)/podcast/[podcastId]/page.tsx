import React from 'react'

const PodcastDetails = ({params}:{params : {podcastId:string }}) => {
  return (
    <div className='text-white'>Showing podcast details for id : {params.podcastId}</div>
  )
}

export default PodcastDetails