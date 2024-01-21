import React, { useState } from 'react';
import AdoptForm from './AdoptForm';
import PetsCatalogue from './PetsCatalogue';

const AdoptionSection = () => {
    const [showAdoptForm, setShowAdoptForm] = useState(false);

    const handleAdoptClick = () => {
        setShowAdoptForm(true);
    };

    const handleShowPetsClick = () => {
        // You can implement logic to fetch pets or toggle visibility
    };

    return (
        <div className="adoption-section">
            <h2>Adoption Section</h2>
            
            {/* Button to show Adopt Form */}
            <button onClick={handleAdoptClick}>Adopt A Pet</button>

            {/* Conditional rendering of Adopt Form */}
            {showAdoptForm && <AdoptForm />}

            {/* Button to show available pets */}
            <button onClick={handleShowPetsClick}>What all pets do we have?</button>

            {/* Display PetsCatalogue */}
            <PetsCatalogue />
        </div>
    );
};

export default AdoptionSection;
