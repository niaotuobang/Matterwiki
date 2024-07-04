import React from 'react';
import { Route, Routes } from 'react-router-dom';

import App from './components/app.jsx';
import Home from './components/home.jsx';
import Login from './components/login.jsx';
import Article from './components/article.jsx';
import NewArticle from './components/new.jsx';
import EditArticle from './components/edit.jsx';
import ArticleHistory from './components/history.jsx';
import Search from './components/search.jsx';
import Admin from './components/admin.jsx';
import Setup from './components/setup.jsx';
import EditTopic from './components/edit_topics.jsx';
import EditUser from './components/edit_users.jsx';


export default function () {
	return (
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/home" element={<Home />} />
		</Routes>
	);
};
