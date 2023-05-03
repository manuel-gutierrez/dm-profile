import Img from "../../../Images/calendlylogo.jpeg"
import Base from "./Base"

const Calendly = (props) => {
    const images = [
        Img
    ]
    return (
        <Base title={""} bullets={props.bullets} images={images} />
    )
}
export default Calendly;