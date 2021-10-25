/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

"use strict"

const league = [
    {
        name: "Catania",
        points: 0,
        fouls: 0,
    },
    {
        name: "Palermo",
        points: 0,
        fouls: 0,
    },
    {
        name: "Lecce",
        points: 0,
        fouls: 0,
    },
    {
        name: "Chievo Verona",
        points: 0,
        fouls: 0,
    },
    {
        name: "Bari",
        points: 0,
        fouls: 0,
    },
    {
        name: "Parma",
        points: 0,
        fouls: 0,
    },
]

const matches = (league.length - 1) * 2;

function RandomNumberGenerator(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}

function LeagueResultsGenerator(){
    for(let i=0; i<league.length; i++){
        league[i].points = RandomNumberGenerator(0, (matches * 3));
        league[i].fouls = RandomNumberGenerator(0, (matches * 14));
    }
    console.log("Console log of league array", league);
}

function NewArrayGenerator(){
    const newLeague= [];
    for(let i=0; i < league.length; i++){
        const {name, fouls} = league[i];
        newLeague.push({name, fouls});
    }
    console.log("Console log of newLeague array", newLeague);
}

LeagueResultsGenerator();
NewArrayGenerator();