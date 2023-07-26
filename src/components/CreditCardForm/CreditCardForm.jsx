import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and payment processing here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="cardNumber">
        <Form.Label>Número de Tarjeta</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el número de la tarjeta"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="cardHolder">
        <Form.Label>Titular de la Tarjeta</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre del titular de la tarjeta"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="expirationDate">
        <Form.Label>Fecha de Expiración</Form.Label>
        <Form.Control
          type="text"
          placeholder="MM/AA"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="securityCode">
        <Form.Label>Código de Seguridad</Form.Label>
        <Form.Control
          type="text"
          placeholder="CVC/CVV"
          value={securityCode}
          onChange={(e) => setSecurityCode(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Pagar
      </Button>
    </Form>
  );
};

export default CreditCardForm;
