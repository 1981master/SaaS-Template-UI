import { useRef, useState } from 'react'
import Button from '../Button'
import './FileUpload.css'

export default function FileUpload({
    onChange,
    multiple = false,
    accept = '*',
    className = '',
}) {
    const inputRef = useRef(null)
    const [files, setFiles] = useState([])

    const handleFiles = (fileList) => {
        const fileArray = Array.from(fileList)
        const newFiles = multiple ? [...files, ...fileArray] : fileArray
        setFiles(newFiles)
        onChange && onChange(newFiles)
    }

    const handleInputChange = (e) => {
        handleFiles(e.target.files)
        e.target.value = '' // reset input to allow selecting same file again
    }

    const handleDrop = (e) => {
        e.preventDefault()
        handleFiles(e.dataTransfer.files)
    }

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    return (
        <div
            className={`file-upload-wrapper ${className}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => inputRef.current.click()}
        >
            <input
                ref={inputRef}
                type="file"
                multiple={multiple}
                accept={accept}
                onChange={handleInputChange}
                className="file-upload-input"
            />
            <div className="file-upload-content">
                {files.length === 0 ? (
                    <p>Drag & drop files here, or click to select</p>
                ) : (
                    <ul>
                        {files.map((file, idx) => (
                            <li key={idx}>{file.name}</li>
                        ))}
                    </ul>
                )}
            </div>
            <Button
                variant="primary"
                size="sm"
            >
                Upload
            </Button>
        </div>
    )
}
