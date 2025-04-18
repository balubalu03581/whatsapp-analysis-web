export default function MovingBanner({ text }) {
    return (
      <div className="marquee" style={{ background: '#007aff', color: 'white', padding: '10px', borderRadius: '8px' }}>
        {text}
      </div>
    );
  }
  