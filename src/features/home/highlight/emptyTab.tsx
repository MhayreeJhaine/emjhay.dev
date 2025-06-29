import { TbMoodEmpty } from "react-icons/tb"; // any icon you prefer

const EmptyTab = () => {
  return (
    <div className="flex flex-col items-center justify-center py-15 text-center px-4">
      <TbMoodEmpty size={80} className="text-gray-400 mb-4" />
      <h2 className="text-xl font-semibold mb-2 text-gray-700">No Data Yet</h2>
      <p className="text-sm text-gray-500 max-w-sm">
        This section doesn’t have any content right now. Check back later or
        explore other tabs.
      </p>
    </div>
  );
};

export default EmptyTab;
