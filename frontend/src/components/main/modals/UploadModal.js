import React, { Component } from 'react'
import axios from 'axios'
import InputTag from "./InputTag"

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
        "type": "number",
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
        year: 0
    };

    componentDidMount() {
        axios.get("http://localhost:5000/image/")
            .then(res => console.log(res.data));

    }
    onChangeFile = e => {
        this.setState({ file: e.target.files[0] });
        this.setState({ fileName: e.target.files[0].name });
    }

    onChangeName = e => {
        this.setState({ name: e.target.value });
        console.log(e.target.value);
    }
    onChangeTags = e => {
        this.setState({ tags: e.target.value });
        console.log(e.target.value);
    }

    onChangeCompany = e => {
        this.setState({ company: e.target.value });
        console.log(e.target.value);
    }

    onChangeTel = e => {
        this.setState({ tel: e.target.value });
        console.log(e.target.value);
    }

    onChangeWebsite = e => {
        this.setState({ website: e.target.value });
        console.log(e.target.value);
    }

    onChangeProject = e => {
        this.setState({ project: e.target.value });
        console.log(e.target.value);
    }

    onChangeLocation = e => {
        this.setState({ location: e.target.value });
        console.log(e.target.value);
    }

    onChangeProduct = e => {
        this.setState({ product: e.target.value });
        console.log(e.target.value);
    }

    onChangeDesigner = e => {
        this.setState({ designer: e.target.value });
        console.log(e.target.value);
    }

    onChangeYear = e => {
        this.setState({ year: e.target.value });
        console.log(e.target.value);
    }



    onSubmit = async e => {
        e.preventDefault();

        // prepare form data
        const formData = new FormData();
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
        formData.append('file', this.state.file);
        Object.keys(imageData).forEach(key => {
            formData.append(key, imageData[key]);
            console.log(key + ":" + imageData[key]);
        })

        // set config
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        
        axios.post("http://localhost:5000/image/add", formData, config)
            .then(res => console.log(res.data));

        /*
         * once submitted, redirect to the initial upload page
         */
    }



    removeTag = (i) => {
        const newTags = [...this.state.tags];
        newTags.splice(i, 1);
        this.setState({ tags: newTags });
    }

    inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.keyCode == 0 || e.keyCode == 32 && val) {
            if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
                return;
            }
            this.setState({ tags: [...this.state.tags, val] });
            this.tagInput.value = null;
            console.log(this.state.tags);
        } else if (e.key === 'Backspace' && !val) {
            this.removeTag(this.state.tags.length - 1);
        }
    }
    render() {
        const { tags } = this.state;
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
                                        <input className="custom-file-input" id="upload-image" name="newImage" type="file" onChange={this.onChangeFile} />
                                        <label className="custom-file-label" htmlFor="upload-image">{this.state.fileName}</label>
                                        <small id="emailHelp" className="form-text text-muted">upload your image.</small>
                                    </div>
                                    {chartConfig.map((d) => {
                                        return (
                                            <div class="form-group row">
                                                <label for={d.id} class="col-sm-2 col-form-label">{d.label}</label>
                                                <div class="col-sm-10">
                                                    <input data-role={d.dataRole} type={d.type} class="form-control" id={d.id} placeholder={d.placeholder} onChange={this[d.changeMethod]} />
                                                </div>
                                            </div>);
                                    })
                                    }
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">标签</label>
                                        <div class="col-sm-10">
                                            <div className="input-tag">
                                                <ul className="input-tag__tags">
                                                    {tags.map((tag, i) => (
                                                        <li key={tag}>
                                                            {tag}
                                                            <button type="button" onClick={() => { this.removeTag(i); }}>+</button>
                                                        </li>
                                                    ))}
                                                    <li className="input-tag__tags__input"><input type="text" onKeyDown={this.inputKeyDown} ref={c => { this.tagInput = c; }} /></li>
                                                </ul>
                                            </div>
                                        </div>
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

