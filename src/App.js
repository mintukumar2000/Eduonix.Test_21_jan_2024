import React from 'react';
import Header from './components/Header';
import AdoptionSection from './components/AdoptionSection';
import GiveAwaySection from './components/GiveAwaySection';
import Footer from './components/Footer';
import PetsCatalogue from './components/PetsCatalogue';

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <AdoptionSection />
            <GiveAwaySection />
            <PetsCatalogue />
            <Footer />
        </div>
    );
};

export default App;
