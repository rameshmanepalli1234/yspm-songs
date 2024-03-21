import React from "react";
import { useParams } from "react-router-dom";


const SongDetail = () => {
    const { songId } = useParams();
    return (
        <div>
            Hello
        </div>
    )
}

export default SongDetail;