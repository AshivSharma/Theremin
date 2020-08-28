import React, { useState } from 'react'
import "./sidebar.css";
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

export default function Sidebar() {

    const [{playlists}, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img
            className="sidebar_logo"
            src="data:image/png;base64,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"
            />
            <h1>Theremin</h1>
            <SidebarOptions Icon={HomeIcon} option = "Home" />
            <SidebarOptions Icon={SearchIcon} option = "Search" />
            <SidebarOptions Icon={LibraryMusicIcon} option = "My Library" />
            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />
            

            {playlists?.items?.map(playlist => (
                <SidebarOptions option={playlist.name} />
            ))}

        </div>
    )
}
