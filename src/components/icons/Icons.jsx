import sprite from "../../assets/icons/sprites.svg"

const Icons = ({ width, height, svg }) => {
    return (
        <svg width={width} height={height} >
            <use href={`${sprite}#${svg}`}></use>
        </svg>
    );
};
export default Icons;