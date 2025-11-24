# Frontend - Task Manager

React + Vite web application for Task Manager with JWT authentication and responsive design.

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Running the Application

**Development mode:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

Application runs on `http://localhost:3000`

---

## 🏗️ Project Structure

```
frontend/
├── src/
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Login.jsx           # Login page
│   │   ├── Register.jsx        # Registration page
│   │   └── Dashboard.jsx       # Main dashboard
│   ├── components/
│   │   ├── TaskForm.jsx        # Create/Edit task form
│   │   ├── TaskList.jsx        # Display tasks list
│   │   ├── TaskCard.jsx        # Individual task card
│   │   ├── TaskFilters.jsx     # Search and filter controls
│   │   └── Profile.jsx         # User profile management
│   ├── context/
│   │   ├── AuthContext.jsx     # Authentication state management
│   │   └── ProtectedRoute.jsx  # Route protection wrapper
│   ├── services/
│   │   └── api.js              # API client with axios
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # TailwindCSS styles
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── .gitignore
```

---

## 🎨 Features

### Authentication
- User registration with validation
- Secure login with JWT tokens
- Automatic token storage and retrieval
- Protected routes that require login
- Logout functionality

### Dashboard
- Create, read, update, delete tasks
- View all user tasks
- Real-time task updates
- Task status: To Do, In Progress, Completed
- Task priority: Low, Medium, High

### Search & Filter
- Search tasks by title or description
- Filter by status
- Filter by priority
- Combined filtering support

### Profile Management
- View user profile
- Update name and bio
- Change avatar URL
- View account creation date

### Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop full-width layout
- TailwindCSS for styling

---

## 🔑 Key Components

### AuthContext
Manages global authentication state:
- User information
- Login/Register/Logout functions
- Token management
- Auto-login on page refresh

### ProtectedRoute
Wrapper component that:
- Checks authentication status
- Shows loading state
- Redirects to login if not authenticated
- Protects dashboard routes

### API Service
Axios client with:
- Automatic token injection
- Centralized API calls
- Consistent error handling

---

## 🎯 User Flow

```
Landing Page
    ↓
Register / Login
    ↓
Dashboard (Protected)
    ├── View all tasks
    ├── Create new task
    ├── Search/Filter tasks
    ├── Edit/Delete tasks
    ├── Update profile
    └── Logout
```

---

## 📱 Responsive Breakpoints

- **Mobile** (< 640px): Single column, optimized touch targets
- **Tablet** (640px - 1024px): Two columns
- **Desktop** (> 1024px): Three columns

---

## 🔐 Security

- Tokens stored in localStorage
- HTTPS-ready for production
- Protected routes prevent unauthorized access
- JWT tokens auto-injected in API requests
- Passwords never exposed in frontend

---

## 🛠️ Tech Stack

- **React 18**: UI framework
- **Vite**: Build tool for fast development
- **React Router v6**: Client-side routing
- **Axios**: HTTP client
- **TailwindCSS**: Utility-first CSS framework
- **Context API**: State management

---

## 📝 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "axios": "^1.6.0"
}
```

DevDependencies:
- Vite
- @vitejs/plugin-react
- TailwindCSS
- PostCSS
- Autoprefixer

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Deploy dist folder to Netlify
```

### GitHub Pages
```bash
# Update vite.config.js
export default defineConfig({
  base: '/repo-name/',
  // ...
})

# Deploy build folder to gh-pages branch
```

### Docker
```bash
# Create Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

## 🎨 Styling

### TailwindCSS Customization
Edit `tailwind.config.js` to customize:
- Colors
- Spacing
- Typography
- Breakpoints

### CSS Structure
- `src/index.css`: Global styles with TailwindCSS directives
- Component-level: Inline Tailwind classes

---

## 🔍 Environment Variables

Create `.env` file (optional, has defaults):
```
VITE_API_URL=http://localhost:5000/api
```

---

## 🧪 Testing

### Manual Testing
Use browser DevTools:
- Check localStorage for token
- Inspect network requests
- Verify API responses

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🐛 Troubleshooting

**Blank page on load**
- Check browser console for errors
- Verify backend is running on port 5000
- Check Network tab for failed requests

**Cannot login**
- Verify backend is running
- Check API_URL in services/api.js
- Verify credentials are correct

**Tasks not loading**
- Check token in localStorage
- Verify backend authentication middleware
- Check browser console for errors

**CORS errors**
- Backend must have CORS enabled
- Frontend must match backend CORS origin
- Check vite.config.js proxy settings

---

## 📚 Useful Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code (if eslint configured)
npm run lint
```

---

## 🔄 API Integration

All API calls go through `src/services/api.js`:

```javascript
// Usage in components
import { authAPI, taskAPI } from '../services/api';

// Login
const response = await authAPI.login({ email, password });

// Get tasks
const response = await taskAPI.getTasks({ status, priority, search });
```

---

## 🎯 Performance Tips

1. **Code Splitting**: Routes are lazy-loaded
2. **Image Optimization**: Use optimized avatar URLs
3. **Bundle Size**: Vite provides optimal bundling
4. **Caching**: Browser caches API responses via axios

---

## 🚀 Next Steps

1. Start development server: `npm run dev`
2. Test all features in browser
3. Build for production: `npm run build`
4. Deploy to hosting platform
5. Monitor performance and user feedback

Happy coding! 💻
