CNS ALA Simulation System
Project Overview

This project presents the implementation of Applied Learning Assignments (ALA) for the subject Cryptography and Network Security. It demonstrates fundamental cryptographic techniques through an interactive web-based interface.

The system includes three core modules:

Digital Signature using RSA
SHA Hash Analysis (SHA-1 and SHA-256)
HMAC Authentication
Features

Interactive browser-based simulation
Clean and responsive user interface using Bootstrap
Step-by-step navigation between modules
Pre-generated PDF outputs for reference
Structured academic presentation

Project Structure

bash
CNS-ALA/
│── index.html
│── style.css
│── script.js
│
├── ala/
│   ├── ala1.html
│   ├── ala2.html
│   ├── ala3.html
│   ├── js/
│   │   ├── original_ala1.js
│   │   ├── original_ala2.js
│   │   ├── original_ala3.js
│
├── PDFs/
│   ├── ala1.pdf
│   ├── ala2.pdf
│   ├── ala3.pdf
│
├── images/
│   ├── gmiu.webp


Working Principle
Cryptographic algorithms are implemented using JavaScript (Web Crypto API).
Each ALA module performs its respective operation directly in the browser.
For documentation purposes, equivalent implementations are executed locally using Python.
The outputs from Python execution are exported and stored as PDF files in the PDFs directory.

How to Run the Project

1. Download or clone the repository.
2. Open the index.html file in any modern web browser.
3. Select one of the following modes:

   Manual Execution: Interact with ALA modules.
   View Output PDF: Open pre-generated results.

Navigation Flow

    ALA 1 → ALA 2 → ALA 3
    Users can move using Previous and Next buttons.
    Final module provides option to return to the home page.

Requirements

    A modern web browser (Chrome, Edge, or Firefox recommended)
    No server or installation required

Developer Information

    Name: Vishva Parmar
    Enrollment Number: 240905091015
    Subject: Cryptography and Network Security
    University: Gyanmanjari Innovative University

Notes

    This project is developed for academic purposes to demonstrate core cryptographic concepts and their practical implementation in a web environment.
