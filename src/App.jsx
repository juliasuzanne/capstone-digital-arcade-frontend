import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Header } from "./Header";
import { Home } from "./Home";
import "./App.css";
import { Signup } from "./Signup";
import { Game } from "./Game";
import { ArtifactsNew } from "./ArtifactsNew";
import axios from "axios";
import { ArtifactsAll } from "./ArtifactsAll";
import { NotJustMyArtifacts } from "./NotJustMyArtifacts";
import { Index } from "./Index";
import { ImageGameHandler } from "./ImageGameHandler";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Index />} />
          <Route path="/newartifact" element={<ArtifactsNew />} />
          <Route path="/artifacts" element={<ArtifactsAll />} />
          <Route path="/artifacts/all" element={<NotJustMyArtifacts />} />
          <Route path="/game" element={<Game />} />
          <Route path="/image" element={<ImageGameHandler />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
