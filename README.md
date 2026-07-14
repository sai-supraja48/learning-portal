# 🎓 Learning Portal

A full-stack Learning Portal built using the MERN Stack where students can watch learning videos, create multiple bookmarks at different timestamps, resume videos from bookmarks, and continue watching from the last watched position.

---

## 🚀 Features

### Authentication
- User Signup
- User Login
- JWT Authentication
- Protected Routes
- Logout

### Learning Portal
- Dashboard with Learning Videos
- Video Player
- Search Videos
- Responsive UI

### Video Bookmarks
- Add Multiple Bookmarks
- Optional Bookmark Title
- Save Timestamp
- Resume Playback from Selected Bookmark
- Edit Bookmark
- Delete Bookmark

### Continue Watching
- Automatically saves current video position
- Resume from last watched timestamp


### Watch Progress
- Progress Bar
- Playback Percentage
2. Screenshot Protection
Implement a mechanism to discourage or prevent users from taking screenshots while viewing the learning content.
Note: Different platforms have different capabilities and limitations. Implement the best possible solution supported by your chosen technology stack and document your approach.


---

# 🛠️ Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap
- React Toastify

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

---

# 📂 Project Structure

```
learning-portal
│
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── VideoCard.jsx
│   │   │   ├── VideoPlayer.jsx
│   │   │   └── BookmarkList.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── WatchVideo.jsx
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/sai-supraja48/learning-portal.git
```

---

## Backend Setup

```bash
cd server

npm install

npm run dev
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

---

## Videos

| Method | Endpoint |
|---------|----------|
| GET | /api/videos |
| GET | /api/videos/:id |
| POST | /api/videos |

---

## Bookmarks

| Method | Endpoint |
|---------|----------|
| POST | /api/bookmarks |
| GET | /api/bookmarks/:videoId |
| PUT | /api/bookmarks/:id |
| DELETE | /api/bookmarks/:id |

---

## Progress

| Method | Endpoint |
|---------|----------|
| POST | /api/progress |
| GET | /api/progress/:userId/:videoId |

---

# 📸 Application Workflow

1. User Signup
2. User Login
3. Dashboard displays available videos
4. User opens a video
5. Video starts playing
6. User creates multiple bookmarks
7. Clicking a bookmark resumes playback from that timestamp
8. Progress is automatically saved
9. User can continue watching later
10. User can edit or delete bookmarks
11. User logs out

---

# 🎯 Assignment Requirements Covered

- ✅ Student-friendly UI
- ✅ Video Player
- ✅ Multiple Bookmarks
- ✅ Resume Playback from Timestamp
- ✅ Persistent Bookmark Storage
- ✅ Continue Watching
- ✅ Watch Progress
- ✅ Screenshot Protection (Best Effort)
- ✅ Authentication
- ✅ Responsive Design
- ✅ Edit/Delete Bookmarks

---

# 🌐 Deployment

## Frontend

Deploy using:

- Netlify   :   https://learning-portal-project.netlify.app/

## Backend

Deploy using:

- Render  :  https://learning-portal-backend-q5gt.onrender.com

---

# 📷 Screenshots

Add screenshots here after completing the project.

Example:

```
# 📸 Screenshots

## Login Page

![Login](screenshots/login.png)

---

## Signup Page

![Signup](screenshots/signup.png)

---

## Dashboard

![Dashboard](screenshots/dashboard.png)

---

## Video Player

![Video Player](screenshots/watchvideo.png)

---

## Bookmark Feature

![Bookmarks](screenshots/bookmarks.png)

---

## Continue Watching

![Progress](screenshots/progress.png)
```

---


# 👩‍💻 Author

**Sai Supraja Annam**

GVCC Learning Portal Assignment
