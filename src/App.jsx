import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppContext } from './context/AppContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Editor from './pages/Editor';

const ProtectedRoute = ({ children }) => {
  const {
    state: { currentUser }
  } = useAppContext();

  if (!currentUser) return <Navigate to="/login" replace />;
  return children;
};

const App = () => {
  const {
    state: { currentUser }
  } = useAppContext();

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={currentUser ? '/dashboard' : '/login'} replace />}
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/editor/:projectId"
        element={
          <ProtectedRoute>
            <Editor />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
