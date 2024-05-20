import { MainContainer } from "../../layouts/MainContainer";
import CamperSea from "../../assets/pictures/hero-camper.jpg"
import { PicturePositionWrap, PictureSection, SectionWrap, TextBlock } from "./PictureSection.styled";

const PicturesSection = () => {
    return (
        <PictureSection>
            <MainContainer>
                <TextBlock>
                    <div>
                        <h2>Welcome to the Camper Rental Application!</h2>
                    </div>
                </TextBlock>
                <SectionWrap>
                    <PicturePositionWrap>
                        <div>
                            <img
                                src={CamperSea}
                                alt="campervan on the sea"
                                width={200}
                                height={300}
                            />

                        </div>
                    </PicturePositionWrap>
                </SectionWrap>
            </MainContainer>
        </PictureSection >
    );
};

export default PicturesSection;