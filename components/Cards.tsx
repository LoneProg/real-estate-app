import images from "@/constants/images";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
  onPress?: () => void;
}

const FeaturedCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative overflow-hidden rounded-2xl"
      style={{ width: 240, height: 320 }}
    >
      <Image source={images.japan} className="size-full rounded-2xl" />
      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      />
    </TouchableOpacity>
  );
};

const RegularCard = () => {
  return (
    <View>
      <Text>RegularCard</Text>
    </View>
  );
};

export { FeaturedCard, RegularCard };
