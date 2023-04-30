const linkName = (title) => {
    const links = {
        "Home": "home",
        "CV":   "cv",
        "Cover letter": "cover_letter",
        "Links": "links"
    }

    return links[title] || "/";
}
export default linkName