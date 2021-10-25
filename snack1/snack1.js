"use strict"

const bikes = [
    {
        name: "Cannondale",
        weight: 7
    },
    {
        name: "Canyon",
        weight: 7.3
    },
    {
        name: "Bianchi",
        weight:7.5 
    },
    {
        name: "Specialized",
        weight: 7.6
    },
    {
        name: "Pinarello",
        weight: 7.8
    },
];

GetLightestBike();

function GetLightestBike(){
    const lightestBike = bikes[0];

    for(let i=0; i < bikes.length; i++){
        if(bikes[i].weight < lightestBike.weight){
            lightestBike = bikes[i];
        }
    }
    const {name, weight} = lightestBike;

    console.log(`the ligthest bike is: ${name} with a weight of ${weight}kg`);
}
