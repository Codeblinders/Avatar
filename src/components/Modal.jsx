import React from 'react';
import './Modal.css';

const Modal = ({ onClose, isClosing }) => (
  <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={onClose}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <button className="close-button" onClick={onClose}>×</button>
      <h2>Create New Avatar</h2>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Avatar URL:
          <input type="text" />
        </label>
        <button type="button" onClick={onClose}>Save</button>
      </form>
    </div>
  </div>
);


export default Modal;