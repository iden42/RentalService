import React from "react";
import { Button, Form } from "react-bootstrap";

export default function Add() {
  return (
    <div
      style={{
        border: "1px solid black",
        marginTop: 35,
        margin: "auto",
        width: 700,
        height: 800,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form>
        <Form.Control className="mb-3" type="file"></Form.Control>
        <Form.Control className="mb-3" placeholder="Name"></Form.Control>
        <Form.Control className="mb-3" placeholder="City"></Form.Control>
        <Form.Control className="mb-3" placeholder="Adress"></Form.Control>
        <Form.Control className="mb-3" placeholder="Description"></Form.Control>
        <Form.Control className="mb-3" placeholder="Area"></Form.Control>
        <Form.Control className="mb-3" placeholder="Price"></Form.Control>
        <Button variant="outline-success"> Add</Button>
      </Form>
    </div>
  );
}
