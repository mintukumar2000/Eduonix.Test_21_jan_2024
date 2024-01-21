import React from 'react';

const PetsCatalogue = () => {
    const petsData = [
        { name: 'Dog1', breed: 'Breed1', age: 2 },
        // Add more pet data
    ];

    return (
        <div className="pets-container">
            <button>Show Available Pets</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Breed</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {petsData.map((pet, index) => (
                        <tr key={index}>
                            <td>{pet.name}</td>
                            <td>{pet.breed}</td>
                            <td>{pet.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PetsCatalogue;
