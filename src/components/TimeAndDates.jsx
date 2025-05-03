import { Text } from "@chakra-ui/react";

export const Date = ({ start, end }) => {
  const beginDate = `${start.slice(8, 10)}-${start.slice(5, 7)}-${start.slice(
    0,
    4
  )}`;
  const endDate = `${end.slice(8, 10)}-${end.slice(5, 7)}-${end.slice(0, 4)}`;
  if (beginDate === endDate) {
    return <Text>Date: {beginDate}</Text>;
  } else {
    return (
      <Text>
        Date: From
        {beginDate} to {endDate}
      </Text>
    );
  }
};

export const Time = ({ start, end }) => {
  const startTime = start.slice(11, 16);
  const endTime = end.slice(11, 16);
  if (startTime === endTime) {
    return <Text>Time: {startTime}</Text>;
  } else {
    return (
      <Text>
        Time: From {startTime} hour to {endTime} hour
      </Text>
    );
  }
};
