import { Circles } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

const Loader = () => {
    return (
        <LoaderWrapper>
            <Circles
                visible={true}
                height="200"
                width="200"
                radius="48"
                color="var(--accent-red)"
                ariaLabel="circles-loading"

            />
        </LoaderWrapper>
    );
};

export default Loader;