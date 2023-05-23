import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const Card = ({
  fullName,
  phoneNumber,
  email,
  description,
  date,
  notes,
  handleEdit
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.text}>Full Name: {fullName}</Text>
        <Text style={styles.text}>Phone Number: {phoneNumber}</Text>
        <Text style={styles.text}>Email: {email}</Text>
        <Text style={styles.textSpace}>Description: {description}</Text>
        <Text style={styles.text}>Date: {date}</Text>
        <Text style={styles.textSpace}>Notes: {notes}</Text>
        <Button title="Edit" onPress={handleEdit} />
        <br />
        <Button title="See Timeline" onPress={handleEdit} />
      </View>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E"
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    flexDirection: "row"
  },
  cardContent: {
    flex: 1
  },
  textSpace: {
    fontSize: 18,
    fontWeight: "600",
    backgroundColor: "#e9e7e7",
    borderRadius: 8,
    padding: 5,
    marginBottom: 16
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    backgroundColor: "#e9e7e7",
    borderRadius: 8,
    padding: 5,
    marginBottom: 2,
    position: "relative"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
    position: "absolute",
    right: 16,
    top: "50%",
    transform: [{ translateY: -135 }]
  }
});

export default Card;
