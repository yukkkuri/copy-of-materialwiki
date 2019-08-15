import React, { Component } from 'react'

class Modal extends Component {
  state = {
    imgData: {}
  }

  componentDidUpdate(prevProps) {
    if (prevProps.imgData !== this.props.imgData) {
      this.setState({ imgData: this.props.imgData })
    }
  }
  render() {
    const { imgData } = this.props;

    return (

      <div className="modal bd-example-modal-lg fade" id="introModal" tabindex="-1" role="dialog" aria-labelledby="introModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="introModalLabel">
                {this.state.imgData.description ? this.state.imgData.description : "no title"}
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container modal-content-container">
                <div className="row">
                  <div className="col-lg-8">
                    <div>
                      <img className='image modal-image' src={this.state.imgData.hasOwnProperty("urls") ? this.state.imgData.urls.full : null} />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <h3>{this.state.imgData.description ? this.state.imgData.description : "no title"}</h3>
                    <hr />
                    <h5>Tages</h5>
                    <br/>
                    <form>
                      <div className="form-group">
                        {/* <label for="tag-text-area">Example textarea</label> */}
                        <textarea className="form-control" id="tag-text-area" rows="3" placeholder="Add tags"></textarea>
                      </div>
                    </form>
                    <hr />
                    <h5>Comments</h5>
                    <br/>
                    <div className="form-group">
                      {/* <label for="comment">Email address</label> */}
                      <input type="text" className="form-control" id="comment" placeholder="Add a comment" />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
      }
    }
    
    export default Modal
    
