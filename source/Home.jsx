import { default as React } from 'react';
import { Link } from 'react-router';

class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <h3>Welcome to my demo page.</h3>

                <p>At the moment, the only demo is a <Link to="/react-vr-player">360° Video Player</Link>, that works on the Oculus Rift and other VR headsets.</p>

                <p>More to come!</p>
            </div>
        );
    }

}

export default Home;
