
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import toast from "react-hot-toast";
import { bookVan } from "../../../redux/adverts/slice";
import formatDate from "../../../helpers/formatDate";
import bookSchema from "../../../schemas/bookSchema";
import { FORM_INIT_VALUES } from "../../../constants/index";
import Calendar from "./Calendar";
import {
    ErrorMsg,
    Form,
    Label,
    SubmitBtn,
    TitleBlock,
} from "./FormBook.styled";
import { TOASTER_CONFIG } from "../../../constants/index";
import Icon from "../../icons/Icons";

const FormBook = () => {
    const dispatch = useDispatch();

    const handleFormSubmit = async ({ name, email, date, comment }, actions) => {
        const formData = {
            name,
            email,
            date: formatDate(date),
            comment,
        };

        const isValid = await bookSchema.isValid(formData);

        if (!isValid) {
            return;
        }

        dispatch(bookVan(formData));
        toast("Successfully sent!", TOASTER_CONFIG);

        setTimeout(() => window.location.reload(), 700);
    };

    return (
        <Formik
            initialValues={FORM_INIT_VALUES}
            onSubmit={handleFormSubmit}
            validationSchema={bookSchema}
        >
            {({ touched, errors, handleSubmit, getFieldProps }) => (
                <Form onSubmit={handleSubmit}>
                    <TitleBlock>
                        <h3>Book your campervan now</h3>
                        <p>Stay connected! We are always ready to help you.</p>
                    </TitleBlock>

                    <Label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            {...getFieldProps("name")}
                        />
                        {errors.name && touched.name && <ErrorMsg>{errors.name}</ErrorMsg>}
                    </Label>

                    <Label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            {...getFieldProps("email")}
                        />
                        {errors.email && touched.email && (
                            <ErrorMsg>{errors.email}</ErrorMsg>
                        )}
                    </Label>

                    <Label>
                        {<Calendar />}
                        <Icon width={20} height={20} svg={"icon-calendar"} />
                        {errors.date && touched.date && <ErrorMsg>{errors.date}</ErrorMsg>}
                    </Label>

                    <Label>
                        <textarea
                            name="comment"
                            placeholder="Comment"
                            {...getFieldProps("comment")}
                        />
                        {errors.comment && touched.comment && (
                            <ErrorMsg>{errors.comment}</ErrorMsg>
                        )}
                    </Label>

                    <SubmitBtn type="submit" disabled={Object.keys(errors).length > 0}>
                        Send
                    </SubmitBtn>
                </Form>
            )}
        </Formik>
    );
};

export default FormBook;
