import { Users } from "./Users";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
const user=new Users();
const company=new Company();

const customMap=new CustomMap('map')
customMap.addMarker(user)
customMap.addMarker(company);