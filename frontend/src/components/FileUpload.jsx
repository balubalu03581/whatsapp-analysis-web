import axios from 'axios';

export default function FileUpload({ onData }) {
  const handleChange = async (e) => {
    const formData = new FormData();
    formData.append('chat', e.target.files[0]);

    const BACKEND_URL = process.env.NODE_ENV === 'production' 
    ? 'https://whatsapp-analysis-web-1.onrender.com/upload' 
    : 'http://localhost:5005/upload';
    const res = await axios.post(BACKEND_URL, formData);
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
