import React, { useContext } from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/locationContext";
import { RestaurantsContext } from "../../../services/restaurants/restaurantContext";
import { Search } from "../components/searchComponent";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  return (
    <>
      <Search />
      <Map>
        {restaurants.map((restaurant) => {
          return null;
        })}
      </Map>
    </>
  );
};
