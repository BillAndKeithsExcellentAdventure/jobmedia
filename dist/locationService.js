import * as Location from "expo-location";
export async function getCurrentLocation() {
    try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            console.error("Permission to access location was denied");
            return null;
        }
        let location = await Location.getCurrentPositionAsync({});
        return {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        };
    }
    catch (error) {
        console.error(`Error getting current location: ${error}`);
        return null;
    }
}
