import React, { useState } from 'react';
import GiveAwayForm from './GiveAwayForm';

const GiveAwaySection = () => {
    const [showGiveAwayForm, setShowGiveAwayForm] = useState(false);

    const handleGiveAwayClick = () => {
        setShowGiveAwayForm(true);
    };

    return (
        <div className="give-away-section">
            <h2>Give Away Section</h2>
            
            {/* Button to show Give Away Form */}
            <button onClick={handleGiveAwayClick}>Give Away A Pet</button>

            {/* Conditional rendering of Give Away Form */}
            {showGiveAwayForm && <GiveAwayForm />}
        </div>
    );
};

export default GiveAwaySection;
