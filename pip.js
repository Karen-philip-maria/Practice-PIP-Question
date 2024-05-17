const emergencyResources = [
    {"name": "Medical Team", "longitude": -122.1215},
    {"name": "Food Supplies", "longitude": -121.9552}
];

function allocateResources(disasterLocationLongitude) {
    let allocatedResources = [];
    for (let resource of emergencyResources) {
        let resourceLongitude = resource.longitude;
        let distance = Math.abs(resourceLongitude - disasterLocationLongitude);
        if (distance <= 1.0) {
            allocatedResources.push(resource.name);
        }
    }
    return allocatedResources;
}

const disasterLongitude = -122.3321;
const allocatedResources = allocateResources(disasterLongitude);

if (allocatedResources.length > 0) {
    console.log("Allocated resources:");
    for (let resource of allocatedResources) {
        console.log(`- ${resource}`);
    }
} else {
    console.log("No resources allocated for the given location.");
}


