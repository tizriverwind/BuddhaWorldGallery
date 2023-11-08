import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ImageDetail = () => {
  let { imageId } = useParams();
  const [imageDetails, setImageDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch image details and comments when components mounts
  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/images/${imageId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setImageDetails(data);
        return fetch(`/api/comments/${imageId}`);
      })
      .then(response => response.json())
      .then(commentsData => {
        setComments(commentsData);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching image details:', error);
        setError(error.message);
        setIsLoading(false);
      });
  }, [imageId]);

// Handler for new comment submission
const handleCommentSubmit = (event) => {
  event.preventDefault();
  const commentText = event.target.elements.comment.value;
  // POST the new comment to your API
  fetch(`/api/comments/${imageId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: commentText })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(response => response.json())
  .then(newComment => {
    setComments(comments.concat(newComment)); // Use concat to dd the new comment to the local state
    event.target.reset(); // Reset the form to clear the text area
  })
  .catch(error => {
    console.error('Error posting comment:', error)
  });
};

  if (isLoading) {
    return <div>Loading image details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="image-detail-container">
      <img src={imageDetails.img} alt={imageDetails.name} />
      <div className="artifact-details">
        <h2>{imageDetails.name}</h2>
        <p><strong>Dynasty:</strong> {imageDetails.dynasty}</p>
        <p><strong>Museum:</strong> {imageDetails.museum}</p>
        {/* You can add more details here as needed */}
      </div>
      
      <div className="comments-section">
        <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment.text}</p> {/* Adjust according to your comment structure */}
          </div>
        ))}
        <form onSubmit={handleCommentSubmit}>
          <textarea name="comment" placeholder="Leave a comment..." />
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  );
};

export default ImageDetail;
