# Task Manager - Full Stack Application

A modern, full-stack task management application built with React, Node.js/Express, and MongoDB. Features JWT authentication, responsive design with TailwindCSS, and complete CRUD operations.

## 🚀 Features

### ✅ Frontend (React + Vite)
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Authentication**: JWT-based login/signup with protected routes
- **Dashboard**: Create, read, update, and delete tasks
- **Search & Filter**: Real-time search, filter by status and priority
- **Profile Management**: View and update user profile
- **Modern UI**: Clean, intuitive interface with smooth interactions

### ✅ Backend (Node.js + Express)
- **Authentication**: JWT tokens with 30-day expiration
- **Password Security**: bcryptjs hashing with salt rounds
- **Database**: MongoDB with Mongoose ORM
- **API Validation**: express-validator for input validation
- **Error Handling**: Comprehensive error handling middleware
- **CORS**: Enabled for cross-origin requests

### ✅ Database Models
- **User**: name, email (unique), password (hashed), bio, avatar, timestamps
- **Task**: title, description, status (todo/in-progress/completed), priority (low/medium/high), user reference, dueDate, timestamps

---

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- npm or yarn
- Postman (for API testing)

---

## 🛠️ Installation & Setup

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file:** (copy from `.env.example`)
   ```bash
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/task-app
   JWT_SECRET=your_jwt_secret_key_here_change_in_production
   NODE_ENV=development
   ```

4. **Ensure MongoDB is running:**
   ```bash
   # On Windows, if using local MongoDB
   # Start MongoDB service or run mongod
   mongod
   ```

5. **Start the backend server:**
   ```bash
   # Development mode with auto-reload
   npm run dev

   # Production mode
   npm start
   ```

   Backend will run on: `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   Frontend will run on: `http://localhost:3000`

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register User
```
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

Response (201):
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "avatar": "default_url"
  }
}
```

#### Login User
```
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response (200):
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": { ... }
}
```

#### Get Profile
```
GET /auth/profile
Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "bio": "",
    "avatar": "url",
    "createdAt": "2025-11-24T..."
  }
}
```

#### Update Profile
```
PUT /auth/profile
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Jane Doe",
  "bio": "New bio",
  "avatar": "https://example.com/avatar.jpg"
}

Response (200):
{
  "success": true,
  "user": { ... }
}
```

### Task Endpoints

#### Create Task
```
POST /tasks
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the documentation",
  "priority": "high",
  "dueDate": "2025-12-31"
}

Response (201):
{
  "success": true,
  "task": {
    "_id": "task_id",
    "title": "Complete project",
    "description": "Finish the documentation",
    "status": "todo",
    "priority": "high",
    "dueDate": "2025-12-31T00:00:00.000Z",
    "user": "user_id",
    "createdAt": "2025-11-24T...",
    "updatedAt": "2025-11-24T..."
  }
}
```

#### Get All Tasks
```
GET /tasks
Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "count": 5,
  "tasks": [ ... ]
}
```

#### Get Tasks with Filters
```
GET /tasks?status=todo&priority=high&search=project
Authorization: Bearer {token}

Query Parameters:
- status: todo | in-progress | completed
- priority: low | medium | high
- search: search term (searches title and description)

Response (200):
{
  "success": true,
  "count": 2,
  "tasks": [ ... ]
}
```

#### Get Task by ID
```
GET /tasks/{taskId}
Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "task": { ... }
}
```

#### Update Task
```
PUT /tasks/{taskId}
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Updated title",
  "status": "in-progress",
  "priority": "medium"
}

Response (200):
{
  "success": true,
  "task": { ... }
}
```

#### Delete Task
```
DELETE /tasks/{taskId}
Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "message": "Task deleted successfully"
}
```

---

## 📊 Postman Collection

A complete Postman collection is included: `Task_Manager_API.postman_collection.json`

**Steps to import:**
1. Open Postman
2. Click "Import" → Select the JSON file
3. Set the `token` and `taskId` variables in Postman
4. All endpoints will be ready to test

---

## 🏗️ Project Structure

```
task-app/
├── frontend/
│   ├── src/
│   │   ├── pages/          # Page components (Home, Login, Register, Dashboard)
│   │   ├── components/     # Reusable components (TaskForm, TaskList, Profile)
│   │   ├── context/        # Auth context & protected routes
│   │   ├── services/       # API client
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # TailwindCSS styles
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── package.json
│   └── .gitignore
│
├── backend/
│   ├── src/
│   │   ├── models/         # Mongoose schemas (User, Task)
│   │   ├── routes/         # API routes
│   │   ├── controllers/    # Business logic
│   │   ├── middleware/     # Auth, error handling
│   │   └── index.js        # Server entry point
│   ├── package.json
│   ├── .env.example
│   ├── .gitignore
│   └── README.md
│
└── Task_Manager_API.postman_collection.json
```

---

## 🔐 Security Features

### Password Security
- Bcryptjs hashing with 10 salt rounds
- Passwords are never returned in API responses
- Passwords are hashed before saving to database

