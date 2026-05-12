type Props = {
  checked: boolean;
  onChange: () => void;
  addClass?: string;
};

function ToggleSwitch({ checked, onChange, addClass = "" }: Props) {
  return (
    <label className={`inline-flex cursor-pointer items-center ${addClass}`}>
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
      />
      <div className="h-7 w-12 rounded-full bg-gray-300 transition-colors peer-checked:bg-(--primary-color)"></div>

      <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-5"></div>
    </label>
  );
}

export default ToggleSwitch;
