# ProtectedText Clone

This project is a clone of the ProtectedText website, built using Django and Bootstrap.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Learning Outcomes](#learning-outcomes)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Project Overview
This project replicates the functionality of the ProtectedText website, providing a secure and user-friendly interface for storing and managing text. The main objective was to understand and implement RESTful APIs and XHR calls in both asynchronous and synchronous modes.

## Features
- **Text Encryption**: Client-side text encryption for secure data storage.
- **RESTful API**: Implemented a RESTful API for data management.
- **Asynchronous and Synchronous XHR Calls**: Utilized XHR calls for efficient data retrieval and updates.
- **Responsive Design**: Built using Bootstrap for a responsive and mobile-friendly design.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Django
- **Database**: SQLite
- **API**: Django REST framework

## Screenshots 
Here are some screenshots:

![Screenshot (1)](https://github.com/user-attachments/assets/5dad4f15-36e2-43ed-bf06-effb870589fb)
![Screenshot (2)](https://github.com/user-attachments/assets/73bde4ae-f228-400d-bbee-a2ff65c59bd2)
![Screenshot (3)](https://github.com/user-attachments/assets/54621933-3b2d-46ad-b863-524aeee59a98)
![Screenshot (4)](https://github.com/user-attachments/assets/3365fa67-a86d-4e31-8093-40ce17c6174b)
![Screenshot (5)](https://github.com/user-attachments/assets/5e34fe02-dffe-4372-ae26-03a583784258)

## Installation
To set up this project locally, follow these steps:

1. Clone the repository:
    ```bash
    https://github.com/MJTech46/Django-ProtectedText-clone.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Django-ProtectedText-clone
    ```
3. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```
4. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```
5. Run database migrations:
    ```bash
    python manage.py migrate
    ```
6. Start the development server:
    ```bash
    python manage.py runserver
    ```

## Usage
1. Open your browser and navigate to `http://localhost:8000`.
2. Create a new page using the input box or directly typing it to the url.
3. Use the interface to store and manage your encrypted text.

## Learning Outcomes
From this project, valuable experience was gained in:
- Developing and consuming RESTful APIs.
- Making XHR calls both asynchronously and synchronously.
- Implementing secure client-side encryption.
- Designing responsive web interfaces using Bootstrap.
- Integrating frontend and backend technologies using Django.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements
Thanks to ProtectedText for the inspiration. Special thanks to the Django and Bootstrap communities for their excellent documentation and support.
