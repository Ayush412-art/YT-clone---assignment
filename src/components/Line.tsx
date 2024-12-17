interface Linebar {
  progress: number;
}
function Line(props: Linebar) {
  return (
    <div>
      <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
        <div
          className="bg-red-600 h-1 rounded-full "
          style={{ width: `${props.progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Line;
