import React, { useState } from 'react';
import { Table, Modal, Button, Form } from 'react-bootstrap';

const StudentList = ({ students, deleteStudent }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Email Id</th>
          <th>Phone Number</th>
          <th>Father Name</th>
          <th>Gender</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.studentId}>
            <td>{student.studentName}</td>
            <td>{student.emailId}</td>
            <td>{student.phoneNumber}</td>
            <td>{student.fatherName}</td>
            <td>{student.gender}</td>
            <td>
              <Button variant="danger" onClick={() => deleteStudent(student.studentId)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const AddStudentModal = ({ showModal, closeModal, addStudent }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    gender: '',
    fatherName: '',
    motherName: '',
    emailId: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation here

    addStudent(formData);

    closeModal();
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Student</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Add form fields and validation */}
          <Form.Group controlId="studentName">
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="dateOfBirth">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="fatherName">
            <Form.Label>Father Name</Form.Label>
            <Form.Control
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="motherName">
            <Form.Label>Mother Name</Form.Label>
            <Form.Control
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="emailId">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Submit button */}
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const StudentTable = () => {
  const [students, setStudents] = useState([
    {
      studentId: '1',
      studentName: 'John Doe',
      dateOfBirth: '2000-05-15',
      gender: 'Male',
      fatherName: 'David Doe',
      motherName: 'Emily Doe',
      emailId: 'john.doe@example.com',
      phoneNumber: '+1 123-456-7890',
      address: '123 Main Street, Cityville, State, Zipcode',
    },
    {
      studentId: '2',
      studentName: 'Jane Smith',
      dateOfBirth: '2001-03-20',
      gender: 'Female',
      fatherName: 'Michael Smith',
      motherName: 'Sarah Smith',
      emailId: 'jane.smith@example.com',
      phoneNumber: '+1 987-654-3210',
      address: '456 Elm Avenue, Townsville, State, Zipcode',
    },
    {
      studentId: '3',
      studentName: 'Sam Johnson',
      dateOfBirth: '2002-09-10',
      gender: 'Male',
      fatherName: 'Robert Johnson',
      motherName: 'Laura Johnson',
      emailId: 'sam.johnson@example.com',
      phoneNumber: '+1 555-123-4567',
      address: '789 Oak Road, Villagetown, State, Zipcode',
    },
    {
      studentId: '4',
      studentName: 'Emily Brown',
      dateOfBirth: '2003-11-05',
      gender: 'Female',
      fatherName: 'James Brown',
      motherName: 'Maria Brown',
      emailId: 'emily.brown@example.com',
      phoneNumber: '+1 111-222-3333',
      address: '101 Pine Street, Countryside, State, Zipcode',
    },
    {
      studentId: '5',
      studentName: 'Michael Davis',
      dateOfBirth: '2004-07-25',
      gender: 'Male',
      fatherName: 'William Davis',
      motherName: 'Nancy Davis',
      emailId: 'michael.davis@example.com',
      phoneNumber: '+1 333-444-5555',
      address: '222 Birch Lane, Suburbia, State, Zipcode',
    },
  ]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (studentId) => {
    setStudents(students.filter((student) => student.studentId !== studentId));
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1>Student List</h1>
      <Button variant="success" onClick={openModal}>
  Add Student
</Button>


      <AddStudentModal showModal={showModal} closeModal={closeModal} addStudent={addStudent} />

      <StudentList students={students} deleteStudent={deleteStudent} />
    </div>
  );
};

export default StudentTable;
