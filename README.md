## OrganicFood — Grocery E-Commerce Platform

# Live Site: https://organic-food-nextjs.vercel.app

OrganicFood is a full-stack grocery e-commerce web application built with Next.js on the frontend and Express.js + MongoDB on the backend.
The platform allows users to browse products, create accounts, log in securely, add items to a cart, and place orders through a modern and responsive interface.

# Project Description

OrganicFood is designed to simulate a real-world online grocery store.
It focuses on clean UI, smooth navigation, and essential e-commerce functionality such as authentication, cart management, and order placement.
The project demonstrates full-stack development skills using modern JavaScript technologies and RESTful API architecture.

# Tech Stack
   ## Frontend

    Next.js (App Router)

    React

    Tailwind CSS

    Client Components & Hooks

    Backend

    Node.js

    Express.js

    MongoDB (Mongoose)

    REST API

    Deployment

    Frontend: Vercel

   ## Backend: Hosted separately (Express API)

# Setup & Installation Instructions
    1 .Clone the repository
        git clone https://github.com/your-username/organicfood-nextjs.git
        cd organicfood-nextjs
    
    2. Install frontend dependencies
        npm install

    3. Environment Variables
        Create a .env.local file in the root directory and configure: NEXT_PUBLIC_API_URL=https://your-backend-api-url

    4. Run the site
        npm run dev

# Route Summary
    | Route            | Description                        |
    | ---------------- | ---------------------------------- |
    | `/`              | Home page                          |
    | `/products`      | Product listing                    |
    | `/products/[id]` | Product details                    |
    | `/login`         | User login                         |
    | `/add-product`   | Add new product (authorized users) |
    | ---------------- | ---------------------------------- |

# Implemented Features
   1. Public product browsing

   2. User registration & login

   3. Product details page

   4. Shopping cart functionality

   5. Order placement

   6. Responsive UI (mobile & desktop)

   7. Backend REST API with MongoDB

   8. Protected routes for authorized actions

# Login Credentials
    email: admin@example.com
    Password: 123456
