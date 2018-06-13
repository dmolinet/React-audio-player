import React from 'react';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCaretLeft from '@fortawesome/fontawesome-free-solid/faCaretLeft'
import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight'
import faPlayCircle from '@fortawesome/fontawesome-free-solid/faPlayCircle'
import faPauseCircle from '@fortawesome/fontawesome-free-solid/faPauseCircle'
import './Controls.css';

fontawesome.library.add( faCaretLeft, faCaretRight,faPlayCircle,faPauseCircle )

const Controls = props => (
    <div id='Controls'>
        <div className="Buttons fa-2x">
            <i onClick={()=>props.onChangeTrack('previous')}><FontAwesomeIcon icon='caret-left' /></i>
            <i onClick={props.onPlayPause}><FontAwesomeIcon icon={props.playing ? 'pause-circle' : 'play-circle'} /></i>
            <i onClick={()=>props.onChangeTrack('next')}><FontAwesomeIcon icon="caret-right" /> </i>
        </div>
        <div id="Seek">
            <i>{(props.playedSeconds).toFixed()} s</i>
            <input 
                type='range' min={0} max={1} step='any'
                value={props.played}
                onMouseDown={props.onSeekMouseDown}
                onChange={props.onSeekChange}
                onMouseUp={props.onSeekMouseUp}
            />
            <i>{props.currentTrack.durationMilliseconds/1000} s</i>
        </div>
  </div>
);

export default Controls;