### Authentication
- JWT tokens with 30-day expiration
- Tokens stored in localStorage on frontend
- Automatic token injection in all API requests
- Token validation on protected routes

### Data Validation
- Server-side validation using express-validator
- Client-side validation in React forms
- Email validation and uniqueness check
- Password minimum length requirement (6 characters)

### Authorization
- Users can only access their own tasks
- Protected routes require valid JWT token
- Task ownership verification on update/delete

---

## 📱 Frontend Responsiveness

The application is fully responsive and works on:
- **Desktop**: Full layout with multi-column grid
- **Tablet**: 2-column grid layout
- **Mobile**: Single-column layout with optimized spacing

Built with TailwindCSS breakpoints:
- `sm` (640px), `md` (768px), `lg` (1024px)

---

## 🚀 Scalability & Production Considerations

### Current Architecture
```
Client (React)
    ↓ (HTTP/HTTPS)
API Server (Express)
    ↓
Database (MongoDB)
```

### How to Scale for Production

#### 1. **Database Scaling**
- **Horizontal Scaling**: Use MongoDB Atlas (cloud) with automatic sharding
- **Indexing**: Add indexes on frequently queried fields (user_id, status, priority)
- **Caching**: Implement Redis for session storage and task caching
  ```javascript
  // Example: Add Redis for caching tasks
  const redisClient = redis.createClient();
  const cachedTasks = await redisClient.get(`tasks:${userId}`);
  ```

#### 2. **Backend Scaling**
- **Load Balancing**: Use Nginx to distribute traffic across multiple Node.js instances
- **Clustering**: Use Node.js cluster module for multi-core utilization
- **Containerization**: Docker containers for consistent deployment
- **Microservices**: Separate auth, tasks, and notifications into microservices

#### 3. **Frontend Optimization**
- **Code Splitting**: Lazy load routes using React.lazy()
- **CDN**: Deploy frontend on CDN (Cloudflare, AWS CloudFront)
- **Caching**: Implement service workers for offline functionality
- **Build Optimization**: Minimize bundle size with Vite

#### 4. **API Optimization**
- **Pagination**: Add pagination to task list endpoint
- **Rate Limiting**: Implement rate limiting to prevent abuse
- **API Versioning**: Maintain `/v1/`, `/v2/` endpoints for backward compatibility
- **Compression**: Enable gzip compression in Express

#### 5. **Monitoring & Logging**
- **Monitoring**: Use tools like New Relic, DataDog for performance monitoring
- **Logging**: Implement Winston or Bunyan for structured logging
- **Error Tracking**: Use Sentry for error monitoring
- **Metrics**: Prometheus for metrics collection

#### 6. **Security Enhancements**
- **HTTPS**: Always use HTTPS in production
- **CSRF Protection**: Implement CSRF tokens for state-changing operations
- **SQL/NoSQL Injection**: Already protected with Mongoose, validate inputs
- **Rate Limiting**: Add express-rate-limit middleware
- **CORS Configuration**: Restrict CORS to specific domains in production

#### 7. **Infrastructure**
- **Docker**: Create Dockerfile for containerization
- **Kubernetes**: Deploy using K8s for automatic scaling
- **CI/CD**: GitHub Actions, GitLab CI for automated testing and deployment
- **Environment**: Separate dev, staging, production environments

### Example Scaling Implementation

```javascript
// Add to backend/src/index.js for production

// 1. Rate Limiting
import rateLimit from 'express-rate-limit';
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

// 2. Compression
import compression from 'compression';
app.use(compression());

// 3. Redis Caching
import RedisStore from 'connect-redis';
const redisClient = redis.createClient();
app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false,
}));
```

---

## 🧪 Testing

### Backend Testing (Optional)
```bash
# Add jest and supertest to backend
npm install --save-dev jest supertest

# Create test files in backend/src/__tests__/
# Run tests
npm test
```

### Frontend Testing (Optional)
```bash
# Add vitest to frontend
npm install --save-dev vitest @testing-library/react

# Run tests
npm run test
```

---

## 🐛 Common Issues & Solutions

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: Ensure MongoDB is running. Use MongoDB Atlas cloud URL if local MongoDB is not available.

### CORS Error
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution**: Frontend proxy is configured in vite.config.js. Ensure backend runs on port 5000.

### JWT Token Invalid
```
Not authorized to access this route
```
**Solution**: 
1. Check token in localStorage
2. Verify JWT_SECRET matches between frontend and backend
3. Ensure Authorization header format: `Bearer {token}`

---

## 📝 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/task-app
JWT_SECRET=change-this-secret-key
NODE_ENV=development
```

### Frontend (Vite uses VITE_ prefix)
```
VITE_API_URL=http://localhost:5000/api
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Push to the branch
5. Open a pull requet


---

## 🎯 Next Steps

To get started:
1. Install dependencies for both frontend and backend
2. Start MongoDB
3. Create .env file in backend
4. Run `npm run dev` in both directories
5. Open http://localhost:3000 in your browser
6. Register a new account and start managing tasks!

