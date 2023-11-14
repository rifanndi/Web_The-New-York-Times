// NavBar.jsx
import React from 'react';

const NavBar = ({ query, setQuery, searchArticles }) => {
  return (
    <nav style={{ background: 'black', height: '75px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', marginLeft: '2.5%', marginRight: '1%' }}>
        <div><h4 className="text-3xl font-bold">The New York Times</h4></div>
        <div style={{ paddingTop: '20px', display: 'flex', height: '10%' }}>
          <input
            type="text"
            className="p-3 border border-gray-300 mb-2 focus:outline-none focus:border-blue-500 transition-all rounded"
            placeholder="Enter keyword..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ width: '70%', maxWidth: '400px' }}
          />
          <button
            className="p-3 bg-blue-500 text-white hover:bg-blue-600 transition-all rounded"
            onClick={searchArticles}
            style={{ width: '100%', maxWidth: '40%', background: 'aqua' }}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
