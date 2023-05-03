import Img from "../../../Images/newyork2.png"
import Base from "./Base"

const Docketwise = (props) => {
    const images = [
        Img
    ]
    return (
        <Base title={""} bullets={props.bullets} images={images} />
    )
}
export default Docketwise;