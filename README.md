# Project Title: NetScan: Web-based Network Scanner.
# Project Description:

SmartScan is a full-stack web application that allows authenticated users to perform various types of network scans through a user-friendly interface. The application is designed to support IT administrators and security professionals in discovering live hosts, open ports, OS fingerprints, and service versions using the Nmap engine in the backend. The scanning process is customizable and results are stored in a PostgreSQL database for visualization and future reference.

# Technology Stack

| **Category**                | **Technology**                          |
|-----------------------------|-----------------------------------------|
| **Frontend**                | React.js                                |
| **Backend**                 | Django (Django REST Framework)          |
| **Database**                | PostgreSQL                              |
| **Network Scanning Tool**   | Nmap                                    |
| **Containerization** | Docker                            |
| **Visualization**           | Chart.js / ApexCharts (for dashboard)   |



# RESTful API Design

The application exposes a RESTful API with the following core endpoints:

#### 🔐 Authentication
| Method | Endpoint           | Description                          |
|--------|--------------------|--------------------------------------|
| POST   | `/api/register/`   | Register a new user                  |
| POST   | `/api/login/`      | Login with username & password       |
| POST   | `/api/logout/`     | Logout current user                  |

#### 📡 Scan Management
| Method | Endpoint                  | Description                                 |
|--------|---------------------------|---------------------------------------------|
| POST   | `/api/scans/`             | Create a new scan                           |
| GET    | `/api/scans/`             | List all scans for the current user         |
| GET    | `/api/scans/{id}/`        | Retrieve detailed information for a scan    |
| PUT    | `/api/scans/{id}/`        | Edit scan configuration                     |
| DELETE | `/api/scans/{id}/`        | Delete a scan                               |
| POST   | `/api/scans/{id}/run/`    | Execute the scan                            |

#### 📊 Dashboard (Optional)
| Method | Endpoint                   | Description                                  |
|--------|----------------------------|----------------------------------------------|
| GET    | `/api/dashboard/summary/`  | Fetch aggregated scan statistics for charts  |


### Database Design

#### User Table
- `id`
- `username`
- `first_name`
- `last_name`
- `password`

#### 📡 Scan Table
- `id`
- `user_id` (Foreign Key)
- `name`
- `description`
- `target`
- `type`
- `status`
- `created_at`
- `updated_at`
- `result_file`

---

### Scan Types (Defined by the user)

| Scan Type                         | Command                                      |
|----------------------------------|----------------------------------------------|
| **Host Discovery**               | `nmap <target> -sn -oX result.xml`           |
| **Open Port Scan**               | `nmap <target> --open -oX result.xml`        |
| **OS, Services & Version Detection** | `nmap <target> -A -oX result.xml`       |


### User Roles

All users are authenticated. Roles are limited to the following:

#### 👤 Registered User

- Create/edit/delete scans  
- Run scans  
- View detailed results  
- Access dashboard visualizations

### Planned Features

- ✅ User registration and login  
- ✅ Form to define and submit a scan  
- ✅ Execution of selected scan types using Nmap  
- ✅ View and manage scan history  
- ✅ View scan details with parsed structured results  
- ✅ Interactive dashboard for visualization  
- ✅ Download scan reports (planned)


# Deployment Plan
Both the backend and frontend will be installed using a Bash script instead of containerization. The PostgreSQL database will be configured manually during setup.
