import React from 'react';

const ReadyToDive = () => {
  return (
    <section style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ color: '#062C4D', fontSize: '2rem', fontWeight: 'bold' }}>
            Ready to dive into <span style={{ color: '#6200EE' }}>HABOT?</span>
          </h2>
          <p style={{ margin: '1rem 0', lineHeight: '1.5rem', fontSize: '1rem' }}>
            Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain
            access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step
            toward realizing your entrepreneurial dreams.
          </p>
          <button
            style={{
              padding: '0.8rem 2rem',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Sign up Today!
          </button>
        </div>

        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            justifyItems: 'center',
          }}
        >
          <button
            style={{
              padding: '1rem',
              backgroundColor: '#fff',
              border: '1px solid orange',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
              width: '100%',
            }}
          >
            Abu Dhabi
          </button>
          <button
            style={{
              padding: '1rem',
              backgroundColor: '#fff',
              border: '1px solid orange',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
              width: '100%',
            }}
          >
            Dubai
          </button>
          <button
            style={{
              padding: '1rem',
              backgroundColor: '#fff',
              border: '1px solid orange',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
              width: '100%',
            }}
          >
            Sharjah & Ajman
          </button>
          <button
            style={{
              padding: '1rem',
              backgroundColor: '#fff',
              border: '1px solid orange',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
              width: '100%',
            }}
          >
            Fujairah
          </button>
          <button
            style={{
              padding: '1rem',
              backgroundColor: '#fff',
              border: '1px solid orange',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
              width: '100%',
            }}
          >
            Ras Al Khaimah
          </button>
          <button
            style={{
              padding: '1rem',
              backgroundColor: '#fff',
              border: '1px solid orange',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
              width: '100%',
            }}
          >
            Umm Al Quwain
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToDive;
