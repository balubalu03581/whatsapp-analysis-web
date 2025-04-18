export default function Header({ onFileChange }) {
    return (
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ marginBottom: '10px', color: '#333' }}>WhatsApp Chat Analysis</h1>
        <input
          type="file"
          accept=".txt"
          onChange={onFileChange}
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            background: '#fff',
          }}
        />
      </div>
    );
  }
  