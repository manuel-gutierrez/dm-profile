import Img from "../../../Images/posgis.png"
import Img1 from "../../../Images/ftl.png"
import Base from "./Base"

const Leantech = (props) => {
    const images = [Img,Img1]
    return (
        <Base title={""} bullets={props.bullets} images={images} />
    )
}
export default Leantech;