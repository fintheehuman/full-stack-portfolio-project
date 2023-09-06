// import React from "react";
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

    const [value, setValue] = useState('');

    console.log(value)

    return (
        <div className='add'>
            <div className="content">
                <input type="text" placeholder="Title"/>
                <div className="editorContainer">
                <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Public
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input style={{display:"none"}} type="file" name="" id="file" />
                    <label className='file' htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button>Update</button>
                    </div>
                </div>
                <div className="item">
                    <h1> Category</h1>
                        <div className="category">
                    <input type="radio" name='category' value="art" id='art'/>
                    <label htmlFor="art">Art</label>
                    <input type="radio" name='category' value="tech" id='tech'/>
                    <label htmlFor="tech">Tech</label>
                    <input type="radio" name='category' value="cinema" id='cinema'/>
                    <label htmlFor="cinema">Cinema</label>
                    <input type="radio" name='category' value="food" id='food'/>
                    <label htmlFor="food">Food</label>
                    <input type="radio" name='category' value="general" id='general'/>
                    <label htmlFor="general">General</label>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Write;