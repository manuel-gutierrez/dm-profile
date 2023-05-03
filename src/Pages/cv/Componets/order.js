import Img from "../../../Images/order1.png"
import Img1 from "../../../Images/order2.png"
import Img2 from "../../../Images/order3.png"
import Img3 from "../../../Images/order.png"
import Base from "./Base"

const Order = (props) => {
    const images = [Img1, Img, Img2,Img3];
    return (
        <Base title={""} bullets={props.bullets} images={images} />
    )
}
export default Order;