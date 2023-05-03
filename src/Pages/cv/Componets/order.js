import Img from "../../../Images/orderlogo.png"
// import Img0 from "../../../Images/order1.png"
// import Img1 from "../../../Images/order2.png"
// import Img2 from "../../../Images/order3.png"
// import Img3 from "../../../Images/order.png"
import Base from "./Base"

const Order = (props) => {
    const images = [Img];
    return (
        <Base title={""} bullets={props.bullets} images={images} />
    )
}
export default Order;