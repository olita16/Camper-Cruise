import { DAYS_OF_WEEK, MONTHS } from "../constants/index";

const formatDate = (date) => {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const dayOfWeekIndex = date.getDay();

  const formattedDate = `${MONTHS[monthIndex]} ${day}, ${DAYS_OF_WEEK[dayOfWeekIndex]}`;
  return formattedDate;
};

export default formatDate;