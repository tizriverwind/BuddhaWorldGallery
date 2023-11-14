import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function EditArtifact() {
  const [artifactData, setArtifact] = useState({
    dynasty: "",
    image: "",
    museum: "",
    name: "",
  });
  const { artifactId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchArtifact() {
      try {
        const response = await fetch(`/api/buddha/id/${artifactId}`);
        if (response.ok) {
          const data = await response.json();
          setArtifact(data);
        } else {
          alert("Artifact failted to update");
          console.error("Error fetching artifact details");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchArtifact();
  }, [artifactId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtifact((prevArtifactData) => ({
      ...prevArtifactData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/buddha/edit/id/${artifactId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dynasty: artifactData.dynasty,
          image: artifactData.image,
          museum: artifactData.museum,
          name: artifactData.name,
        }),
      });

      if (response.ok) {
        alert("Artifact updated successfully!");
        navigate(`/buddha/id/${artifactId}`);
      } else {
        console.error("Error updating artifact");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Edit Artifact</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="dynasty">Dynasty</label>
            <div className="form-group mb-3">
              <input
                type="text"
                name="dynasty"
                value={artifactData.dynasty}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="imagelink">Image Link</label>
              <input
                type="text"
                name="image"
                value={artifactData.image}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="weblink">Museum</label>
              <input
                type="text"
                name="museum"
                value={artifactData.museum}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="description">Name</label>
              <textarea
                name="name"
                value={artifactData.name}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update Artifact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

EditArtifact.propTypes = {};
