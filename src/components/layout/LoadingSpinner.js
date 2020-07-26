import GifLoader from 'react-gif-loader';
import React, { Component } from 'react';
 
class LoadingSpinner extends Component {
    render() {
        return (
            <GifLoader
                loading={true}
                imageSrc="https://media.giphy.com/media/l378zKVk7Eh3yHoJi/source.gif"
                // imageStyle={imageStyle}
                overlayBackground="rgba(0,0,0,0.5)"
            />
        );
    }


}

export default LoadingSpinner;