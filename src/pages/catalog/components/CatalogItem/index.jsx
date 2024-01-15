import s from "./index.module.css"

const CatalogItem = ({ text, img }) => {
  return (
    <div className={s.catalogItem}>
      <img src={img} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default CatalogItem;
