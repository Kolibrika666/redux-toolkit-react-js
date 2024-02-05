import { Box, Typography } from "@mui/material";
import LikeIcon from "../../assets/icons/LikeIcon";
import { useSelector } from "react-redux";

const Header = () => {
  const likedPhotos = useSelector((store) => store.galery.likedPhotos);
  return (
    <header>
      <Box display={"flex"} justifyContent={"end"} alignItems={"center"}>
        <Box display={"flex"} alignItems={"center"} p={1} gap={"8px"}>
          <LikeIcon />
          <Typography variant="h4">{likedPhotos.length}</Typography>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
