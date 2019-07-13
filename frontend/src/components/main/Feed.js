import React, { Component } from 'react'
import FeedItem from './FeedItem'
import $ from "jquery"


class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loading: false
        }
    }


    rand(min, max) {
        return Math.floor(Math.random() * max) + min;
    }

    componentDidMount() {
        this.Bricks();
        window.addEventListener("resize",this.Bricks());
    }

    //setting the styles for each feed item
    Bricks() {
        var margin = 20, width = 240,
            columnCount = Math.floor($('.feed').outerWidth() / (width + margin)),
            n = 0, row = 0, left = 0, top = 0, t = [];
            $('.brickbox').each(function(){
                $(this).css({
                    width:columnCount*(width + margin)
                })
            })
        for (var i = 0; i < columnCount; i++) {
            t[i] = 0;
        }
        $('.feed .brick').each(function () {
            left = n * (width + margin);
            var tempHeight = Math.floor(Math.random() * 400) + 200;
            $(this).css({
                position: 'absolute',
                left: left,
                top: row > 0 ? t[n] + 'px' : top + 'px',
                height: tempHeight + 'px'
            });
            t[n] = t[n] + parseInt(tempHeight) + margin;
            n++;
            if (n >= columnCount) {
                row++; n = 0;
            }
        });
    }

    render() {
        var plist = [];
        for (var n = 0; n < 20; n++) {
            plist.push(<FeedItem placeholder={true} />);
        }
        return (
            <div className='feed rel'>
                <div className='brickbox rel'>
                    {this.state.list.length > 0 ? this.state.list : plist}
                </div>
            </div>
        );
    }
}


export default Feed