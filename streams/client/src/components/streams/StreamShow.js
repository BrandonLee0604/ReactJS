import React from "react";
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from "../../actions";


class StreamShow extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }


    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.fetchStream(id);
        //When first render call buildPlayer to build it
        this.buildPlayer();
    }

    componentDidUpdate() {
        //When we already get build it, we will return nothing
        this.buildPlayer();
    }
    
    
    //Destroy the player when exit the component
    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer() {
        const { id } = this.props.match.params;
        //When we already build it or we haven't fetch the stream we will not try to build it
        if (this.player || !this.props.stream) {
            return;
        }

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });

        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }

        const { title, description } = this.props.stream;

        return (
            <div>
                <video ref={this.videoRef} style={{ width: '100%' }} controls={true} />
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);