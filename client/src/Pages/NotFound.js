import React from "react";

export default function NotFound() {
  return (
    <div>
      <div className="container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <a href="/" className="btn btn-primary">
          home page
        </a>
      </div>
    </div>
  );
}
