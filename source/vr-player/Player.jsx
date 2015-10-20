import { default as React, PropTypes } from 'react';
import { Link } from 'react-router';
import example1 from './example1.txt';
import example2 from './example2.txt';

class PlayerPage extends React.Component {

    render() {
        return (
            <div className="container">
                <p>This is a page explaining how to use the React VR Player</p>

                <h3 className="header">Welcome to the VR Player Demo Page</h3>

                <h4>Demo</h4>

                <p>The demo is on a separate page, since this is a fullscreen component. You can run the demo by clicking here:</p>

                <Link to="/react-vr-player-demo" className="waves-effect waves-light btn"><i className="material-icons left">play_arrow</i>Run the demo</Link>

                <h4>How to Use</h4>

                <p>The component is pretty easy to use: build an array of video sources, and you should be good to go:</p>

                <pre>
                    <code className="javascript">
                        { example1 }
                    </code>
                </pre>

                <h4>Options</h4>

                <h5>Brand</h5>

                <p>You can specify a brand name (displayed in bold in the control bar) using the 'brand' props.</p>

                <h5>Title</h5>

                <p>You can display a title (presumably the video's title) using the 'title' props.</p>

                <h5>Keys Mapping</h5>

                <p>The player can also be controlled using the keyboard. You can remap the keys if you are not on a QWERTY keyboard.</p>

                <h5>Full example: </h5>

                    <pre>
                        <code className="javascript">
                            { example2 }
                        </code>
                    </pre>

            </div>
        );
    }

    componentDidMount() {
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    }

}

export default PlayerPage;
