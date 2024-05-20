import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { getAllAdverts, getTotal } from "../redux/adverts/operations";
import {
    selectAdverts,
    selectError,
    selectIsLoading,
    selectTotal,
} from "../redux/adverts/selectors";
import { LIMIT } from "../constants/index";
import SmoothScroll from "../helpers/SmoothScroll";
import { MainContainer } from "../layouts/MainContainer";
import FiltersForm from "../components/Filter/Filter";
import Loader from "../components/Loader";
import AdvertCard from "../components/AdvertCard/AdvertCard";
import {
    AdvertsList,
    CardItem,
    ListBtnWrap,
    LoadMoreBtn,
    NoItemsMsg,
} from "../components/AdvertCard/AdvertCard.styled";
import {
    CatalogContainer,
    GoToPrevPageBtn,
} from "../components/Filter/Filter.styled";

const Catalog = () => {
    const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [showLoadMore, setShowLoadMore] = useState(true);

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const adverts = useSelector(selectAdverts);
    const total = useSelector(selectTotal);
    const error = useSelector(selectError);

    useEffect(() => {
        setShowLoadMore(true);

        if (page >= Math.ceil(total / LIMIT)) {
            setShowLoadMore(false);
        }

        dispatch(getTotal(searchParams));
        dispatch(getAllAdverts({ page, limit: LIMIT, searchParams }));
    }, [dispatch, page, total, searchParams]);

    const handleLoadMore = () => {
        if (page >= Math.ceil(total / LIMIT) || adverts.length < LIMIT) {
            setShowLoadMore(false);
            return;
        }

        setShowLoadMore(true);
        setPage((prev) => prev + 1);
        SmoothScroll("goBack");
    };

    const handleGoToPrevPage = () => {
        setPage((prev) => prev - 1);
        SmoothScroll("advertBlock");
    };

    return (
        <>
            <MainContainer>
                <CatalogContainer>
                    <FiltersForm
                        setPage={setPage}
                        searchParams={searchParams}
                        setSearchParams={setSearchParams}
                    />

                    {page > 1 && (
                        <GoToPrevPageBtn
                            id="goBack"
                            type="button"
                            onClick={handleGoToPrevPage}
                        >
                            <FaArrowLeft size={20} fill="var(--text-color)" />
                            Go back
                        </GoToPrevPageBtn>
                    )}

                    <ListBtnWrap id="advertBlock">
                        {adverts.length < 0 || error === "Not found" ? (
                            <NoItemsMsg>No items</NoItemsMsg>
                        ) : (
                            <AdvertsList>
                                {adverts.map((card) => (
                                    <CardItem key={card._id}>
                                        <AdvertCard card={card} />
                                    </CardItem>
                                ))}
                            </AdvertsList>
                        )}

                        {showLoadMore && !error && adverts.length > 0 && (
                            <LoadMoreBtn type="button" onClick={handleLoadMore}>
                                Load more
                            </LoadMoreBtn>
                        )}
                    </ListBtnWrap>
                </CatalogContainer>
            </MainContainer>
            {isLoading && <Loader />}
        </>
    );
};

export default Catalog;