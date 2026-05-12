type Props = {
  checked: boolean;
  onChange: () => void;
};

function ToggleSwitch({ checked, onChange }: Props) {
  return (
    <label className="absolute left-4 top-2 z1 inline-flex cursor-pointer items-center">
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
