import React, { useState } from 'react'
import "./Body.css";
import { useDataLayerValue } from './DataLayer';

function body() {
    //const [{playlists}, dispatch] = useDataLayerValue();

    return (
        <div className="body">

            <div className="body_info">
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Foobhai</h2>
                    <p>test</p>
                </div>
            </div>
            
        </div>
    )
}

export default body;
