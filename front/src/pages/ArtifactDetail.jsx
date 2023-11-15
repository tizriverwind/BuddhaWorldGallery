import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { DeleteArtifact } from "./DeleteArtifact";
import Navbar from "../components/navbar/Navbar";
import "./ArtifactDetail.css";

export default function ArtifactDetail() {
  const [artifact, setArtifact] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { artifactId } = useParams();

  useEffect(() => {
    // fetch artifacts data
    async function fetchArtifact() {
      try {
        const response = await fetch(`/api/buddha/id/${artifactId}`);
        if (response.ok) {
          const data = await response.json();
          setArtifact(data);
        } else {
          console.error("Artifact not found");
        }
      } catch (error) {
        console.error("Error fetching artifact:", error);
      }
    }
    fetchArtifact();

    //  fetch comment data
    async function fetchComments() {
      try {
        const response = await fetch(`/api/buddha/id/${artifactId}/comments`);
        if (response.ok) {
          const data = await response.json();
          setComments(data);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }
    fetchComments();
  }, [artifactId]);

  if (!artifact) {
    return <div>Loading...</div>;
  }

  const submitComment = async (e) => {
    e.preventDefault();
    if (newComment) {
      try {
        const response = await fetch(`/api/buddha/id/${artifactId}/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: newComment }),
        });

        if (response.ok) {
          const updatedResponse = await fetch(
            `/api/buddha/id/${artifactId}/comments`
          );
          console.log(updatedResponse);
          if (updatedResponse.ok) {
            const updatedData = await updatedResponse.json();
            console.log(updatedData);
            setComments(updatedData);
          }

          setNewComment("");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const deleteComment = async (commentId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (confirmed) {
      const response = await fetch(`/api/buddha/comments/${commentId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setComments(comments.filter((comment) => comment._id !== commentId));
      }
    }
  };

  return (
    <div className="container my-5">
      <Navbar />
      <div className="card">
        <img
          src={artifact.image}
          alt={artifact.name}
          className="card-img-top"
        />
        <div className="card-body">
          <h1 className="card-title">{artifact.name}</h1>
          <p className="card-text">{artifact.museum}</p>

          <div className="card-btn">
            <Link
              to={`/buddha/edit/id/${artifactId}`}
              className="btn btn-secondary mx-2"
            >
              Edit
            </Link>
            <DeleteArtifact artifactId={artifactId} />
          </div>
          <section className="comment-section">
            <h2>Comments</h2>
            {comments.map((comment) => (
              <div key={comment._id}>
                <p>{comment.text}</p>
                <button onClick={() => deleteComment(comment._id)}>
                  Delete Comment
                </button>
              </div>
            ))}
            <div className="comment-form">
              <form>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write your comment here"
                  required
                />
                <button onClick={(e) => submitComment(e)}>
                  Submit Comment
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
