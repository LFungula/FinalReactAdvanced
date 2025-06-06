import { Text } from "@chakra-ui/react";
import { CustomText } from "./UI/CustomText";

export const Date = ({ start, end }) => {
  const beginDate = `${start.slice(8, 10)}-${start.slice(5, 7)}-${start.slice(
    0,
    4
  )}`;
  const endDate = `${end.slice(8, 10)}-${end.slice(5, 7)}-${end.slice(0, 4)}`;
  if (beginDate === endDate) {
    return <CustomText>Date: {beginDate}</CustomText>;
  } else {
    return (
      <CustomText>
        Date: From
        {beginDate} to {endDate}
      </CustomText>
    );
  }
};

export const Time = ({ start, end }) => {
  const startTime = start.slice(11, 16);
  const endTime = end.slice(11, 16);
  if (startTime === endTime) {
    return <CustomText>Time: {startTime}</CustomText>;
  } else {
    return (
      <CustomText>
        Time: From {startTime} hour to {endTime} hour
      </CustomText>
    );
  }
};
