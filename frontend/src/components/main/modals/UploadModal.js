import React, { Component } from 'react'
import axios from 'axios'

const chartConfig = [
    {
        "id": "inputName",
        "label": "图片名称",
        "type": "text",
        "placeholder": "",
        "changeMethod": "onChangeName"

    }
    ,
    {
        "id": "inputTags",
        "label": "标签",
        "type": "text",
        "placeholder": "",
        "changeMethod": "onChangeTags"

    },
    {
        "id": "inputCompany",
        "label": "公司名称",
        "type": "text",
        "placeholder": "",
        "changeMethod": "onChangeCompany"

    },
    {
        "id": "inputTel",
        "label": "联系电话",
        "type": "text",
        "placeholder": "",
        "changeMethod": "onChangeTel"

    },
    {
        "id": "inputWebsite",
        "label": "公司网址",
        "type": "text",
        "placeholder": "",
        "changeMethod": "onChangeWebsite"

    },
    {
        "id": "inputProject",
        "label": "项目名称",
        "type": "text",
        "placeholder": "",
        "changeMethod": "onChangeProject"

    },
    {
        "id": "inputLocation",
        "label": "项目地点",
        "type": "text",
        "placeholder": "",
        "changeMethod": "onChangeLocation"

    },
    {
        "id": "inputProduct",
        "label": "产品名称",
        "type": "text",
        "placeholder": "",
        "changeMethod": "onChangeProduct"

    },
    {
        "id": "inputDesigner",
        "label": "设计师",
        "type": "text",
        "placeholder": "",
        "changeMethod": "onChangeDesigner"

    },
    {
        "id": "inputYear",
        "label": "项目年份",
        "type": "text",
        "placeholder": "",
        "changeMethod": "onChangeYear"

    }
];

class UploadModal extends Component {
    state = {
        file: '',
        fileName: 'Choose a file',
        uploadedFile: {},
        // image data file
        name: "",
        tags: [],
        company: "",
        tel: "",
        website: "",
        project: "",
        location: "",
        product: "",
        designer: "",
        year: ""
    };

    componentDidMount(){
        axios.get("http://localhost:5000/image/")
            .then(res => console.log(res.data));
        
    }
    onChangeFile = e => {
        this.setState({ file: e.target.files[0] });
        this.setState({ fileName: e.target.files[0].name });
    }

    onChangeName = e => {
        this.setState({ name: e.target.value });
        console.log( e.target.value);
    }
    onChangeTags = e => {
        this.setState({ tags: e.target.value });
        console.log( e.target.value);
    }

    onChangeCompany = e => {
        this.setState({ company: e.target.value });
        console.log( e.target.value);
    }

    onChangeTel = e => {
        this.setState({ tel: e.target.value });
        console.log( e.target.value);
    }

    onChangeWebsite = e => {
        this.setState({ website: e.target.value });
        console.log( e.target.value);
    }

    onChangeProject = e => {
        this.setState({ project: e.target.value });
        console.log( e.target.value);
    }

    onChangeLocation = e => {
        this.setState({ location: e.target.value });
        console.log( e.target.value);
    }

    onChangeProduct = e => {
        this.setState({ product: e.target.value });
        console.log( e.target.value);
    }

    onChangeDesigner = e => {
        this.setState({ designer: e.target.value });
        console.log( e.target.value);
    }

    onChangeYear = e => {
        this.setState({ year: e.target.value });
        console.log( e.target.value);
    }






    onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', this.state.file);

        // try {
        //     const res = await axios.post("http://localhost:5000/upload", formData, {
        //         headers: {
        //             "Content-Type": "multipart/form-data"
        //         }
        //     })
        //     const { fileName, filePath } = res.data;
        //     this.setState({
        //         uploadedFile: { fileName, filePath }
        //     })
        // } catch (err) {
        //     if (err.response.status === 500) {
        //         console.log("There was a problem with the server");
        //     } else {
        //         console.log(err.response.data.msg);
        //     }
        // }

        const imageData = {
            name: this.state.name,
            tags: this.state.tags,
            company: this.state.company,
            tel: this.state.tel,
            website: this.state.website,
            project: this.state.project,
            location: this.state.location,
            product: this.state.product,
            designer: this.state.designer,
            year: this.state.year
        }

        axios.post("http://localhost:5000/image/add", imageData)
            .then(res => console.log(res.data));
        /*
         * once submitted, redirect to the initial upload page
         */
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
                                        <input className="custom-file-input" id="upload-image" name="newImg" type="file" onChange={this.onChangeFile} />
                                        <label className="custom-file-label" htmlFor="upload-image">{this.state.fileName}</label>
                                        <small id="emailHelp" className="form-text text-muted">upload your image.</small>
                                    </div>
                                    {chartConfig.map((d) => {
                                        return (
                                            <div class="form-group row">
                                                <label for={d.id} class="col-sm-2 col-form-label">{d.label}</label>
                                                <div class="col-sm-10">
                                                    <input type={d.type} class="form-control" id={d.id} placeholder={d.placeholder} onChange={this[d.changeMethod]} />
                                                </div>
                                            </div>);
                                    })
                                    }
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

