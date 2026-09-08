# Python Development Tasks

This repository contains the Python and web development practice projects completed during my learning of Django(Python-Internship). It includes Python utilities, frontend applications, web scraping, and Django web applications.

## Projects

### 1. Blog Website

Location: `Blog-Website/Blog`

A Django blog application that displays published posts and provides individual post pages.

Key features:

- List all blog posts
- View an individual post by its ID
- Store posts with Django models
- Manage posts through the Django admin panel

### 2. Inventory Management App

Location: `Inventory App/inventory_managment`

A Django inventory application for managing stock items and categories.

Key features:

- User registration and authentication
- User-specific inventory dashboards
- Add, edit, and delete inventory items
- Category support
- Low-stock notifications
- SQLite database storage

### 3. Password Generator

Location: `Password Generator Task 1/`

A command-line password generator that creates passwords based on a selected strength level.

Supported strength levels:

- `weak`: uppercase and lowercase letters
- `medium`: letters and numbers
- `strong`: letters, numbers, and symbols

Generated passwords can be saved with a timestamp in `passwords.txt`.

### 4. To-Do List

Location: `To-Do List/`

A browser-based task board built with HTML, CSS, and JavaScript.

Key features:

- Add new tasks
- Edit existing tasks
- Move tasks through To Do, In Progress, and Done columns
- Delete tasks
- Persist tasks in browser `localStorage`

### 5. User Authentication Project

Location: `User-Project/userapp`

A Django application that demonstrates session-based user authentication.

Key features:

- User login and logout
- Authentication-protected home page
- Redirect unauthenticated users to the login page
- Django session management

### 6. Weather App

Location: `Weather-App/weatherDetector`

A Django weather application that retrieves weather information for a searched city using the OpenWeather API.

Displayed information includes:

- Country code
- Coordinates
- Temperature in Kelvin and Celsius
- Atmospheric pressure
- Humidity

### 7. Book Web Scraper

Location: `Web-Scrapper/`

A Python web scraper for [Books to Scrape](https://books.toscrape.com/), built with `requests` and `BeautifulSoup`.

The scraper collects book titles, prices, and ratings from the available pages and writes the results to `books.csv`.

## Technologies Used

- Python
- Django
- HTML, CSS, and JavaScript
- SQLite
- Requests
- BeautifulSoup
- CSV data processing
- Browser `localStorage`

## Running the Projects

### Django applications

Open a terminal in the relevant project directory, install Django if needed, and run the development server:

```powershell
cd "Blog-Website\Blog"
python manage.py runserver
```

The same command can be used from these Django project directories:

```text
Inventory App\inventory_managment
User-Project\userapp
Weather-App\weatherDetector
```

For the inventory project, install its dependencies first:

```powershell
cd "Inventory App"
pip install -r requirements.txt
cd inventory_managment
python manage.py runserver
```

### Password generator

```powershell
cd "Password Generator Task 1"
python main.py
```

### Book scraper

```powershell
cd Web-Scrapper
python main.py
```

### To-do list

Open `To-Do List/index.html` in a web browser.

## Learning Outcomes

These tasks provided practical experience with:

- Python functions, modules, file handling, and exception handling
- Secure random password generation
- Web scraping and CSV output
- Django models, views, URLs, templates, forms, and authentication
- CRUD operations and database-backed applications
- Client-side JavaScript and browser storage
- Consuming data from a third-party API
