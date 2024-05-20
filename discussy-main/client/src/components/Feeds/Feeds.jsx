import React, { useState } from 'react';
import './Feeds.css';

const Feeds = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNoMatchMessage, setShowNoMatchMessage] = useState(false);
  const [filteredFeeds, setFilteredFeeds] = useState([]);

  const handleSearchInput = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setShowNoMatchMessage(false); 
    if (query.trim() === '') {
      setFilteredFeeds([]);
    } else {
      filterFeeds(query);
    }
  };


  const filterFeeds = (query) => {
    const filtered = feeds.filter((feed) =>
      feed.content.toLowerCase().includes(query.toLowerCase()) ||
      feed.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFeeds(filtered);
    if (filtered.length === 0 && query.trim() !== '') {
      setShowNoMatchMessage(true); 
    }
  };

  const feeds = [
    {
      id: 1,
      title: 'Temenos 1',
      userId: 'User Id',
      content:
        'At Temenos we have always aimed to keep developing the functionality...',
    },
    {
      id: 2,
      title: 'Website',
      userId: 'User Id',
      content:
        'Publish your passions your way. Whether youd like to share your knowledge, experiences or the latest news, create a unique and beautiful blog.',
    },
    {
      id: 3,
      title: 'Blog',
      userId: 'User Id',
      content:
        'A blog (a truncation of "weblog") is an informational website consisting of discrete, often informal diary-style text entries (posts).',
    },
    {
      id: 4,
      title: 'Transact',
      userId: 'User Id',
      content:
        'T24 Transact core banking software is a real-time core banking system, which is designed to allow banks to scale quickly using cloud platforms and traditional infrastructure. Aspire Systems is a Temenos implementation partner.',
    },
    {
      id: 5,
      title: 'Infinity',
      userId: 'User Id',
      content:
        'Infinity is the platform for business transformation that helps financial institutions to accelerate their digital transformation initiatives.'
    },
  ];

  return (
    <div>
      <div className="SearchContainer">
        <span className="Search">
          <i className="fa fa-search searchIcon"></i>
        </span>
        <input
          type="text"
          placeholder="Search here..."
          className="searchBar"
          value={searchQuery}
          onChange={handleSearchInput}
        />
      </div>
      <div className="feedsParent">
        <h3>Gain Info and Share it....</h3>
        {filteredFeeds.length > 0 ? (
          filteredFeeds.map((feed) => (
            <div key={feed.id} className="container">
              <h3>
                <b>{feed.title}</b>
              </h3>
              <h5>
                <b>{feed.userId}</b>
              </h5>
              <p>{feed.content}</p>
              <button className="viewButton">View</button>
            </div>
          ))
        ) :  (
          feeds.map((feed) => (
            <div key={feed.id} className="container">
              <h3>
                <b>{feed.title}</b>
              </h3>
              <h5>
                <b>{feed.userId}</b>
              </h5>
              <p>{feed.content}</p>
              <button className="viewButton">View</button>
            </div>
          ))
        )}
       </div>
       {showNoMatchMessage && (
         <div className="popup-message">
           <p>No matching feeds found</p>
         </div>
       )}
   </div> 
  );
};

export default Feeds;
