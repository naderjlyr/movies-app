import { Skeleton } from "@mui/material";
const CustomSkeleton = () => {
  return (
    <>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </>
  );
};
export default CustomSkeleton;
