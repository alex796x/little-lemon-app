import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import BookingForm from './components/bookingForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
