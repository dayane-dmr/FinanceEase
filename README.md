# FinanceEase: Personal Finance Management App 

# Project Overview: FinanceEase
FinanceEase is a SaaS platform for personal financial management. Its primary focus is to help users track income and expenses, categorize transactions, and import transaction data through CSV uploads. It features a modern design powered by Next.js, React, TailwindCSS, and Shadcn UI, with an efficient backend built using Hono.js and a PostgreSQL database managed by Drizzle ORM.

# Developed Features
* Authentication:

Implemented using Clerk, ensuring secure login functionality.

Middleware protects sensitive routes and authenticates users effectively.


* Account Management:

Full CRUD functionality for financial accounts: create, edit, list, and delete.

Dynamic forms with validations using Zod and React Hook Form.

* Transactions:

CSV file upload for importing transactions using react-papaparse.

Interactive tables to display and organize imported transactions.

* UI and Navigation:

A header featuring a dynamic menu, logo, and user button via UserButton.

Stylish pages built with TailwindCSS, including forms, tables, and modals.

* Backend and API:

API built with Hono.js for lightweight and fast backend functionality.

React Query integration for asynchronous state management.

Efficient cache management, automatically invalidating relevant data after mutations.

* Additional Features:

Success and error notifications powered by Sonner.

Modular structure for easy scalability.


# Tools and Technologies

* Next.js: Framework for SSR and SSG.
* React: Core library for the user interface.
* React Query: Asynchronous state management.
* Zod: Robust data validation.
* Clerk: User authentication.
* Drizzle ORM: PostgreSQL database management.
* TailwindCSS and Shadcn UI: Styling and UI components.
* Hono.js: Lightweight backend framework.
* Challenges Overcome
* Compatibility issues between libraries (e.g., cuid2 and react-query).
* Initial configuration of various tools, such as Clerk, Drizzle, and react-query.
* Implementation of CSV upload and dynamic table rendering.

# Challenges Overcome

Compatibility issues between libraries (e.g., cuid2 and react-query).

Implementation of CSV upload and dynamic table rendering.


## Project Setup ##
To get started with the app, follow these steps:

Clone the repository:

git clone https://github.com/DYNDMR/FinanceEase.git
cd FinanceEase

Install dependencies:

npm install

Run the development server:

npm run dev

Open your browser and go to: http://localhost:3000

