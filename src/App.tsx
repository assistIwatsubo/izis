import "./App.css";
import { useState } from "react";
import AppStart from "./pages/AppStart";
import AppGame from "./pages/AppGame";
import AppResult from "./pages/AppResult";
import { type Game, type Scene } from "./types/types";
import { problems } from "./types/config";

function App() {
  const [scene, setScene] = useState<Scene>("START");
  const [activeGame, setActiveGame] = useState<Game>("snow-white");
  const [foundIds, setFoundIds] = useState<string[]>([]);

  const activeProblems = problems[activeGame as keyof typeof problems];

  const handleFullFound = () => {
    const allIds = activeProblems.map((p) => p.id);
    setFoundIds(allIds);
  };

  const resetFoundIds = () => setFoundIds([]);

  return (
    <main>
      {scene === "START" && (
        <AppStart
          setScene={(s) => {
            resetFoundIds();
            setScene(s);
          }}
          setActiveGame={setActiveGame}
        />
      )}
      {scene === "GAME" && (
        <AppGame
          setScene={setScene}
          activeGame={activeGame}
          foundIds={foundIds}
          setFoundIds={setFoundIds}
        />
      )}
      {scene === "RESULT" && (
        <AppResult
          setScene={setScene}
          activeGame={activeGame}
          onFullFound={handleFullFound}
        />
      )}
    </main>
  );
}

export default App;
