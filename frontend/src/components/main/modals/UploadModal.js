import React, { Component } from 'react'
import axios from 'axios'

class UploadModal extends Component {
    state = {
        file: '',
        fileName: 'Choose a file',
        uploadedFile:{}
    };

    onChange = e => {
        this.setState({ file: e.target.files[0] });
        this.setState({ fileName: e.target.files[0].name });
    }

    onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', this.state.file);

        try{
            const res = await axios.post("http://localhost:5000/upload",formData,{
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            })
            const {fileName ,filePath} = res.data;
            this.setState({
                uploadedFile:{fileName,filePath}
            })
        }catch(err){
            if(err.response.status===500){
                console.log("There was a problem with the server");
            }else{
                console.log(err.response.data.msg);
            }
        }
    }

    render() {
        return (
            <div className="modal bd-example-modal-lg fade" id="uploadModal" tabindex="-1" role="dialog" aria-labelledby="uploadModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="uploadModalLabel">
                                Upload File
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container modal-content-container">
                                <form onSubmit={this.onSubmit}>
                                    <div className="custom-file mb-4">
                                        <input className="custom-file-input" id="upload-image" name="newImg" type="file" onChange={this.onChange} />
                                        <label className="custom-file-label" htmlFor="upload-image">{this.state.fileName}</label>
                                        <small id="emailHelp" className="form-text text-muted">upload your image.</small>
                                    </div>
                                    <input type="submit" className="btn btn-primary" value="Upload"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UploadModal

