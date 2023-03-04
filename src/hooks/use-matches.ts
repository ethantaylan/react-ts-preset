import useMediaQuery from "./use-media-query";

export const useMatches = () => {
    const matches = useMediaQuery("(max-width: 768px)");
    return matches;
  };