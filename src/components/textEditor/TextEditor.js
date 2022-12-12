import React from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useStepFormContext from '../../hooks/useStepFormContext';
import './textEditor.scss';

const TextEditor = () => {
    
  const { formData } = useStepFormContext();
  

   const modules = {
       toolbar: [[{ header: [1, 2, 3, 4, 5, false] }], ["bold", "italic", "link", { list: "ordered" }, { list: "bullet" }]],
   };

    const formats = [ "header", "bold", "italic", "link", "list", "bullet"];

    return (
        <div>
            <ReactQuill
                value={formData.desc}
                onChange={(value) => {
                    formData.desc = value;
                }}
                modules={modules}
                formats={formats}
            />
        </div>
    );
};

export default TextEditor;