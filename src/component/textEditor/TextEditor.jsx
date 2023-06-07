import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './TextEditor.css';

const TextEditor = () => {
    const [content, setContent] = useState('');

    const handleContentChange = (value) => {
        setContent(value);
    };

    return (
        <div className='text-editor display-3rd'>
            <ReactQuill value={content} onChange={handleContentChange}
                modules={{
                    toolbar: {
                        container: [
                            [{ header: [1, 2, 3, 4, 5, 6] }], // Add header dropdown to the toolbar
                            ['bold', 'italic', 'underline', 'header'], // Other formatting options
                            [{ color: [] }], // Add color dropdown to the toolbar
                            [{ list: 'ordered' }, { list: 'bullet' }],
                            [{ 'align': [] }], // Add text alignment options
                            ['link', 'image'],
                        ],
                    },
                }}
                formats={['color', 'bold', 'italic', 'underline', 'header', 'list', 'bullet', 'link', 'image', 'align']}
            />
        </div>
    );
};

export default TextEditor;