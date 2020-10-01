import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
import Youtube from './service/youtube.js';
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: `AIzaSyADhTAZS7M-lFD7OSiiuCeDbP6dJ8jw_Zw` },
});

const youtube = new Youtube(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);
