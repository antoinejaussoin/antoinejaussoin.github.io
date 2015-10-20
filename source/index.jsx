import React from 'react';
import ReactDOM from 'react-dom';
import VrPlayer from 'react-vr-player';


const sources = [
    { url: '/medias/360-video.webm', type: 'video/webm' },
    { url: '/medias/360-video.mp4', type: 'video/mp4' }
];

let component =
    <div>
        <VrPlayer sources={sources} brand="React VR Player" title="Example Video" />
    </div>;

ReactDOM.render(component, document.getElementById('content'));
