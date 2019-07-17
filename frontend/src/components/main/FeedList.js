import React, { Component } from 'react'
import FeedItem from './FeedItem'
import $ from "jquery"
import axios from 'axios'

class FeedList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            //itemList is the dom element of the feedItems, so whenever the itemList change, the page re-renders.
            itemList: [],
            loading: false,
            resultUrls: []
        }
    }

    componentDidMount() {
        this.getData();
        window.addEventListener("resize", this.Bricks);
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        //number of feed items to load each time
        var pageLimit = 20;
        //activate when scrolling
        if (window.scrollY + $(window).height() > $(document).height() - 400) {
            //if there are more items to be loaded
            if (this.state.itemList.length < this.state.resultUrls.length) {
                var tempList = this.state.itemList;
                //if there are more than 20 items to be loaded
                if (this.state.resultUrls.length - this.state.itemList.length >= pageLimit) {
                    for (var n = this.state.itemList.length; n < this.state.itemList.length + 20; n++) {
                        tempList.push(<FeedItem url={this.state.resultUrls[n]} />);
                    }
                } else {
                    for (var n = this.state.itemList.length; n < this.state.resultUrls.length - this.state.itemList.length; n++) {
                        tempList.push(<FeedItem url={this.state.resultUrls[n]} />);
                    }
                }
                //load the new items
                this.setState({
                    itemList: tempList
                }, () => {
                    //render the new items
                    this.Bricks();
                })
            }
        }
    }

    getData() {
        //number of feed items to load each time
        var pageLimit = 20;
        //get unsplash images

        axios.get('https://api.unsplash.com/photos/?client_id=66d4c29b16aa566253b58f4519b08355594d5e53a660cf28844c8021ac94874c')
            .then((res) => {
                var urls = [];
                res.data.forEach((obj) => { urls.push(obj.urls.regular); });
                //load all item urls from the server
                this.setState({
                    resultUrls: urls
                })
                return urls;
            })
            //send the urls to FeedItem
            .then((urls) => {
                var tempList = [];
                if (urls.length >= pageLimit) {
                    for (var n = 0; n < pageLimit; n++) {
                        tempList.push(<FeedItem url={urls[n]} />);
                    }
                } else {
                    for (var n = 0; n < urls.length; n++) {
                        tempList.push(<FeedItem url={urls[n]} />);
                    }
                }
                this.setState({
                    itemList: tempList
                },()=>{
                    this.Bricks();
                })
                console.log('getting data');
            }
            )
    }


    //setting the styles for each feed item
    Bricks() {
        var margin = 20, width = 240,
            columnCount = Math.floor($('.feed').outerWidth() / (width + margin)),
            n = 0, row = 0, left = 0, top = 0, t = [];
        $('.brickbox').each(function () {
            $(this).css({
                width: columnCount * (width + margin)
            })
        })
        for (var i = 0; i < columnCount; i++) {
            t[i] = 0;
        }
        $('.feed .brick').each(function () {
            left = n * (width + margin);
            var tempHeight = $(this).find('.image').height() + 50;
            $(this).css({
                position: 'absolute',
                left: left,
                top: row > 0 ? t[n] + 'px' : top + 'px',
                height: tempHeight + 'px',
            });
            t[n] = t[n] + parseInt(tempHeight) + margin;
            n++;
            if (n >= columnCount) {
                row++; n = 0;
            }
            console.log('building brick');
        });
    }

    render() {
        this.Bricks();
        return (
            <div className='feed rel'>
                <div className='brickbox rel'>
                    {this.state.itemList}
                </div>
            </div>
        );
    }
}


export default FeedList