const task7 = require("./task7");

module.exports.AddStation = function(array, station){
    if(typeof(array) != typeof(new Array) || typeof(station) != typeof(new task7.SpaceStation))
        return "Wrong data!";
    array.push(station);
    return;
}

module.exports.EditingStation = function(array, index, newStation){
    if(typeof(array) != typeof(new Array) || index > array.length || typeof(newStation) != typeof(new task7.SpaceStation))
        return "Wrong data!";
    else array[index] = newStation;
    return;
}

module.exports.DeleteStation = function(array, index){
    if(typeof(array) != typeof(new Array) || index > array.length)
        return "Wrong data!";
    else array.splice(index, 1);
    return;
}

module.exports.FindStation = function(array, id){
    if(typeof(array) != typeof(new Array))
        return console.log("Wrong data!");
    else {
        let result;
        array.forEach(element => {
            if(element.id === id)
                result = element;
        });
        return result === undefined ? 
        console.log("There is no station with id " + id + "!") : 
        console.log("Result: ", result);
    }
}

module.exports.AddPlanet = function(array, planet){
    if(typeof(array) != typeof(new Array) || typeof(planet) != typeof(new task7.Planet))
        return "Wrong data!";
    array.push(planet);
    return;
}

module.exports.EditingPlanet = function(array, index, newPlanet){
    if(typeof(array) != typeof(new Array) || index > array.length || typeof(newPlanet) != typeof(new task7.Planet))
        return "Wrong data!";
    else array[index] = newPlanet;
    return;
}

module.exports.DeletePlanet = function(array, index){
    if(typeof(array) != typeof(new Array) || index > array.length)
        return "Wrong data!";
    else array.splice(index, 1);
    return;
}

module.exports.FindPlanet = function(array, id){
    if(typeof(array) != typeof(new Array))
        return console.log("Wrong data!");
    else {
        let result;
        array.forEach(element => {
            if(element.id === id)
                result = element;
        });
        return result === undefined ? 
        console.log("There is no planet with id " + id + "!") : 
        console.log("Result: ", result);
    }
}

module.exports.AddCargo = function(array, Cargo){
    if(typeof(array) != typeof(new Array) || typeof(Cargo) != typeof(new task7.Cargo))
        return "Wrong data!";
    array.push(Cargo);
    return;
}

module.exports.EditingCargo = function(array, index, newCargo){
    if(typeof(array) != typeof(new Array) || index > array.length || typeof(newCargo) != typeof(new task7.Cargo))
        return "Wrong data!";
    else array[index] = newCargo;
    return;
}

module.exports.DeleteCargo = function(array, index){
    if(typeof(array) != typeof(new Array) || index > array.length)
        return "Wrong data!";
    else array.splice(index, 1);
    return;
}

module.exports.PrintStations = function(planet){
    return planet.stations === undefined ?
        console.log("This planet has no stations") :
        console.log("Stations of this planet: ", planet.stations);
}