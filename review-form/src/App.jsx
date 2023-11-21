import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      name,
      email,
      review,
    };

    setReviews([...reviews, newReview]);

    setName('');
    setEmail('');
    setReview('');
  };

  return (
    <>
      <div className='form'>
        <h1>Review Form</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
           <p style={{paddingBottom: "10px"}}>Review:</p> 
            <textarea value={review} onChange={handleReviewChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>

        <div>
          <h2>Reviews</h2>
          {reviews.map((rev, index) => (
            <div key={index}>
              <strong>Name: {rev.name}</strong> <br /> Email: ({rev.email}):  <br /> Review: {rev.review}
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default App
