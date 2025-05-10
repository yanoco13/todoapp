'use client';
import { useState } from 'react';
import Modal from '../components/Modal';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Next.js Modal Example</h1>
            <button onClick={openModal} style={buttonStyles}>
                Open Modal
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Modal Title</h2>
                <p>This is the content of the modal window.</p>
            </Modal>
        </div>
    );
};

const buttonStyles = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
};

export default Home;
