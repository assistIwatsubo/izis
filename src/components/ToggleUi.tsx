type ToggleProps = {
  id: string;
  isFound: boolean;
  onFound: (id: string) => void;
  ui: React.ReactNode;
};

function ToggleUI({ id, isFound, onFound, ui }: ToggleProps) {
  return (
    <div onClick={() => !isFound && onFound(id)} className="cursor-pointer">
      {ui}
    </div>
  );
}

export default ToggleUI;
