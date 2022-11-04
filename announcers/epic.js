const { getGames } = require('epic-free-games')


async function freeCheck(gamingChannel) {
    getGames("GB", true).then(res => {
        let message = "Currently, the following games are free on the Epic Store for a limited time : ";
        gamingChannel.send(message)
        res.currentGames.forEach(game => {
            gamingChannel.send(game.title),
                gamingChannel.send(game.keyImages[0].url)
        })
    }).catch(err => {
        console.log(err)
    });
}

module.exports = {
    freeCheck
}