const fetch = require('node-fetch');

let url = 'http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=221380';

class Achievement {

    constructor(name, percent) {
        this.name = name;
        this.percent = percent;
    }

    printValues() {
        console.log(`${this.name} achievement has been completed bz ${this.percent}% of people.`);
    }

}

async function fetchData(url) {
    let response = await fetch(url);
    let jsonResponse = await response.json();
    printData(jsonResponse);
}

function printData(jsonData) {
    var achievementsArray = [];
    let jsonObject = jsonData['achievementpercentages'];
    let allAchievements = jsonObject['achievements'];
    for (let achievement of allAchievements) {
        let name = achievement['name'];
        let percent = achievement['percent'];
        let newAchievement = new Achievement(name, percent);
        achievementsArray.push(newAchievement);
    }

    achievementsArray.sort((a, b) => b.percent - a.percent);

    for (let achievement of achievementsArray) {
        achievement.printValues();
    }

    console.log(`There are ${achievementsArray.length} achievements.`);
    return achievementsArray;
}

fetchData(url).catch(function() {
    console.log('Could not fetch data from Steam');
});