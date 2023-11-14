import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ButtonVote = ({ artifactId, initialLikes }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const ButtonVote = async () => {
    if (!liked) {
      const updatedLikes = likes + 1;

      try {
        const response = await fetch(`/api/buddha/id/${artifactId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ like: updatedLikes }),
        });

        if (response.ok) {
          alert("Artifact liked successfully!");
          setLiked(true);
          setLikes(updatedLikes);
        } else {
          console.error("Error updating artifact");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  useEffect(() => {
    // Add any additional initialization logic here if needed
  }, [artifactId]); // Include dependencies in the dependency array if needed

  return (
    <div>
      <button onClick={ButtonVote} disabled={liked}>
        {liked ? "Liked!" : "Like"}
      </button>
      <span>Likes: {likes}</span>
    </div>
  );
};

ButtonVote.propTypes = {
  artifactId: PropTypes.string.isRequired,
  initialLikes: PropTypes.number.isRequired,
};

export default ButtonVote;
