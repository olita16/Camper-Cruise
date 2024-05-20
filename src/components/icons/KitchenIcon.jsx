import sprite from "../../assets/icons/sprites.svg";

const KitchenIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-kitchen`}></use>
    </svg>
  );
};

export default KitchenIcon;