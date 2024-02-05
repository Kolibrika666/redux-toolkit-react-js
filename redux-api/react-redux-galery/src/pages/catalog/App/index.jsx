import CatalogItem from "../components/CatalogItem/index.jsx";

const Catalog = () => {
  return (
    <section>
      <h2>Catalog</h2>
      {catalogData.map((item) => (
        <CatalogItem
          key={item.id}
          id={item.id}
          img={item.img}
          text={item.name}
        />
      ))}
    </section>
  );
};

export default Catalog;

export const catalogData = [
  {
    id: 1,
    name: "Фен",
    img: "https://www.zap.md/sites/default/files/panasonic-eh-na65-k865.png",
  },
  {
    id: 2,
    name: "Утюг",
    img: "https://cdn.karaca.com/image/data/tefal/2014/9640.png",
  },
  {
    id: 3,
    name: "Видеокарта",
    img: "https://images.nvidia.com/aem-dam/Solutions/geforce/news/geforce-rtx-2070-custom-card-roundup/MSI-GeForce-RTX-2070-Gaming-Z-8G.png",
  },
  {
    id: 4,
    name: "Гантеля",
    img: "https://pngimg.com/uploads/dumbbell/dumbbell_PNG102650.png",
  },
];
