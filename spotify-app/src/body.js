import React, { useState } from 'react'
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import SongRow from './SongRow';


export default function Body({spotify}) {
    const [{current_playlist}, dispatch] = useDataLayerValue();

    return (
        <div className="body">

            <div className="body_info">
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <p>{current_playlist?.name}</p>
                </div>
                </div>

        <div className="scroll">
            {current_playlist?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
        </div>
        </div>
    )
}