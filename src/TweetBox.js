import React from 'react';
import './tweetBox.css';
import{Avatar , Button} from "@material-ui/core";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
            <div className="tweetBox__input">
            <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
            <input placeholder="Whats happening ?" type="text"></input>
            <input  className="tweetBox__imageInput"placeholder=" Enter image URL" type="text" />

            </div>

             <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>

        </div>
    )
}

export default TweetBox

