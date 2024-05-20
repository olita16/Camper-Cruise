import { PiWind } from 'react-icons/pi';
import {
    VanPic,
    MainInfoWrap,
    TitlePriceWrap,
    Title,
    PriceWrap,
    Price,
    RatingLocationWrap,
    RatingWrap,
    LocationWrap,
    Description,
    DetailsList,
    ShowBtn,
    AddToFavBtn,
} from './AdvertCard.styled.jsx';
import Icon from '../icons/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import Modal from '../Modal/Modal';
import { selectFavorites } from '../../redux/adverts/selectors';
import { addToFavorites, removeFromFavorites } from '../../redux/adverts/slice';

const AdverCard = ({ card }) => {
    const [isModalShown, setIsModalShown] = useState(false);
    const [activeTab, setActiveTab] = useState("features");
    const [clickToReviews, setClickToReviews] = useState(false);

    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);

    const isCardFavorite = useMemo(
        () => favorites.find((fav) => fav._id === card._id),
        [favorites, card._id]
    );

    return (
        <>
            <VanPic>
                <img src={card.gallery[0]} alt={card.name} />
            </VanPic>

            <MainInfoWrap>
                <TitlePriceWrap>
                    <Title>{card.name}</Title>

                    <PriceWrap>
                        <Price>€{card.price.toFixed(2)}</Price>
                        <AddToFavBtn
                            type="button"
                            aria-label="Add to favorites"
                            onClick={() =>
                                isCardFavorite
                                    ? dispatch(removeFromFavorites(card._id))
                                    : dispatch(addToFavorites(card))
                            }
                            $isFavorite={!!isCardFavorite}
                        >
                            <Icon width={20} height={20} svg={"icon-fav"} />
                        </AddToFavBtn>
                    </PriceWrap>
                </TitlePriceWrap>

                <RatingLocationWrap>
                    <RatingWrap>
                        <Icon
                            width={20}
                            height={20}
                            fillColor={"var(--accent-orange)"}
                            svg="icon-star"
                        />
                        <button
                            type="button"
                            aria-label="Open reviews"
                            onClick={() => {
                                setIsModalShown(true);
                                document.body.style.overflow = "hidden";
                                setActiveTab("reviews");
                                setClickToReviews(true);
                            }}
                        >
                            {`${card.rating}(${card.reviews.length} Reviews)`}
                        </button>
                    </RatingWrap>

                    <LocationWrap>
                        <Icon width={20} height={20} svg={'icon-pin'} />
                        <p>{card.location.split(",").reverse().join(", ")}</p>
                    </LocationWrap>
                </RatingLocationWrap>

                <Description>{card.description}</Description>

                <DetailsList>
                    <li>
                        <Icon width={20} height={20} svg="icon-adults" />
                        {card.adults} adults
                    </li>

                    <li className="capitalize">
                        <Icon width={20} height={20} svg={"icon-transmission"} />
                        {card.transmission}
                    </li>

                    <li className="capitalize">
                        <Icon width={20} height={20} svg={'icon-petrol'} />
                        {card.engine}
                    </li>

                    {card.kitchen >= 1 && (
                        <li>
                            <Icon width={20} height={20} svg={'icon-kitchen'} />
                            Kitchen
                        </li>
                    )}

                    <li>
                        <Icon width={20} height={20} svg={'icon-bedroom'} />
                        {card.beds} beds
                    </li>

                    {card.airConditioner >= 1 && (
                        <li>
                            <PiWind size={20} style={{ fill: "var(--text-color)" }} />
                            AC
                        </li>
                    )}
                </DetailsList>

                <ShowBtn
                    type="button"
                    aria-label="Show more details"
                    onClick={() => {
                        setIsModalShown(true);
                        document.body.style.overflow = "hidden";
                    }}
                >
                    Show more
                </ShowBtn>
            </MainInfoWrap>

            {isModalShown && (
                <Modal
                    card={card}
                    isModalShown={isModalShown}
                    closeModal={() => setIsModalShown(false)}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    clickToReviews={clickToReviews}
                />
            )}
        </>
    );
};

export default AdverCard;