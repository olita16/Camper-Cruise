import { MainContainer } from "../layouts/MainContainer";
import PicturesSection from "../components/PictureSection/PictureSection";
import { MainWrapper } from "../components/ToggleThemeBtn/ToggleThemeBtn.jsx";

const Main = () => {
    return (
        <MainWrapper>
            <MainContainer>
            </MainContainer>
            <PicturesSection />
        </MainWrapper>
    );
};

export default Main;