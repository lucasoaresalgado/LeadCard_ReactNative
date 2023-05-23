import React from "react";
import { View } from "react-native";
import Card from "./component/card";

const App = () => {
  // Define your data for the card
  const fullName = "John Doe";
  const phoneNumber = "1234567890";
  const email = "johndoe@example.com";
  const description = "Lorem ipsum dolor sit amet";
  const date = "2023-05-23";
  const notes = "Some notes";

  const handleEdit = () => {
    // Handle edit functionality here
  };
  return (
    <View>
      <Card
        history={history}
        fullName={fullName}
        phoneNumber={phoneNumber}
        email={email}
        description={description}
        handleEdit={handleEdit}
      />
    </View>
  );
};
export default App;
