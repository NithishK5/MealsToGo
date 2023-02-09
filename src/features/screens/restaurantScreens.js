import React, { useContext } from "react";
import { FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurantInfoCardComponent";
import { Spacer } from "../../components/spacer/spacerComponent";
import styled from "styled-components";
import { SafeArea } from "../../components/safeAreaComponent";
import { RestaurantsContext } from "../../services/restaurants/restaurantContext";
import { ActivityIndicator } from "react-native-paper";
import { Search } from "../components/searchComponent";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 15,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
