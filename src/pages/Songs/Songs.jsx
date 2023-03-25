import React from "react";
import Footer from "../../footer/Footer";
import {songs} from "../../components/jsFiles/songs";
import './Songs.scss';

const Songs = () => {
    return (
        <>
            <div className='songs'>
                {songs.map(song => {
                    return (
                        <div>
                            <div className='song-container'>
                                <div className='song-title'>
                                {song.title}
                                </div>
                                <div className='song-lyric'>
                                   {song.lyric}
                                </div>
                                <div>
                                    <button className='viewLyricButton'>
                                        View Lyric
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Songs;