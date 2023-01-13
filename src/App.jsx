import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThreeD } from "./ThreeD";
import { Romeo } from "./Romeo";
import { Login } from "./Login";
import { Header } from "./Header";
import { Media } from "./ItemCategories/Media";
import "./App.css";
import { Signup } from "./Signup";
import { Game } from "./Game";
import { ArtifactsNew } from "./ArtifactsNew";
import axios from "axios";
import { ArtifactsAll } from "./ArtifactsAll";
import { NotJustMyArtifacts } from "./NotJustMyArtifacts";
import { Index } from "./Index";
import { ButtonRoom } from "./ButtonRoom";
import { ImageGameHandler } from "./ImageGameHandler";
import { Draw } from "./Draw";
import { Moon } from "./Moon";
import { Snake } from "./Snake";
import { Computer } from "./Computer";
import { ArtifactRoom } from "./ItemCategories/ArtifactRoom";
import { Basement } from "./Basement";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/media" element={<Media />} />
          <Route path="/basement" element={<Basement />} />
          <Route path="/login" element={<Login />} />
          <Route path="/threed" element={<ThreeD />} />
          <Route path="/artifactroom" element={<ArtifactRoom />} />
          <Route path="/catalog" element={<ArtifactRoom />} />
          <Route path="/snake" element={<Snake />} />
          <Route path="/outside" element={<Moon />} />
          <Route path="/face" element={<Index />} />
          <Route path="/draw" element={<Draw />} />
          <Route path="/hotel" element={<ButtonRoom />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<ButtonRoom />} />
          <Route path="/romeo" element={<Romeo />} />
          <Route path="/artifactcatalog" element={<ArtifactsNew />} />
          <Route path="/artifacts" element={<ArtifactsAll />} />
          <Route path="/artifacts/all" element={<NotJustMyArtifacts />} />
          <Route path="/game" element={<Game />} />
          <Route path="/image" element={<ImageGameHandler />} />
          <Route path="/computer" element={<Computer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
