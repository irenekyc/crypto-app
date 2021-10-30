import { useMediaQuery } from "react-responsive";

import { LG_SIZE, MD_SIZE } from "../constants/responsive";

export type UseAppMediaQueryReturn = {
  isXS: boolean;
  isMD: boolean;
  isLG: boolean;
};

const useAppMediaQuery = (): UseAppMediaQueryReturn => {
  return {
    isXS: useMediaQuery({ maxWidth: MD_SIZE }),
    isMD: useMediaQuery({ minWidth: MD_SIZE, maxWidth: LG_SIZE }),
    isLG: useMediaQuery({ minWidth: LG_SIZE }),
  };
};

export default useAppMediaQuery;
