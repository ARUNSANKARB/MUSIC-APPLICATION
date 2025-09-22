import React from 'react'
import AlbumLandingContent from '../Album_Landing/AlbumLandingContent'
import AlbumLandingSidebar from '../Album_Landing/AlbumLandingSidebar'
import { useContext } from 'react'
import { GlobalAudioPlayer } from '../context/AudioPlayerContext'
import CustomAudioPlayer from 'react-pro-audio-player'

const AlbumLandingContainer = () => {
  let {songs,setSongs,isPlaying,setIsPlaying,currentSongIndex,setCurrentSongIndex} = useContext(GlobalAudioPlayer)
  return (
   <section className='w-[100vw] min-h-[calc(100vh-70px)] flex'>
    <AlbumLandingSidebar/>
    <AlbumLandingContent/>
    {
      currentSongIndex !== null && (
      <div className='w-full fixed bottom-0'>
        <CustomAudioPlayer
          songs={songs}
          isPlaying={isPlaying}
          currentSongIndex={currentSongIndex}
          onPlayPauseChange={setIsPlaying}
          onSongChange={setCurrentSongIndex}
          songUrlKey="songFile"
          songNameKey="songTitle"
          songThumbnailKey="songThumbnail" 
          songSingerKey="songSingers"
        />
      </div>)
    }
   </section>
  )
}

export default AlbumLandingContainer
