import React from 'react'
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ReplayIcon from '@material-ui/icons/Replay';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <p>Album and song details</p>
            </div>

            <div className="footer_center">
                <ShuffleIcon className="footer__icon" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <ReplayIcon className="footer__icon" />
            </div>

            <div className="footer_right">
                <p>Volume controls</p>
            </div>
        </div>
    )
}

export default Footer
