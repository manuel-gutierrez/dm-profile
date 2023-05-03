import Img from "../../../Images/makeit.jpeg"
import Base from "./Base"

const Makeit = (props) => {
    const images = [
        Img
    ]
    return (
        <Base title={""} bullets={props.bullets} images={images} />
    )
}
export default Makeit;