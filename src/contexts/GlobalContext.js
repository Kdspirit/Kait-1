import React, { createContext, useState, useEffect } from 'react';
import { getTodos, getAlbums, getUsers } from '../services/api';

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchTodos();
    fetchAlbums();
    fetchUsers();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const fetchAlbums = async () => {
    try {
      const response = await getAlbums();
      setAlbums(response.data);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <GlobalContext.Provider value={{ todos, albums, users }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
