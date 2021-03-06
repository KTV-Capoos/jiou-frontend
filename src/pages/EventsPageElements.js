import styled from "styled-components";
import { Colors } from "../Theme";

export const Main = styled.div`
  background-color: ${Colors.veryLightGrey};
  height: 100vh;
`;

export const ContentContainer = styled.div`
  display: flex;
  padding-top: 40px;
`;

export const EventContainer = styled.div`
  margin: 20px;
  flex: 3;
`;

export const FilterContainer = styled.div`
  margin: 30px 20px;
  flex: 2;
  max-width: 30%;
`;

export const FilterCard = styled.div`
  background-color: white;
  border-radius: 10px;
`;

export const DatesFilterContainer = styled.div`
  margin: 20px;
  padding: 10px 0px;
`;

export const CategoriesFilterContainer = styled.div`
  margin: 20px;
  padding: 5px 0px;
`;

export const BudgetFilterContainer = styled.div`
  margin: 20px;
  padding-bottom: 10px;
`;

export const FilterSectionTitle = styled.div`
  font-size: 1.2rem;
  padding-bottom: 15px;
`;

export const MaxPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;