import { TouchableOpacity, Text} from 'react-native'

interface IconButtonProps  {
    children: JSX.Element,
    text: string
}
export const IconButton = (props: IconButtonProps) => {
    return (
        <TouchableOpacity style={{alignItems:"center"}}>
            {props.children}
            <Text>{props.text}</Text>
        </TouchableOpacity>
    )
}