import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './MapSideBar.css'; 

const MapSideBar = ({ newsByLoc = [] }) => {
  const navigate = useNavigate(); // Initialize navigate function

  const handlePostNavigation = (loc, headline) => {
    const postData = {
      "city": "Beirut",
      "selectedReaction": null,
      "counters": [120, 10, 0, 0, 3, 1, 2, 0],
      "headline": "متعاقدو الأساسي الرسمي: نطالب الحكومة بالعودة عن قرارها المجحف",
      "body": "وللمناسبة، قالت رئيسة الرابطة نسرين شاهين: \"جئنا اليوم لندافع عن كرامة المعلمين...\"",
      "sourceName": "MTV",
      "SRR": 3.6,
      "PTS": 78,
      "dateTime": "4/18/2025 15:53",
      "admin": ""
    };
    // TO-DO Query
    // useEffect(() => {
  //   axios.get("http://localhost:4000/posts") // TO-DO Query Change Port Number
  //     .then(response => {
  //       setPosts(response.data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching posts:", error);
  //     })
  // }, []);
    const query = new URLSearchParams(postData).toString();
    navigate(`/post?${query}`);
  };  

  return (
    <div className="map-sidebar"> {/* Container for the sidebar */}
      
      {/* Title of the Sidebar */}
      <h3 className='map-sidebar-title'>📰 Latest News by Location</h3>
      
      {/* List of news headlines */}
      <div className="headline-list">
        {newsByLoc.map((loc, index) => (
          <div key={index} className="city-headlines"> {/* City-specific container */}
            
            {/* City name as header */}
            <h3>{loc.city}</h3>
            
            {/* Headlines for the city */}
            <ul>
              {loc.headlines.map((headline, i) => (
                <li
                  key={i}
                  onClick={() => handlePostNavigation(loc, headline)} 
                  title="See Post"  
                  className="headline-item"  
                >
                  {/* Headline Text */}
                  <span className="headline-text">{headline}</span>

                  {/* Arrow Button to "See Post" */}
                  <button
                    className="see-post-button"
                    onClick={(e) => {
                      e.stopPropagation();  {/* Prevents event from bubbling up */}
                      handlePostNavigation(loc, headline);  {/* Navigate to SinglePostView */}
                    }}
                    title="See Post"
                  >
                    ➜ {/* Arrow pointing to the left */}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapSideBar;