const fetch = require('node-fetch');

let url = 'http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=221380';

async function fetchData(url) {
    let response = await fetch(url);
    let jsonResponse = await response.json();
    console.log(JSON.stringify(jsonResponse));
}

fetchData(url).catch(function() {
    console.log('Could not fetch data');
});