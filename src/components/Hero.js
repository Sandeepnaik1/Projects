import React from 'react';

function Header() {
  return (
    <header style={{ background: '#062C4D', padding: '2rem', color: '#fff' }}>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>Are You a Supplier?</h1>
      <p style={{ textAlign: 'center', margin: '1rem 0' }}>Explore Matching Opportunities.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <input type="text" placeholder="Search your required service here" style={{ padding: '0.5rem', width: '20%' }} />
        <input type="text" placeholder="Search your desired location here" style={{ padding: '0.5rem', width: '20%' }} />
        <button style={{ padding: '0.5rem 1rem', background: 'green', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Search
        </button>
      </div>
    </header>
  );
}

export default Header;
