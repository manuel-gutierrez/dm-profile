import classes from "./Links.module.css"
import SectionHeader from "../../Components/SectionHeader";

const Links = () => {
    const subTitle = "Making the best of this life experience, passionate for Technology and the posibility to make people life better through Engineering";
    return (
        <div>
            <SectionHeader title="Links" subTitle={subTitle} />
            <section>
                <h1>Profile</h1>
            </section>
            <section>
                <h1>Interests</h1>
            </section>
        </div>
    )
}

export default Links;