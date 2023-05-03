import Img from "../../../Images/i_love_microgrids.jpeg"
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