import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Login = () => {
  const navigate = useNavigate();
  const {
    login,
    state: { currentUser }
  } = useAppContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (currentUser) navigate('/dashboard', { replace: true });
  }, [currentUser, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = login(username, password);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="card w-full max-w-md border-slate-800 bg-slate-900/50 p-8 text-white backdrop-blur">
        <h1 className="mb-6 text-center text-2xl font-semibold">WP Theme Architect</h1>
        <p className="mb-6 text-center text-sm text-slate-300">
          Use <span className="font-semibold text-white">admin</span> /{' '}
          <span className="font-semibold text-white">password</span> to sign in.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label text-slate-200">Username</label>
            <input
              className="input bg-slate-800 text-white focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
            />
          </div>
          <div>
            <label className="label text-slate-200">Password</label>
            <input
              className="input bg-slate-800 text-white focus:ring-blue-500"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>
          {error && <p className="text-sm text-red-300">{error}</p>}
          <button type="submit" className="btn btn-primary w-full">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
