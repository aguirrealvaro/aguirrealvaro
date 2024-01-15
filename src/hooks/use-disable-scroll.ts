import { useEffect } from "react";

export const useDisableScroll = (flag: boolean): void => {
  useEffect(() => {
    document.body.style.overflowY = flag ? "hidden" : "auto";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [flag]);
};
