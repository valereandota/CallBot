async function heroSearch(heroName){
    const dota2Info = require('dota2-info');
    const hero = await dota2Info.getHeroes({name: heroName});
    return hero
    }

module.exports = {
    heroSearch
}