import { Box } from "@mui/material";
import { useEffect } from "react";
import { getGaleryPhotos } from "../../../api/galery";
import { useDispatch, useSelector } from "react-redux";
import {
  addPhotos,
  unilikePhotos,
} from "../../../store/galerySlice/galerySlice";
// import LikeIcon from "../../../assets/icons/LikeIcon";

const Galery = () => {
  // const [photos, setPhotos] = useState([]);
  const photos = useSelector((store) => store.galery.photos);
  const dispatch = useDispatch();
  const likedPhotos = useSelector((store) => store.galery.likedPhotos);

  const heandleClick = (id) => {
    if (likedPhotos.includes(id)) dispatch(unilikePhotos(id));
    else dispatch(unilikePhotos(id));
  };

  const getPhotos = async () => {
    try {
      const data = await getGaleryPhotos();
      console.log(data);
      dispatch(addPhotos(data));
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <Box>
      <h1>Galery</h1>
      {photos.slice(0, 100).map((item) => {
        <img
          key={item.id}
          src={item.url}
          onClick={() => heandleClick(item.id)}
        />;
      })}
    </Box>
  );
};

export default Galery;
