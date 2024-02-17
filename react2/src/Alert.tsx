import { useState } from "react"


type Props = {
    type?: string
    heading: string
    children: React.ReactNode
    closable?: boolean
    onClose?: () => void
}

export function Alert({ type = 'information', 
heading,children,closable,onClose}: Props){
    const [visible,setVisible] = useState(true)
}