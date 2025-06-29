import { useState } from "react";
import { BiMoviePlay } from "react-icons/bi";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { useTheme } from "../../../../themeContext/ThemeProvider";
import TabItem from "./tabItem";
import MediaGrid from "./mediaGrid";
import MediaViewer from "./mediaModal";
import EmptyTab from "../../highlight/emptyTab";
import { useVisitorStore } from "../../../../store/visitorStore";
import { MediaItem, useMedia } from "../hooks/useMedia";
import Loader from "../../../../components/atoms/loader";

type TabID = "posts" | "reels" | "tagged";

const Tabs = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<TabID>("posts");
  const [viewerItems, setViewerItems] = useState<MediaItem[]>([]);
  const [viewerIndex, setViewerIndex] = useState(0);
  const [viewerType, setViewerType] = useState<"posts" | "tagged" | "reels">(
    "posts"
  );
  const [viewerOpen, setViewerOpen] = useState(false);
  const visitorMode = useVisitorStore((state) => state.visitorMode);
  const { media, loading } = useMedia();
  const postItems = media.filter((item) => item.category === "posts");
  const reelItems = media.filter((item) => item.category === "reels");
  const taggedItems = media.filter((item) => item.category === "tagged");

  const tabs: { id: TabID; icon: React.ReactNode }[] = [
    { id: "posts", icon: <BsGrid3X3GapFill size={30} /> },
    { id: "reels", icon: <BiMoviePlay size={33} /> },
    {
      id: "tagged",
      icon: (
        <img
          src={
            activeTab === "tagged"
              ? theme === "light"
                ? "./images/darkActive.png"
                : "./images/active.png"
              : "./images/inactive.png"
          }
          alt=""
          className="w-8 h-8 -mt-[2px] object-cover transition duration-300"
        />
      ),
    },
  ];

  const filteredTabs = visitorMode
    ? tabs.filter((tab) => tab.id !== "tagged" || taggedItems.length > 0)
    : tabs;

  const openViewer = (
    items: MediaItem[],
    index: number,
    type: "posts" | "tagged" | "reels"
  ) => {
    setViewerItems(items);
    setViewerIndex(index);
    setViewerType(type);
    setViewerOpen(true);
  };

  const activeIndex = filteredTabs.findIndex((tab) => tab.id === activeTab);
  const tabWidth = 100 / filteredTabs.length;
  const highlightWidth = tabWidth / 1.8;

  return (
    <div className="mt-4 relative">
      <div className="flex justify-around relative">
        {filteredTabs.map((tab) => (
          <TabItem
            key={tab.id}
            icon={tab.icon}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}

        {/* Sliding highlight bar */}
        <div
          className="absolute -bottom-2 h-[2px] bg-[var(--color-new)] transition-all duration-300"
          style={{
            width: `${highlightWidth}%`,
            left: `calc(${activeIndex * tabWidth}% + ${
              (tabWidth - highlightWidth) / 2
            }%)`,
          }}
        ></div>
      </div>
      <div className="bg-hoverBioBtns h-[1.3px] mt-2 w-full" />
      {loading ? (
        <div className="mt-10 flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="-mt-1 md:-mt-0 lg:-mt-1">
            {activeTab === "posts" &&
              (postItems.length > 0 ? (
                <MediaGrid
                  items={postItems}
                  itemHeight="h-38 sm:h-39 md:h-47 "
                  onItemClick={(index) => openViewer(postItems, index, "posts")}
                />
              ) : (
                <EmptyTab />
              ))}
            {activeTab === "reels" &&
              (reelItems.length > 0 ? (
                <MediaGrid
                  items={reelItems}
                  itemHeight="h-52 sm:h-56 md:h-72"
                  onItemClick={(index) => openViewer(reelItems, index, "reels")}
                />
              ) : (
                <EmptyTab />
              ))}
            {activeTab === "tagged" &&
              (taggedItems.length > 0 ? (
                <MediaGrid
                  items={taggedItems}
                  itemHeight="h-38 sm:h-41 md:h-47"
                  onItemClick={(index) =>
                    openViewer(taggedItems, index, "tagged")
                  }
                />
              ) : (
                <EmptyTab />
              ))}
          </div>
        </>
      )}

      {viewerOpen && (
        <MediaViewer
          items={viewerItems}
          activeIndex={viewerIndex}
          type={viewerType}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </div>
  );
};

export default Tabs;
