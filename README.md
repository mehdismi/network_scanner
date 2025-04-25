# Project Title: SmartScan: Web-based Network Vulnerability Scanner.
# 🔹 Project Description:

SmartScan is a full-stack web application that allows authenticated users to perform various types of network scans through a user-friendly interface. The application is designed to support IT administrators and security professionals in discovering live hosts, open ports, OS fingerprints, and service versions using the Nmap engine in the backend. The scanning process is customizable and results are stored in a PostgreSQL database for visualization and future reference.


| **Category**                | **Technology**                          |
|-----------------------------|-----------------------------------------|
| **Frontend**                | React.js                                |
| **Backend**                 | Django (Django REST Framework)          |
| **Database**                | PostgreSQL                              |
| **Network Scanning Tool**   | Nmap                                    |
| **Containerization (Optional)** | Docker                            |
| **Visualization**           | Chart.js / ApexCharts (for dashboard)   |



🔹 RESTful API Design
The application will expose a RESTful API with the following core endpoints:

🔐 Authentication
POST /api/register/ – Register a new user

POST /api/login/ – Login with username & password

POST /api/logout/ – Logout current user

📡 Scan Management
POST /api/scans/ – Create a new scan

GET /api/scans/ – List all scans for the current user

GET /api/scans/{id}/ – Retrieve detailed information for a scan

PUT /api/scans/{id}/ – Edit scan configuration

DELETE /api/scans/{id}/ – Delete a scan

POST /api/scans/{id}/run/ – Execute the scan

📊 Dashboard (Optional)
GET /api/dashboard/summary/ – Fetch aggregated scan statistics for charts
