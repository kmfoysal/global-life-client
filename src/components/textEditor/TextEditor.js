import React, { useState } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './textEditor.scss'

const TextEditor = () => {

    const [value, setValue] = useState("");

   const modules = {
       toolbar: [[{ header: [1, 2, 3, 4, 5, false] }], ["bold", "italic", "link", { list: "ordered" }, { list: "bullet" }]],
   };

    const formats = [ "header", "bold", "italic", "link", "list", "bullet"];

    return (
        <div>
            <ReactQuill value={value} onChange={setValue} modules={modules} formats={formats} />
        </div>
    );
};

export default TextEditor;