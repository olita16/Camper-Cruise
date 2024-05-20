import sprite from "../../assets/icons/sprites.svg";

const Van2Icon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-van2`}></use>
    </svg>
  );
};

export default Van2Icon;