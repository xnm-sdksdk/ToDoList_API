# Todo List API

This is a RESTful API for managing a Todo List built with Express, Mongoose, and MongoDB.

## Features

- Create, read, update, and delete Todo items.
- Store and manage Todo items with titles, descriptions, due dates, priorities, and tags.
- Mark Todo items as completed or pending.
- Filter and sort Todo items based on different criteria.

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.
- MongoDB should be installed locally or accessible via a connection string.

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/todo-list-api.git

   ```

2. Install the dependencies:

   cd todo-list-api
   npm install

3. Configure the MongoDB connection:

   open server.js
   replace the connection with you own

4. Start the server

   npm start - The server will run on: http://127.0.0.1:3000

# API Endpoints

- Create a Todo: Post
- Get all Todos: Get
- Get a Todo By Id: Get
- Update a Todo By Id: Put
- Delete a Todo By Id: Delete
