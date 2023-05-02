import Img from "../../../Images/maraton.png"
import Base from "./Base"

const SmartSensors = (props) => {
    const images = [
        Img
    ]
    return (
        <Base title={""} bullets={props.bullets} images={images} />
    )
}
export default SmartSensors;