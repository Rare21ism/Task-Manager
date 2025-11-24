# Backend API - Task Manager

Express.js REST API for Task Manager application with JWT authentication and MongoDB.

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Configuration
1. Create `.env` file from `.env.example`:
```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/task-app
JWT_SECRET=your-secret-key
NODE_ENV=development
```

2. Start MongoDB (if local):
```bash
mongod
```

### Running the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server runs on `http://localhost:5000`

---

## 🏗️ Project Structure

```
backend/
├── src/
│   ├── index.js                 # Server entry point
│   ├── models/
│   │   ├── User.js             # User schema & methods
│   │   └── Task.js             # Task schema
│   ├── controllers/
│   │   ├── authController.js   # Auth logic (register, login, profile)
│   │   └── taskController.js   # Task CRUD operations
│   ├── routes/
│   │   ├── authRoutes.js       # Auth endpoints
│   │   └── taskRoutes.js       # Task endpoints
│   └── middleware/
│       ├── auth.js             # JWT verification
│       └── errorHandler.js     # Global error handling
├── package.json
├── .env.example
└── .gitignore
```

---

## 📡 API Endpoints

### Health Check
```
GET /api/health
Response: { success: true, message: "Server is running" }
```

### Authentication

#### Register
```
POST /api/auth/register
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
```
POST /api/auth/login
Body: {
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Profile
```
GET /api/auth/profile
Headers: Authorization: Bearer {token}
```

#### Update Profile
```
PUT /api/auth/profile
Headers: Authorization: Bearer {token}
Body: {
  "name": "Jane Doe",
  "bio": "New bio",
  "avatar": "url"
}
```

### Tasks

#### Create Task
```
POST /api/tasks
Headers: Authorization: Bearer {token}
Body: {
  "title": "Task title",
  "description": "Task description",
  "priority": "high",
  "dueDate": "2025-12-31"
}
```

#### Get Tasks
```
GET /api/tasks
GET /api/tasks?status=todo&priority=high&search=keyword
Headers: Authorization: Bearer {token}
```

#### Get Task by ID
```
GET /api/tasks/{id}
Headers: Authorization: Bearer {token}
```

#### Update Task
```
PUT /api/tasks/{id}
Headers: Authorization: Bearer {token}
Body: {
  "title": "Updated title",
  "status": "in-progress"
}
```

#### Delete Task
```
DELETE /api/tasks/{id}
Headers: Authorization: Bearer {token}
```

---

## 🔐 Authentication

- **Method**: JWT (JSON Web Tokens)
- **Expiration**: 30 days
- **Token Location**: Authorization header
- **Format**: `Authorization: Bearer {token}`

### How it Works

1. User registers/logs in → Backend creates JWT token
2. Frontend stores token in localStorage
3. Token sent in Authorization header for protected routes
4. Backend validates token and extracts user ID
5. Only user's own data is accessible

---

## 🗄️ Database Models

### User Model
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  bio: String,
  avatar: String,
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### Task Model
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  status: String (enum: todo, in-progress, completed),
  priority: String (enum: low, medium, high),
  user: ObjectId (reference to User),
  dueDate: Date,
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

---

## 🔒 Security Features

1. **Password Hashing**: bcryptjs with 10 salt rounds
2. **JWT Tokens**: Secure token-based authentication
3. **Input Validation**: express-validator on all endpoints
4. **Authorization**: Users can only access own tasks
5. **Error Handling**: Generic error messages to prevent info leakage
6. **CORS**: Enabled for frontend communication

---

## 📝 Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT token creation/verification
- **cors**: Cross-Origin Resource Sharing
- **express-validator**: Input validation
- **dotenv**: Environment variables
- **nodemon**: Development auto-reload

---

## 🚀 Deployment

### Using Vercel/Netlify
```bash
# Install serverless adapter
npm install --save-dev serverless-http

# Update index.js to export handler
export const handler = serverless(app);
```

### Using Heroku
```bash
# Create Procfile
echo "web: npm start" > Procfile

# Deploy
git push heroku main
```

### Using Docker
```bash
# Create Dockerfile
docker build -t task-backend .
docker run -p 5000:5000 task-backend
```

---

## 🧪 Testing Endpoints

Use Postman or curl:

```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","password":"pass123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"pass123"}'

# Create Task (replace TOKEN with actual token)
curl -X POST http://localhost:5000/api/tasks \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title":"My Task","priority":"high"}'
```

---

## 🐛 Troubleshooting

**MongoDB connection failed**
- Ensure MongoDB is running: `mongod`
- Check MONGODB_URI in .env
- Try MongoDB Atlas cloud database

**JWT not working**
- Verify JWT_SECRET is set in .env
- Check token format in Authorization header
- Ensure token hasn't expired

**CORS errors**
- Verify frontend URL is allowed
- Check CORS middleware in index.js

---

## 📚 Additional Resources

- [Express Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [JWT Guide](https://jwt.io/)
- [MongoDB Documentation](https://docs.mongodb.com/)

---

## 📄 License

MIT License - Open source and free to use.
