import { MediaItem } from "../../../constants/data/mediaData";

type MediaGridProps = {
  items: MediaItem[];
  itemHeight: string;
  onItemClick: (index: number) => void;
};

const MediaGrid = ({ items, itemHeight, onItemClick }: MediaGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-[1px] mt-2">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`relative w-full ${itemHeight} cursor-pointer overflow-hidden`}
          onClick={() => onItemClick(index)}
        >
          {item.type === "video" ? (
            <video
              src={item.media[0]}
              className="w-full h-full object-cover"
              muted
              loop
            />
          ) : (
            <img
              src={item.media[0]}
              alt={`media-${index}`}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MediaGrid;
