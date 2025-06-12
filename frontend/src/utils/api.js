import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const fetchAllCards = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cards`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
};

export const fetchCardById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cards/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching card:', error);
    throw error;
  }
};

export const compareCards = async (cardIds) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/cards/compare`, { cardIds });
    return response.data;
  } catch (error) {
    console.error('Error comparing cards:', error);
    throw error;
  }
};

export const filterCards = async (filters) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cards/filter`, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error filtering cards:', error);
    throw error;
  }
};

export const processAIChatQuery = async (query) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ai/query`, { query });
    return response.data;
  } catch (error) {
    console.error('Error processing AI query:', error);
    throw error;
  }
};

export const generateCardSummary = async (cardId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/ai/summary/${cardId}`);
    return response.data;
  } catch (error) {
    console.error('Error generating card summary:', error);
    throw error;
  }
};