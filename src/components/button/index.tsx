import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string
}

export default function Button({title, ...rest}: Props) {
    return (
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={styles.textBtn} >{title}</Text>
        </TouchableOpacity>
    )
}