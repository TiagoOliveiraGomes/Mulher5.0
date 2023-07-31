import { TouchableOpacity, TouchableOpacityProps, Text} from 'react-native'

interface IconButtonProps extends TouchableOpacityProps {
    children: JSX.Element,
    text: string,
}
export const IconButton = ({children, text, ...props}: IconButtonProps) => {
    return (
        <TouchableOpacity {...props} style={{alignItems:"center"}}>
            {children}
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}