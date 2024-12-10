import React from 'react';
import './Footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="small-footer bg-dark text-light py-2">
      <div className="container text-center">
        <p className="mb-0">© 2024 MyBrand. All Rights Reserved.</p>
        <p className="mb-0">
          <a href="#privacy" className="text-light me-3">Privacy Policy</a>
          <a href="#terms" className="text-light">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
