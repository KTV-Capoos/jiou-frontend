import React from "react";
import {
  Main,
  ContentContainer,
  EventContainer,
  HeaderText,
} from "./MyEventsPageElements";
import EventCardComponent from "../components/EventCardComponent";
import NavBarComponent from "../components/NavBarComponent";

function MyEventsPage() {
  return (
    <Main>
      <NavBarComponent />
      <ContentContainer>
        <HeaderText>My Events</HeaderText>
        <EventContainer>
          <EventCardComponent
            name={"Rose Making Workshop"}
            price={7}
            date={"11/7/2022"}
            time={"10:00-12:00"}
            location={"Central, Singapore"}
          />
        </EventContainer>
      </ContentContainer>
    </Main>
  );
}

export default MyEventsPage;
