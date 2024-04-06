import React from "react";
import "../style/popUp.css";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, onClose, onTClick, onSClick }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login as:</h2>
        <button onClick={onTClick}>
          <Link className="link-popup" to="/tlogin">
            Teacher
          </Link>
        </button>
        <button onClick={onSClick}>
          <Link className="link-popup" to="/login">
            Student
          </Link>
        </button>
        <button onClick={onClose} className="popup-cancel">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
