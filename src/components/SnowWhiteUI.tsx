export function Apple({ isFound }: { isFound: boolean }) {
  return isFound ? (
    <div className="bg-green-500 p-4">🍏</div>
  ) : (
    <div className="bg-red-500 p-4">🍎</div>
  );
}
