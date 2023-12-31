import logo from './logo.svg';
import { Link } from "react-router-dom";

import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.jsx';
import TrainerProfile from './routes/Trainer_profile';
import Dashboard_admin from './routes/Dashboard_admin';
import Editanggota from './routes/Edit_anggota';
import Login from './routes/Login';
import Blog from './routes/Blog';
import Dokumentasi from './routes/Dokumentasi';
import DokumentasiAdmin from './routes/Dokumentasi_admin.jsx';
import PerpustakaanAdmin from './routes/Perpustakaan__admin.jsx';
import Logistik from './routes/Logistik.jsx';
import KontenArtikel from './routes/Konten__admin.jsx';
import Kontak from './routes/Kontak';
import Blogadmin from './routes/Blog_admin.jsx';

function App() {
  return (
<>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainerprofiles" element={<TrainerProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard_admin />} />
        <Route path="/editanggota" element={<Editanggota />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dokumentasi" element={<Dokumentasi />} />
        <Route path="/dokumentasiadmin" element={<DokumentasiAdmin />} />
        <Route path="/perpustakaanadmin" element={<PerpustakaanAdmin />} />
        <Route path="/logistik" element={<Logistik />} />
        <Route path="/blogadmin" element={<Blogadmin />} />
        <Route path="/kontenartikel">
          <Route index element={<KontenArtikel />} />
        </Route>
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
