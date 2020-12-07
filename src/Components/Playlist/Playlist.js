import React from 'react';
import './Playlist.css';
import { TrackList } from '../TrackList/TrackList';
import { Loading } from '../Loading/Loading';


export class Playlist extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    handleSave() {
        console.log(this.props.playlistTracks);
        if (!this.props.playlistTracks || this.props.playlistTracks.length == 0) {
            return;
        }

        this.props.onSave();
        document.getElementById('playlist-input').value = 'New Playlist';
    }

    
    render() {
        return (
            <div className="Playlist">
                <input id='playlist-input' defaultValue={"New Playlist"} onChange={this.handleNameChange} />
                { 
                    this.props.isLoading 
                    ? 
                    <Loading /> 
                    : 
                    <TrackList tracks={this.props.playlistTracks} 
                        onRemove={this.props.onRemove} 
                        isRemoval={true} 
                    />
                }
                <button className="Playlist-save" onClick={this.handleSave}>SAVE TO SPOTIFY</button>
            </div>
        );
    }
}
