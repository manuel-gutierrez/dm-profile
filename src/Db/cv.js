
const cvCards = {
    "running": {
        "title": "Calendly Fullstack III: Meeting Unicorn company",
        "children": "true",
        "footer": " I dont know what to add here"
    },
    "calendly": {
        "title": "Calendly Fullstack III: Meeting Unicorn company",
        "children": "true",
        "footer": " I dont know what to add here"
    },
    "docketwise": {
        "title": "",
        "children": "true",
        "footer": " I dont know what to add here"
    },
    "leantech": {
        "title": "",
        "children": "true",
        "footer": " I dont know what to add here"
    },
    "one-one": {
        "title": "",
        "children": "true",
        "footer": " I dont know what to add here"
    },
    "order": {
        "title": "",
        "children": "true",
        "footer": " I dont know what to add here"
    },
    "smart_sensors_make_it": {
        "title": "",
        "children": "true",
        "footer": " I dont know what to add here"
    },
    "isgt": {
        "title": "",
        "children": "true",
        "footer": " I dont know what to add here"
    },
    "msc": {
        "title": "",
        "children": "true",
        "footer": " I dont know what to add here"
    },
    "projects": {
        "title": "",
        "children": "true",
        "footer": " I dont know what to add here"
    },
    "silice_3": {
        "title": "",
        "children": "true",
        "footer": " I dont know what to add here"
    },
    "undergrad_proyect": {
        "title": "",
        "children": "true",
        "footer": " I dont know what to add here"
    },
    "undergrad": {
        "title": "",
        "children": "true",
        "footer": " I dont know what to add here"
    }
}
const values = [
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011"
]
const dynamic = {
    "2023": ["running"],
    "2022": ["calendly"],
    "2021": ["docketwise"],
    "2020": ["leantech"],
    "2019": ["order", "one-one"],
    "2018": ["order"],
    "2017": ["smart_sensors_make_it"],
    "2016": ["isgt"],
    "2015": ["msc"],
    "2014": ["projects"],
    "2013": ["silice_3"],
    "2012": ["undergrad_proyect"],
    "2011": ["undergrad"],
}
const cvData = { cvCards, years: values, dynamic}

export default cvData;