// import Img from "../../../Images/posgis.png"
// import Img1 from "../../../Images/ftl.png"
import Img from "../../../Images/leantechlogo.png"
import Base from "./Base"

const Leantech = (props) => {
    const images = [Img]
    return (
        <Base title={""} bullets={props.bullets} images={images} />
    )
}
export default Leantech;