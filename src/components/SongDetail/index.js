import React from 'react';
import './SongDetail.css';

const SongDetail = props => (
    <div id="SongDetail"> 
      <div className="column"><img  alt="{props.currentTrack.artistName}" id="Cover" src={props.currentTrack.artworkUrl} /></div>
      <div className="column">
        <div id="TrackName">{props.currentTrack.trackName}</div>
        <div id="ArtistName">{props.currentTrack.artistName}</div>
      </div>
    </div>
);

export default SongDetail;