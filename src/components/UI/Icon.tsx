import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export function Icon({color, size, name}: any){
  return (
    <FontAwesome5
    name={name}
    color={color}
    size={size}
  />
  );
} 