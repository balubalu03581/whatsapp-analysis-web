import axios from 'axios';

export default function FileUpload({ onData }) {
  const handleChange = async (e) => {
    const formData = new FormData();
    formData.append('chat', e.target.files[0]);
    const res = await axios.post('http://localhost:5005/upload', formData);
    onData(res.data);
  };

  return (
    <div className="upload-section">
      <label htmlFor="fileUpload" className="file-upload-label">
  📁 Upload Chat File
</label>
<input
  id="fileUpload"
  type="file"
  onChange={handleChange}
  className="file-input"
/>

    </div>
  );
}
