type Props = {
  setScene: (scene: "START" | "GAME" | "RESULT") => void;
};

function AppResult({ setScene }: Props) {
  return (
    <section className="bg-[url('/izis-background.jpg')] bg-cover bg-center min-h-screen flex flex-col justify-around p-4">
      <h1 className="izis-text-shadow text-white izis-text-shadow font-black">
        IZIS <small>- FIX THE UI -</small>
      </h1>
      <div className="py-4">
        <h2 className="leading-tight text-center text-[3rem] font-black text-white izis-text-shadow">
          RESULT
        </h2>
      </div>
      <div className="m-auto bg-white/25 rounded-lg w-fit px-8 py-4 izis-glass-panel">
        <h3 className="text-center font-bold text-[--primary-color] mb-2 text-[1.5rem]">
          YOU FOUNDED
        </h3>
        <div className="text-(--primary-color) font-black text-[3rem] text-center">
          12
          <small
            className="text-[1
          .5rem]"
          >
            ／20
          </small>
        </div>
      </div>
      <div className="m-auto flex justify-center items-center flex-col gap-8">
        <button
          className="izis-primary-button"
          onClick={() => setScene("GAME")}
        >
          CONTINUE ?
        </button>
        <button
          className="izis-secondary-button"
          onClick={() => setScene("START")}
        >
          PLAY AGEIN ?<span>GO TO TOP</span>
        </button>
      </div>
    </section>
  );
}

export default AppResult;
