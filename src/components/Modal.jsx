import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AppContext } from './App';

function MyModal({elem}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { trips, setTrips } = useContext(AppContext);

  const handleRemoveTrip = (tripName) => {
        const updatedTrips = trips.filter(trip => trip.travel !== tripName);
        setTrips(updatedTrips);
    
        localStorage.setItem('trips', JSON.stringify(updatedTrips));
        setShow(false)
  };

  return (
    <>
      <Button className='ms-3 px-3 rounded-5 my-secondary-btn' style={{ border:'none' }} onClick={handleShow}>
        <span><i className="fa-solid fa-trash"></i></span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Attenzione</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sei sicuro di voler rimuovere l'intero viaggio? L'azione è irreversibile.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annulla
          </Button>
          <Button variant="danger"  onClick={() => handleRemoveTrip(elem.travel)}>
            Rimuovi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;