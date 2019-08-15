import React, { Component } from 'react'
import FeedItem from './FeedItem'
import $ from "jquery"
import axios from 'axios'
import Modal from './Modal'
//number of feed items to load each time
const pageLimit = 20;



class FeedList extends Component {

    state = {
        //itemList is the dom element of the feedItems, so whenever the itemList change, the page re-renders.
        itemList: [],
        loading: false,
        imgData: [],
        setModalShow: false,
        modalShow: false,
        currentImgData: {},
        showModal:false
    };


    componentDidMount() {
        console.log('did mount');
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
            // Images loaded is zero because we're going to process a new set of images.
            var imagesLoaded = 0;
            // Total images is still the total number of <img> elements on the page.
            var totalImages = $('.feed .brick .image').length;
            // Step through each image in the DOM, clone it, attach an onload event
            // listener, then set its source to the source of the original image. When
            // that new image has loaded, fire the imageLoaded() callback.
            $('.feed .brick .image').each(function (idx, img) {
                console.log('loaded a new image');
                $('<img>').on('load', imageLoaded).attr('src', $(img).attr('src'));
            });

            // Do exactly as we had before -- increment the loaded count and if all are
            // loaded, call the allImagesLoaded() function.
            function imageLoaded() {
                imagesLoaded++;
                if (imagesLoaded == totalImages) {
                    allImagesLoaded();
                }
            }

            var that = this;
            function allImagesLoaded() {
                console.log('ALL IMAGES LOADED');
                that.Bricks();
            }
        });
    }

    getData() {

        //get unsplash images
        axios.get('https://api.unsplash.com/photos/?client_id=66d4c29b16aa566253b58f4519b08355594d5e53a660cf28844c8021ac94874c')
            .then((res) => {
                console.log(res);
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


        return (
            <div className='feed rel'>
                <Modal
                    imgData={this.state.currentImgData}
                    show={this.state.modalShow}
                    onHide={() =>
                        this.setState({
                            modalShow: false
                        })}
                />
            
                <div className='brickbox rel'>
                    {this.state.itemList}
                </div>
            </div>
        );
    }
}


export default FeedList