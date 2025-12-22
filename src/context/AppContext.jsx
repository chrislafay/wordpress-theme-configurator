import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { initialDesignSystem } from '../constants/designSystem';
import { slugify } from '../utils/slugify';

const STORAGE_KEY = 'wp-theme-architect';

const loadState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (error) {
    console.warn('Failed to load saved state', error);
  }
  return { currentUser: null, projects: [] };
};

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(loadState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const login = (username, password) => {
    if (username === 'admin' && password === 'password') {
      setState((prev) => ({ ...prev, currentUser: { name: 'Admin' } }));
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const logout = () => setState((prev) => ({ ...prev, currentUser: null }));

  const cloneDesignSystem = () =>
    typeof structuredClone === 'function'
      ? structuredClone(initialDesignSystem)
      : JSON.parse(JSON.stringify(initialDesignSystem));

  const createProject = (name) => {
    const id = crypto.randomUUID ? crypto.randomUUID() : `proj_${Date.now()}`;
    const template = cloneDesignSystem();
    template.project.name = name || 'Untitled Project';
    template.project.slug = slugify(name || 'untitled project');
    const project = {
      id,
      lastModified: new Date().toISOString(),
      data: template
    };
    setState((prev) => ({ ...prev, projects: [project, ...prev.projects] }));
    return project;
  };

  const updateProject = (id, data) => {
    setState((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === id
          ? {
              ...project,
              data,
              lastModified: new Date().toISOString()
            }
          : project
      )
    }));
  };

  const deleteProject = (id) => {
    setState((prev) => ({
      ...prev,
      projects: prev.projects.filter((project) => project.id !== id)
    }));
  };

  const getProject = (id) => state.projects.find((p) => p.id === id);

  const value = useMemo(
    () => ({
      state,
      login,
      logout,
      createProject,
      updateProject,
      deleteProject,
      getProject
    }),
    [state]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
