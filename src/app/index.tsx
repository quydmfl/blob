/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { useTranslation } from 'react-i18next';

// Page
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { BlogDetailPage } from './pages/BlogDetailPage/Loadable';
import { BlogPage } from './pages/BlogPage/Loadable';
import { CategoriesPage } from './pages/CategoriesPage/Loadable';
import { CategoryDetailPage } from './pages/CategoryDetailPage/Loadable';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage/Loadable';
import { HomePage } from './pages/HomePage/Loadable';
import { LoginPage } from './pages/LoginPage/Loadable';
import { RegisterPage } from './pages/RegisterPage/Loadable';

// Admin
import { HomePage as AdminHomePage } from './admins/HomePage/Loadable';
import { LoginPage as AdminLoginPage } from './admins/LoginPage/Loadable';
import { RegisterPage as AdminRegisterPage } from './admins/RegisterPage/Loadable';

// Layout
import { AuthLayout as AdminAuthLayout } from './layouts/admins/AuthLayout/Loadable';
import { DefaultLayout } from './layouts/DefaultLayout/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route path="/">
          {/**
           * ========================
           * *******User route*******
           * ========================
           */}
          <Route index element={<HomePage />} />
          {/* Auth */}
          <Route path="auth" element={<DefaultLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
          </Route>
          {/* Categories|Archive */}
          <Route path="categories" element={<DefaultLayout />}>
            <Route index element={<CategoriesPage />} />
            <Route path=":slug" element={<CategoryDetailPage />} />
          </Route>

          {/* Blog|News */}
          <Route path="posts">
            <Route index element={<BlogPage />} />
            <Route path=":slug" element={<BlogDetailPage />} />
          </Route>
          {/**
           * ========================
           * ******Admin route*******
           * ========================
           */}
          <Route path="admin">
            <Route index element={<AdminHomePage />} />

            {/* Auth */}
            <Route path="auth" element={<AdminAuthLayout />}>
              <Route path="login" element={<AdminLoginPage />} />
              <Route path="register" element={<AdminRegisterPage />} />
            </Route>
          </Route>

          {/* Not match every path to redirect not found page */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
