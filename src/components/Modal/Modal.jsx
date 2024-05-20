import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Tabs from "./Tabs/Tabs"
import {
    Backdrop,
    CLoseBtn,
    Content,
    HeadInfo,
    ModalDescr,
    PicsList,
    Window,
} from "./Modal.styled";
import { MainContainer } from "../../layouts/MainContainer";
import {
    LocationWrap,
    Price,
    RatingLocationWrap,
    RatingWrap,
    Title,
} from "../AdvertCard/AdvertCard.styled";
import Icon from "../icons/Icons";

const Modal = ({
    card,
    isModalShown,
    closeModal,
    activeTab,
    setActiveTab,
    clickToReviews,
}) => {
    const tabsRef = useRef();
    useEffect(() => {
        const handleESCClose = (e) => {
            if (e.code === "Escape") closeModal();
        };

        window.addEventListener("keydown", handleESCClose);

        return () => window.removeEventListener("keydown", handleESCClose);
    }, [closeModal]);

    useEffect(() => {
        clickToReviews &&
            tabsRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                duration: 1000,
            });
    }, [clickToReviews]);

    const handleBackdropClose = ({ target, currentTarget }) => {
        if (target === currentTarget) {
            closeModal();
            document.body.style.overflow = "visible";
        }
    };

    return createPortal(
        <Backdrop
            className={isModalShown ? "is-shown" : "is-hidden"}
            onClick={handleBackdropClose}
        >
            <MainContainer onClick={handleBackdropClose}>
                <Window className={isModalShown ? "is-shown" : "is-hidden"}>
                    <CLoseBtn type="button" aria-label="Close modal" onClick={closeModal}>
                        <Icon width={20} height={20} svg={"icon-close"} />
                    </CLoseBtn>

                    <Content>
                        <HeadInfo>
                            <Title>{card.name}</Title>

                            <RatingLocationWrap id="rating-wrap">
                                <RatingWrap>
                                    <Icon
                                        width={20}
                                        height={20}
                                        svg={"icon-star"}
                                        fillColor={"var(--accent-orange)"}
                                    />
                                    <p>{`${card.rating}(${card.reviews.length} Reviews)`}</p>
                                </RatingWrap>

                                <LocationWrap>
                                    <Icon width={20} height={20} svg={"icon-pin"} />
                                    <p>{card.location.split(",").reverse().join(", ")}</p>
                                </LocationWrap>
                            </RatingLocationWrap>

                            <Price>€{card.price.toFixed(2)}</Price>
                        </HeadInfo>

                        <PicsList>
                            {card.gallery.length > 0 &&
                                card.gallery.map((link, i) => (
                                    <li key={`${card._id}/${i}`}>
                                        <img src={link} alt={card.name} />
                                    </li>
                                ))}
                        </PicsList>

                        <ModalDescr>{card.description}</ModalDescr>

                        <div ref={tabsRef}>
                            <Tabs
                                card={card}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                        </div>
                    </Content>
                </Window>
            </MainContainer>
        </Backdrop>,
        document.getElementById("modal-root")
    );
};

export default Modal;