// HomePage.jsx

import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const locations = [
  {
    name: "Europe",
    description: "Explore Buddha artifacts from Europe",
    imageUrl: "path_to_european_image", // replace with your image path
    path: "/europe"
  },
  {
    name: "Asia",
    description: "Discover Buddha artifacts from Asia",
    imageUrl: "path_to_asian_image", //replace with your image path
    path: "/asia"
  },
  {
    name: "North America",
    description: "View Buddha artifacts from North America",
    imageUrl: "path_to_north_american_image", // replace with your image path
    path: "/north-america"
  }
];

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToLocation = (path) => {
    navigate(path);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {locations.map((location) => (
          <div className="col-md-4" key={location.name}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={location.imageUrl} />
              <Card.Body>
                <Card.Title>{location.name}</Card.Title>
                <Card.Text>
                  {location.description}
                </Card.Text>
                <Button variant="primary" onClick={() => navigateToLocation(location.path)}>
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
