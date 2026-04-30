import "./App.css";
import { useState } from "react";
import AppStart from "./pages/AppStart";
import AppGame from "./pages/AppGame";
import AppResult from "./pages/AppResult";
import { type Game } from "./types/types";

type Scene = "START" | "GAME" | "RESULT";

function App() {
  const [scene, setScene] = useState<Scene>("START");
  const [activeGame, setActiveGame] = useState<Game>("snow-white");

  return (
    <main>
      {scene === "START" && (
        <AppStart setScene={setScene} setActiveGame={setActiveGame} />
      )}
      {scene === "GAME" && (
        <AppGame setScene={setScene} activeGame={activeGame} />
      )}
      {scene === "RESULT" && <AppResult setScene={setScene} />}
    </main>
  );
}

export default App;
