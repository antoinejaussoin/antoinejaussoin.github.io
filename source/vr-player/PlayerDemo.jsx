import React from 'react';
import VrPlayer from 'react-vr-player';

class PlayerDemo extends React.Component {

    render() {

        const sources = [
            { url: '/medias/360-video.webm', type: 'video/webm' },
            { url: '/medias/360-video.mp4', type: 'video/mp4' }
        ];

        return (
            <div>
                <VrPlayer sources={sources} brand="React VR Player" title="Example Video" />
            </div>
        );
    }

}

export default PlayerDemo;
