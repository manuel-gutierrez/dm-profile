import Img from "../../../Images/maraton.png"
import Base from "./Base"

const Silice = (props) => {
    const images = [
        Img
    ]
    return (
        <Base title={""} bullets={props.bullets} images={images} />
    )
}
export default Silice;