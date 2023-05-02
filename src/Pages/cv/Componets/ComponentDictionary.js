import Running from "./running"
import Calendly from "./calendly"
import Docketwise from "./docketwise"
import Leantech from "./leantech"
import OneOnOne from "./one-one"
import Order from "./order"
import Makeit from "./make_it"
import SmartSensors from "./smart_sensors"
import Isgt from "./isgt"
import Projects from "./projects"
import Silice from "./silice_3"
import UndergradProject from "./undergrad_project"
import Undergrad from "./undergrad"
import DataBase from "../../../Db/cv";

const data = DataBase.cvCards;

const dictionary = {
    "running": Running(data.running),
    "calendly": Calendly(data.calendly),
    "docketwise": Docketwise(data.docketwise),
    "leantech": Leantech(data.leantech),
    "order": OneOnOne(data["one-one"]),
    "order": Order(data.order),
    "make_it": Makeit(data.make_it),
    "smart-sensors": SmartSensors(data.smart_sensors),
    "isgt": Isgt(data.isgt),
    "projects": Projects(data.projects),
    "silice_3": Silice(data.silice_3),
    "undergrad_proyect": UndergradProject(data.undergrad_proyect),
    "undergrad": Undergrad(data.undergrad),
}

export default dictionary;