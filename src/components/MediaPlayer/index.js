import React from "react";
import ReactPlayer from 'react-player'
import SongDetail from '../SongDetail'
import Controls from '../Controls'
/*
Library documentation: https://www.npmjs.com/package/react-player
*/
class MediaPlayer extends React.Component {
    state = {
      playing:false,
      tracks:this.props.tracks,
      trackNumber: 0,
      currentTrack:this.props.tracks[0],
      played:0,
      playedSeconds:0,
      seeking:false
    }
  
    ref = player => {
      this.player = player
    }

    changeTrack = (direction) =>{
      console.log(direction);
      const maxPos = this.state.tracks.length -1
      let   minPos = 0,
                op = 0,
          trackPos = this.state.trackNumber
  
      switch (direction) {
        case 'next':
          op = 1
          break;
        case 'previous':
          op = -1
          break;
        default:
          break;
      }
      trackPos = trackPos + op
      if (trackPos>maxPos) trackPos = minPos;
      else if (trackPos<minPos) trackPos = maxPos
      this.setState(()=>({
        trackNumber: trackPos,
        currentTrack: this.state.tracks[trackPos],
        played: 0,
        seeking: false,
        playedSeconds:0
      }))
    }

    onPause = () => {
      console.log('onPause')
      this.setState({ playing: false })
    }
    onPlay = () => {
      console.log('onPlay')
      this.setState({ playing: true })
    }
  
    playPause = () => {
      this.setState({ playing: !this.state.playing })
    }

    onProgress = state => {
      if (!this.state.seeking) {
        this.setState(state)
      }
    }

    onSeekMouseDown = e => {
      this.setState({ seeking: true })
    }

    onSeekChange = e => {
      console.log('onSeek') 
      this.setState({ played: parseFloat(e.target.value) })
    }
    
    onSeekMouseUp = e => {
      this.setState({ seeking: false })
      this.player.seekTo(parseFloat(e.target.value))
    }
  
    render() {
      const { playing, currentTrack,played, playedSeconds} = this.state
      return (
        <div id="MediaPlayer"> 
          <ReactPlayer
            className='react-player'
            ref={this.ref}
            playing={playing}
            width={'100%'}
            config={{ file: { forceAudio: true } }}
            url={currentTrack.mediaUrl} 
            onProgress={this.onProgress} 
            onPlay={this.onPlay}
            onPause={this.onPause}
           /> 
          <SongDetail currentTrack={currentTrack}/>
          <Controls 
            currentTrack={currentTrack}  
            playing={playing}
            onPlayPause={this.playPause}
            onChangeTrack={this.changeTrack}
            onSeekMouseDown={this.onSeekMouseDown}
            onSeekChange={this.onSeekChange}
            onSeekMouseUp={this.onSeekMouseUp}
            played={played}
            playedSeconds={playedSeconds}
            
          />
        </div>
      )
    }
  }
  
  export default MediaPlayer;
  
  