import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (response.ok) {
          const result = await response.json();
          setPosts(result);
        } else {
          console.error('Error fetching data from the API');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

  
    fetchData();
  }, []); 

  return (
    <div>
      {posts ? (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
