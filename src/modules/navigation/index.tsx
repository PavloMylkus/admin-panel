import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import { KEYS } from '../common/const/app-keys.const';
import { Dashboard } from '../dashboard/dashboard.component';
import HomePage from '../home/home.component';
import Post from '../post/post.component';


export const MainRouter = () => (
  <>
        <Routes>
            <Route index element={<HomePage/>} />
            <Route path={KEYS.DASHBOARD} element={<Dashboard/>} />
			<Route path={KEYS.CREATE} element={<div>Add post</div>} />
			<Route path={KEYS.USER} element={<div>User</div>} />
			<Route path={KEYS.POST} element={<Post/>} />
			<Route path={KEYS.SETTINGS} element={<div>Settings</div>} />
        </Routes>  
  </>
);