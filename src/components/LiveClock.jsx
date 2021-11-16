import React from 'react';
import Clock from 'react-live-clock';

function LiveClock() {
    return (
        <div className="d-flex justify-content-end">
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'MY/Malaysia'} />
        </div>
    );
}

export default LiveClock;