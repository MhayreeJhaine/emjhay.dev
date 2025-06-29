import { formatDate } from "../utils/formatDate";

// PostCard/PostContent.tsx
type Props = {
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
  content: string;
  githubLink?: string;
  liveLink?: string;
  date?: string;
  hashtags?: string;
};

const PostInfo = ({
  isExpanded,
  setIsExpanded,
  content,
  githubLink,
  liveLink,
  date,
  hashtags,
}: Props) => {
  const shownContent = isExpanded ? content : content.slice(0, 25);

  return (
    <div className="w-full px-4 pb-1">
      <p className="text-sm mt-1 z-10 relative">
        <span className="font-semibold pr-2">mhayreejhaine</span>
        {shownContent}

        {!isExpanded && content.length > 25 && (
          <span
            onClick={() => setIsExpanded(true)}
            className="text-hoverNavDark cursor-pointer"
          >
            ...more
          </span>
        )}

        {isExpanded && content.length > 25 && (
          <div className="mt-3 -ml-2 flex flex-wrap items-center gap-2">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:underline hover:text-blue text-sm italic ml-2"
              >
                View on GitHub
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:underline hover:text-blue text-sm italic -ml-2"
              >
                {", "} View live
              </a>
            )}
            {hashtags && (
              <p className="text-[13px] text-blue -mt-1 ml-2 ">
                {hashtags}
                <span
                  onClick={() => setIsExpanded(false)}
                  className="text-hoverNavDark cursor-pointer text-sm "
                >
                  less
                </span>
              </p>
            )}
          </div>
        )}
      </p>
      {date && (
        <p className="pt-2 text-hoverNavDark text-sm">{formatDate(date)}</p>
      )}
    </div>
  );
};

export default PostInfo;
