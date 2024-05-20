import { PiWind } from "react-icons/pi";
import returnDetails from "../../../helpers/returnDetails";
import { DetailsList } from "../../AdvertCard/AdvertCard.styled";
import {
    FeatureReviewsWrap,
    DetailsItemsWrap,
    VehicleDetailsWrap,
    VehicleDetailsList,
} from "./Features.styled";
import Icon from "../../icons/Icons";

const Features = ({
    card: {
        airConditioner,
        toilet,
        kitchen,
        microwave,
        shower,
        freezer,
        TV,
        hob,
        CD,
        beds,
        radio,
        gas,
        water,
        adults,
        transmission,
        engine,
        form,
        length,
        width,
        height,
        tank,
        consumption,
    },
}) => {
    return (
        <FeatureReviewsWrap>
            <DetailsItemsWrap>
                <DetailsList>
                    <li>
                        <Icon width={20} height={20} svg={"icon-adults"} /> {`${adults} adults`}
                    </li>

                    <li className="capitalize">
                        <Icon width={20} height={20} svg={"icon-transmission"} />
                        {transmission}
                    </li>

                    {returnDetails(
                        airConditioner,
                        "AC",
                        <PiWind
                            width={20}
                            height={20}
                            style={{ fill: "var(--text-color)" }}
                        />
                    )}

                    <li className="capitalize">
                        <Icon width={20} height={20} svg={'icon-petrol'} />
                        {engine}
                    </li>

                    {returnDetails(
                        kitchen,
                        "kitchen",
                        <Icon width={20} height={20} svg={"icon-kitchen"} />
                    )}

                    <li>
                        <Icon width={20} height={20} svg={"icon-bedroom"} />
                        {`${beds} beds`}
                    </li>

                    <li>
                        <Icon width={20} height={20} svg={"icon-conditioner"} />
                        {`${airConditioner} air conditioner`}
                    </li>

                    {returnDetails(CD, "CD", <Icon width={20} height={20} svg={"icon-cd"} />)}
                    {returnDetails(
                        radio,
                        "Radio",
                        <Icon width={20} height={20} svg={"icon-radio"} />
                    )}
                    {returnDetails(TV, "TV", <Icon width={20} height={20} svg={"icon-tv"} />)}
                    {returnDetails(
                        hob,
                        `${hob} hob`,
                        <Icon width={20} height={20} svg={"icon-hob"} />
                    )}
                    {returnDetails(
                        shower,
                        `${shower} shower`,
                        <Icon width={20} height={20} svg={"icon-shower"} />
                    )}
                    {returnDetails(
                        freezer,
                        `${freezer} freezer`,
                        <Icon width={20} height={20} svg={"icon-freezer"} />
                    )}
                    {returnDetails(
                        toilet,
                        `${toilet} toilet`,
                        <Icon width={20} height={20} svg={"icon-toilet"} />
                    )}
                    {returnDetails(
                        microwave,
                        `${microwave} microwave`,
                        <Icon width={20} height={20} svg={"icon-microwave"} />
                    )}
                    {returnDetails(gas, gas, <Icon width={20} height={20} svg={"icon-gas"} />)}
                    {returnDetails(
                        water,
                        water,
                        <Icon width={20} height={20} svg={"icon-water"} />
                    )}
                </DetailsList>
            </DetailsItemsWrap>

            <VehicleDetailsWrap>
                <h3>Vehicle details</h3>
                <hr />
                <VehicleDetailsList>
                    <li className="capitalize">
                        <p>Form</p>
                        <p>
                            {form === "alcove"
                                ? form
                                : `${form.slice(0, 5)} ${form.slice(5)}`}
                        </p>
                    </li>

                    <li>
                        <p>Length</p>
                        <p>{length}</p>
                    </li>

                    <li>
                        <p>Width</p>
                        <p>{width}</p>
                    </li>

                    <li>
                        <p>Height</p>
                        <p>{height}</p>
                    </li>

                    <li>
                        <p>Tank</p>
                        <p>{tank}</p>
                    </li>

                    <li>
                        <p>Consumption</p>
                        <p>{consumption}</p>
                    </li>
                </VehicleDetailsList>
            </VehicleDetailsWrap>
        </FeatureReviewsWrap>
    );
};

export default Features;