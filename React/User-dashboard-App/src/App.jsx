
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import UserLayout from './components/UserLayout';
import UserProfile from './components/UserProfile';
import UserPosts from './components/UserPosts';
import NotFound from './components/NotFound';
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:userId" element={<UserLayout />}>
        <Route path="profile" element={<UserProfile />} />
        <Route path="posts" element={<UserPosts />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
