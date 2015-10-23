import { default as React } from 'react';
import { Link } from 'react-router';

class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <h3>Welcome to my demo page.</h3>

                  <div className="row">
                    <div className="col s12 m6">
                      <div className="card large">
                        <div className="card-image">
                          <img src="/medias/vr-player-screenshot.jpg" />
                          <span className="card-title">360° Video Player</span>
                        </div>
                        <div className="card-content">
                            <p>React Component for viewing 360° videos in your browser.</p>
                        </div>
                        <div className="card-action">
                            <Link to="/react-vr-player">Run the Demo</Link>
                            <a href="https://github.com/antoinejaussoin/react-vr-player">View on GitHub</a>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        );
    }

}

export default Home;
