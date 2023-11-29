import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add the submitted data to the state
    setSubmittedData([...submittedData, { name, email }]);

    // Clear the input fields
    setName('');
    setEmail('');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      
      {submittedData.length > 0 && (
        <div>
          <h2>Submitted Data:</h2>
          <ul>
            {submittedData.map((data, index) => (
              <li key={index}>
                <p>Name: {data.name}</p>
                <p>Email: {data.email}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {posts ? (
        <div>
          <h2>List of Posts:</h2>
          <ul>
            {posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
