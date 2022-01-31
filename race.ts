const dwarfButton = document.querySelector('#dwarf')!;
const elfButton = document.querySelector('#elf')!;
const halflingButton = document.querySelector('#halfling')!;
const humanButton = document.querySelector('#human')!;

dwarfButton.addEventListener('click', () => {
    let subRace = prompt("Please enter your subrace e.g hill dwarf, mountain dwarf", "hill dwarf")!.toUpperCase()
    
    createDwarf({subRace: subRace})
});

elfButton.addEventListener('click', () => {
    let subRace = prompt("Please enter your subrace e.g high elf or wood elf", "wood elf")!.toUpperCase()
    
    createElf({subRace: subRace})
});

halflingButton.addEventListener('click', () => {
    let subRace = prompt("Please enter your subrace e.g lightfoot or stout", "stout")!.toUpperCase()

        createHalfling({subRace: subRace})
});

humanButton.addEventListener('click', () => {
    let extraLanguage = prompt("Please enter an extra language to learn e.g dwarvish, elvish or halfling", "elvish")!.toUpperCase()
    
    createHuman({languages: [extraLanguage]})
});


interface RaceConfig {
    race: string,
    skillBonus: object[],
    age: number,
    speed: number,
    languages: string[],
    subrace?: string,
    racialTraits : string[]
}

enum Race {DWARF = 'DWARF', ELF = 'ELF' , HALFLING= 'HALFLING', HUMAN = 'HUMAN'} ;
enum SubRace {HILL_DWARF = 'HILL DWARF', MOUNTAIN_DWARF = 'MOUNTAIN DWARF' , HIGH_ELF= 'HIGH ELF', WOOD_ELF = 'WOOD ELF', LIGHTFOOT = 'LIGHTFOOT', STOUT = 'STOUT'} ;

enum Languages {COMMON = 'COMMON', DWARVISH = 'DWARVISH', ELVISH = 'ELVISH', HALFLING = 'HALFLING'}

enum RacialTraits {DARKVISION = 'DARKVISION', DWARVEN_RESILIENCE = 'DWARVEN RESILIENCE', STONECUNNING = 'STONECUNNING', DWARVEN_TOUGHNESS = 'DWARVEN TOUGHNESS', DWARVEN_ARMOUR_TRAINING = 'DWARVEN ARMOUR TRAINING', KEEN_SENSES = 'KEEN SENSES', FEY_ANCESTRY = 'FEY ANCESTRY', TRANCE = 'TRANCE', CANTRIP = 'CANTRIP', EXTRA_LANGUAGE = 'EXTRA LANGUAGE', LUCKY = 'LUCKY', BRAVE = 'BRAVE', HALFLING_NIMBLENESS = 'HALFLING NIMBLENESS', NATURALLY_STEALTHY = 'NATURALLY STEALTHY', STOUT_RESILIENCE = 'STOUT RESILIENCE', FLEET_OF_FOOT = 'FLEET OF FOOT', MASK_OF_THE_WILD = 'MASK OF THE WILD'}

function randomAge(minAge: number, maxAge: number){
    return Math.round( Math.random() * (maxAge - minAge) + minAge)
}


// Dwarf Creation
// Please select subrace
function createDwarf(config: any){
    const minAge = 50
    const maxAge = 350

    config.race = Race.DWARF
    config.skillBonus = [{constitution: 2}]
    config.age = randomAge(minAge,maxAge)
    config.speed = 25
    config.languages = [Languages.COMMON, Languages.DWARVISH]
    config.racialTraits = [RacialTraits.DARKVISION, RacialTraits.DWARVEN_RESILIENCE, RacialTraits.STONECUNNING]
    
    if(config.subrace === SubRace.HILL_DWARF){

        config.skillBonus.push({wisdom: 1})
        config.racialTraits.push(RacialTraits.DWARVEN_TOUGHNESS)
        
    }else if(config.subrace === SubRace.MOUNTAIN_DWARF){
        
        config.skillBonus.push({strength: 2})
        config.racialTraits.push(RacialTraits.DWARVEN_ARMOUR_TRAINING)
    }

    console.log(config)
    return config

}

// Elf Creation
// Please select subrace
function createElf(config: any){
    const minAge = 100
    const maxAge = 750

    config.race = Race.ELF
    config.skillBonus = [{dexterity: 2}]
    config.age = randomAge(minAge,maxAge)
    config.speed = 30
    config.languages = [Languages.COMMON, Languages.ELVISH]
    config.racialTraits = [RacialTraits.DARKVISION, RacialTraits.KEEN_SENSES, RacialTraits.FEY_ANCESTRY, RacialTraits.TRANCE]
    
    if(config.subrace === SubRace.HIGH_ELF){

        config.skillBonus.push({intelligence: 1})
        config.racialTraits.push(RacialTraits.CANTRIP, RacialTraits.EXTRA_LANGUAGE)
        
    }else if(config.subrace === SubRace.WOOD_ELF){
        
        config.skillBonus.push({wisdom: 1})
        config.racialTraits.push(RacialTraits.FLEET_OF_FOOT, RacialTraits.MASK_OF_THE_WILD)
    }

    console.log(config)
    return config

}


// Halfling Creation
// Please select subrace
function createHalfling(config: any){
    const minAge = 20
    const maxAge = 200

    config.race = Race.HALFLING
    config.skillBonus = [{dexterity: 2}]
    config.age = randomAge(minAge,maxAge)
    config.speed = 25
    config.languages = [Languages.COMMON, Languages.HALFLING]
    config.racialTraits = [RacialTraits.LUCKY, RacialTraits.BRAVE, RacialTraits.HALFLING_NIMBLENESS]
    
    if(config.subrace === SubRace.LIGHTFOOT){

        config.skillBonus.push({charisma: 1})
        config.racialTraits.push(RacialTraits.NATURALLY_STEALTHY)
        
    }else if(config.subrace === SubRace.STOUT){
        
        config.skillBonus.push({constitution : 1})
        config.racialTraits.push(RacialTraits.STOUT_RESILIENCE)
    }

    console.log(config)
    return config

}


// Human Creation
// Please select extra language
function createHuman(config: any){
    const minAge = 18
    const maxAge = 80

    config.race = Race.HUMAN
    config.skillBonus = [
        {dexterity: 1},
        {strength: 1},
        {constitution: 1},
        {intelligence: 1},
        {wisdom: 1},
        {charisma: 1}
    ]
    config.age = randomAge(minAge,maxAge)
    config.speed = 30

    if(config.languages){
        config.languages.push(Languages.COMMON)
    }

    config.racialTraits = [RacialTraits.EXTRA_LANGUAGE]
    

    console.log(config)
    return config

}

