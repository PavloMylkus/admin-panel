import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { KEYS } from '../common/const/app-keys.const';
import HomePage from '../home/home.component';


export const MainRouter = () => (
  <>
        <Routes>
            <Route index element={<HomePage/>} />
            <Route path={KEYS.DASHBOARD} element={<div>Dashboard</div>} />
			<Route path={KEYS.CREATE} element={<div>Add post</div>} />
			<Route path={KEYS.USER} element={<div>User</div>} />
			<Route path={KEYS.SETTINGS} element={<div>Settings</div>} />
        </Routes>  
  </>
);