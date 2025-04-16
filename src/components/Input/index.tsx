import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

// Basicamente a tipagemem typescript se declara assim, o "rest" despeja
// todas as propriedades de um objeto que não explicitamente delcarados
export default function Input({...rest}: TextInputProps) {
    // Caso tenha outras propriedades declaradas use o "rest" por último
    return <TextInput style={styles.input} placeholder="Digite seu nome..." {...rest} />
}