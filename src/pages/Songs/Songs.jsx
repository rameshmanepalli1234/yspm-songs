import React, {useEffect, useState} from "react";
import Footer from "../../footer/Footer";
import axios from "axios";
import Placeholder from "../../components/reusable/placeholder/Placeholder";
import './Songs.scss';

const Songs = () => {
    const BASEURL = 'https://yspm-songs.onrender.com';
    const [songs,setSongs] = useState([]);
    const [isSongsLoading, setIsSongsLoading] = useState(true);

   useEffect(() => {
       // setIsSongsLoading(true);
       axios.get(BASEURL + '/api/songs/all')
           .then((res) => {
           if(res.status === 200) {
               setIsSongsLoading(false);
               setSongs(res.data.data);
           }
       })
   },[])

    console.log('issongs loading =>',isSongsLoading);

    return (
        <>
            {/*<Placeholder type='table' height={700}/>*/}
            <div className='songs'>
                {!isSongsLoading ? songs?.map(song => {
                    return (
                        <>
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
                        </>
                    )
                }) : <Placeholder type='table' height={700}/>
                }
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Songs;