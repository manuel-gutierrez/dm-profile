import Img from "../../../Images/docket.png"
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