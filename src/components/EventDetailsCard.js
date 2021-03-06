import React from "react";
import {
  Card,
  Description,
  DisplayImage,
  Title,
} from "./EventDetailsCardElements";
import JurongLakeGardens from "../assets/Jurong Lake Gardens.jpg";
import { Colors } from "../Theme";
import { Button } from "semantic-ui-react";

function EventDetailsCard(props) {
  const jioText = (status) => {
    switch (status) {
      case "None":
        return "We Jio U to the event!";
      case "Pending":
        return "We are assessing everyone's responses to our Jio.";
      case "Confirmed":
        return "We have confirmed your slot. See you there!";
      default:
        return "";
    }
  };
  const ButtonStatusNone = () => {
    return (
      <Button
        style={{
          width: "100%",
          height: "auto",
          margin: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.2rem 0",
          background: Colors.primary,
          color: "white",
        }}
      >
        I accept the Jio!
      </Button>
    );
  };
  const ButtonStatusPending = () => {
    return (
      <Button
        style={{
          width: "100%",
          height: "auto",
          margin: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.2rem 0",
          border: `1px solid ${Colors.grey}`,
          background: "none",
          color: `${Colors.grey}`,
        }}
        disabled
      >
        Pending Confirmation
      </Button>
    );
  };
  const ButtonStatusConfirmed = () => {
    return (
      <Button
        style={{
          width: "100%",
          height: "auto",
          margin: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.2rem 0",
          border: `1px solid ${Colors.green}`,
          background: "none",
          color: `${Colors.green}`,
        }}
        disabled
      >
        Confirmed
      </Button>
    );
  };

  function ActionButton(status) {
    switch (status) {
      case "None":
        return <ButtonStatusNone />;
      case "Pending":
        return <ButtonStatusPending />;
      case "Confirmed":
        return <ButtonStatusConfirmed />;
      default:
        return <></>;
    }
  }

  return (
    <Card>
      <Title>{props.title}</Title>
      <DisplayImage src={JurongLakeGardens} />
      <Description>{props.description}</Description>
      <Description>{jioText(props.status)}</Description>
      {ActionButton(props.status)}
    </Card>
  );
}

export default EventDetailsCard;
