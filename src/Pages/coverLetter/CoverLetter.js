import classes from "./CoverLetter.module.css"

const CoverLetter = () => {
    return (
        <div className={classes.main}>
            <h1> Kamilo Melo Work in progress: </h1>
             <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vTc0g0CvVbNUoHHVOjd6TEwtjuIm1RyOZta1svF-yxrT8qNbqLRmJkklQQHKs7rvfs5Ub55HP5PEMJR/pub?embedded=true&scrollbar=0"
                frameBorder="0"
                scrolling="auto"
                height="100%"
                width="100%"
            ></iframe>
        </div>
    )
}

export default CoverLetter;