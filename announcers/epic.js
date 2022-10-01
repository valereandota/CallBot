import { getGames } from "epic-free-games";

getGames("GB", false).then(res => {
    channel.send(res)
}).catch(err => {
    return
});