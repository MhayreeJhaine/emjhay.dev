type Props = {
  count: number;
  progressWidths: number[];
};

const MultiProgressBar = ({ count, progressWidths }: Props) => {
  return (
    <div className="flex gap-2 mb-4 px-2">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="h-1 flex-1 bg-white rounded-full overflow-hidden"
        >
          <div
            className="h-full bg-hoverNavDark transition-all duration-100"
            style={{ width: `${progressWidths[index]}%` }}
          />
        </div>
      ))}
    </div>
  );
};

export default MultiProgressBar;
