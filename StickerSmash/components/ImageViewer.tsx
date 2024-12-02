import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image, type ImageSource } from "expo-image";

type Props = {
  imageSource: ImageSource;
};

const ImageViewer = ({ imageSource }: Props) => {
  return <Image source={imageSource} style={styles.image} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
