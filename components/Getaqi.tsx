"use server"
import { GeoIP } from "./GeoIP";


//Location by ip start
const ipcords = await GeoIP();
const ip_lat = ipcords.address.latitude;
const ip_lon = ipcords.address.longitude
const lat = ip_lat;
const lon = ip_lon;
//Location by ip end



//export function start
export async function Getaqi () {
    const response = await fetch(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${process.env.apikey}`)
    const data = await response.json();
    return data;


}
