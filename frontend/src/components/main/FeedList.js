import React, { Component } from 'react'
import FeedItem from './FeedItem'
import $ from "jquery"
import axios from 'axios'
import PinModal from './modals/PinModal'
import './feedList.css'
//number of feed items to load each time
const pageLimit = 20;
const serverUrl = "http://localhost:5000/api/members/";

class FeedList extends Component {

    state = {
        //itemList is the dom element of the feedItems, whenever the itemList change, the page re-renders.
        itemList: [],
        loading: false,
        imgData: [],
        setModalShow: false,
        modalShow: false,
        currentImgData: {},
        showModal: false
    };

    componentDidMount() {

        // fetch(serverUrl, {
        //     method: 'get',
        //     dataType: 'json',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => { console.log(data) });
        this.getData();
        window.addEventListener("resize", this.Bricks);
        window.addEventListener("scroll", this.handleScroll);
    }

    handleStateChange = (id) => {
        const data = this.state.imgData.filter(data => data.id === id)[0];
        this.setState({ currentImgData: data });
        console.log(this.state.currentImgData);
    }

    handleScroll = () => {

        var { itemList, imgData } = this.state;
        //activate when scrolling
        if (window.scrollY + $(window).height() > $(document).height() - 400) {
            //if there are more items to be loaded
            if (itemList.length < imgData.length) {
                var tempList = itemList;
                //if there are more than 20 items to be loaded
                if (imgData.length - itemList.length >= pageLimit) {
                    for (var n = itemList.length; n < itemList.length + pageLimit; n++) {
                        tempList.push(<FeedItem key={imgData[n].id} onClick={this.handleStateChange} data={imgData[n]} />);
                    }
                } else {
                    for (var n = itemList.length; n < imgData.length - itemList.length; n++) {
                        tempList.push(<FeedItem key={imgData[n].id} onClick={this.handleStateChange} data={imgData[n]} />);
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

    firstRender() {
        $(document).ready(() => {

            const imageLoaded = () => {
                imagesLoaded++;
                if (imagesLoaded == totalImages) {
                    allImagesLoaded();
                }
            }
            const allImagesLoaded = () => {
                this.Bricks();
            }
            var imagesLoaded = 0,
                totalImages = $('.feed .brick .image').length;
            $('.feed .brick .image').each(function (idx, img) {
                $('<img>').on('load', imageLoaded).attr('src', $(img).attr('src'));
            });

        });
    }

    getData() {

        //get unsplash images
        axios.get(this.props.imgUrl)
            .then((res) => {
                // var urls = [];
                var imgData = [];
                // var ids =
                res.data.forEach((obj) => {
                    imgData.push(obj);
                    // urls.push(obj.urls.regular); 
                });
                //load all item urls from the server
                this.setState({
                    imgData
                })
                return imgData;
            })
            //send the urls to FeedItem
            .then((imgData) => {
                var tempList = [];
                if (imgData.length >= pageLimit) {
                    for (var n = 0; n < pageLimit; n++) {
                        tempList.push(<FeedItem key={imgData[n].id} handleStateChange={this.handleStateChange} data={imgData[n]} />);
                    }
                } else {
                    for (var n = 0; n < imgData.length; n++) {
                        tempList.push(<FeedItem key={imgData[n].id} handleStateChange={this.handleStateChange} data={imgData[n]} />);
                    }
                }
                this.setState({
                    itemList: tempList
                }, () => {
                    this.Bricks();
                })
                console.log(imgData);
                this.firstRender();
            }
            )
    }

    // setting the styles for each feed item
    Bricks() {

        var margin = 10, width = 240,
            columnCount = Math.floor($('.feed').outerWidth() / (width + margin)),
            n = 0, row = 0, left = 0, top = 0, t = [];

        // this.container.childNodes.forEach(node => {
        //     console.log(node.style.width = columnCount * (width + margin));
        // })

        $('.brickbox').each(function () {
            console.log($(this));
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

        return (
            <div className='feed rel'>
                <PinModal
                    imgData={this.state.currentImgData}
                    show={this.state.modalShow}
                    onHide={() =>
                        this.setState({
                            modalShow: false
                        })}
                />

                <div className='brickbox rel' >
                    {this.state.itemList}
                </div>
            </div>
        );
    }
}


export default FeedList