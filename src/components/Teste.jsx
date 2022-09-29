import React from "react";
import { Link } from "react-router-dom";

function YourComponent() {
  return (
    <div>
      <h3>
        You're lost. Go to <Link to="/como-funciona">Ranking</Link>
      </h3>
    </div>
  );
}

export default YourComponent;
