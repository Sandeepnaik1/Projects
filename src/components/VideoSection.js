import React from 'react';

const VideoSection = () => {
  return (
    <section style={{ backgroundColor: '#062C4D', padding: '3rem', color: '#fff' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        
        <div style={{ flex: 1 }}>
          <div
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              background: '#000',
              borderRadius: '10px',
            }}
          >
            <iframe
              title="Post Your Requirements Video"
              src="https://www.youtube.com/embed/your-video-id" 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0,
              }}
              allowFullScreen
            />
          </div>
        </div>


        <div style={{ flex: 1 }}>
          <div>
            <h3 style={{ color: '#FFA500', marginBottom: '1rem', fontSize: '1.5rem' }}>Buyer</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                ✅ Post your requirements.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                ✅ Sit back for multiple suppliers to contact you.
              </li>
              <li>
                ✅ Choose among suppliers based on ratings and reviews.
              </li>
            </ul>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ color: '#FFA500', marginBottom: '1rem', fontSize: '1.5rem' }}>Supplier</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                ✅ Get listed for buyers to find you.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                ✅ Showcase your portfolio to attract buyers.
              </li>
              <li>
                ✅ Increase visibility and credibility with reviews.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
