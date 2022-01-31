"use strict";
const dwarfButton = document.querySelector('#dwarf');
const elfButton = document.querySelector('#elf');
const halflingButton = document.querySelector('#halfling');
const humanButton = document.querySelector('#human');
dwarfButton.addEventListener('click', () => {
    let subRace = prompt("Please enter your subrace e.g hill dwarf, mountain dwarf", "hill dwarf");
    createDwarf({ subRace: subRace.toUpperCase() });
});
elfButton.addEventListener('click', () => {
    let subRace = prompt("Please enter your subrace e.g high elf or wood elf", "wood elf");
    createElf({ subRace: subRace.toUpperCase() });
});
halflingButton.addEventListener('click', () => {
    let subRace = prompt("Please enter your subrace e.g lightfoot or stout", "stout");
    createHalfling({ subRace: subRace.toUpperCase() });
});
humanButton.addEventListener('click', () => {
    let extraLanguage = prompt("Please enter an extra language to learn e.g dwarvish, elvish or halfling", "elvish");
    createHuman({ languages: [extraLanguage.toUpperCase()] });
});
var Race;
(function (Race) {
    Race["DWARF"] = "DWARF";
    Race["ELF"] = "ELF";
    Race["HALFLING"] = "HALFLING";
    Race["HUMAN"] = "HUMAN";
})(Race || (Race = {}));
;
var SubRace;
(function (SubRace) {
    SubRace["HILL_DWARF"] = "HILL DWARF";
    SubRace["MOUNTAIN_DWARF"] = "MOUNTAIN DWARF";
    SubRace["HIGH_ELF"] = "HIGH ELF";
    SubRace["WOOD_ELF"] = "WOOD ELF";
    SubRace["LIGHTFOOT"] = "LIGHTFOOT";
    SubRace["STOUT"] = "STOUT";
})(SubRace || (SubRace = {}));
;
var Languages;
(function (Languages) {
    Languages["COMMON"] = "COMMON";
    Languages["DWARVISH"] = "DWARVISH";
    Languages["ELVISH"] = "ELVISH";
    Languages["HALFLING"] = "HALFLING";
})(Languages || (Languages = {}));
var RacialTraits;
(function (RacialTraits) {
    RacialTraits["DARKVISION"] = "DARKVISION";
    RacialTraits["DWARVEN_RESILIENCE"] = "DWARVEN RESILIENCE";
    RacialTraits["STONECUNNING"] = "STONECUNNING";
    RacialTraits["DWARVEN_TOUGHNESS"] = "DWARVEN TOUGHNESS";
    RacialTraits["DWARVEN_ARMOUR_TRAINING"] = "DWARVEN ARMOUR TRAINING";
    RacialTraits["KEEN_SENSES"] = "KEEN SENSES";
    RacialTraits["FEY_ANCESTRY"] = "FEY ANCESTRY";
    RacialTraits["TRANCE"] = "TRANCE";
    RacialTraits["CANTRIP"] = "CANTRIP";
    RacialTraits["EXTRA_LANGUAGE"] = "EXTRA LANGUAGE";
    RacialTraits["LUCKY"] = "LUCKY";
    RacialTraits["BRAVE"] = "BRAVE";
    RacialTraits["HALFLING_NIMBLENESS"] = "HALFLING NIMBLENESS";
    RacialTraits["NATURALLY_STEALTHY"] = "NATURALLY STEALTHY";
    RacialTraits["STOUT_RESILIENCE"] = "STOUT RESILIENCE";
    RacialTraits["FLEET_OF_FOOT"] = "FLEET OF FOOT";
    RacialTraits["MASK_OF_THE_WILD"] = "MASK OF THE WILD";
})(RacialTraits || (RacialTraits = {}));
function randomAge(minAge, maxAge) {
    return Math.round(Math.random() * (maxAge - minAge) + minAge);
}
function createDwarf(config) {
    const minAge = 50;
    const maxAge = 350;
    config.skillBonus = [{ constitution: 2 }];
    config.age = randomAge(minAge, maxAge);
    config.speed = 25;
    config.languages = [Languages.COMMON, Languages.DWARVISH];
    config.racialTraits = [RacialTraits.DARKVISION, RacialTraits.DWARVEN_RESILIENCE, RacialTraits.STONECUNNING];
    if (config.subrace === SubRace.HILL_DWARF) {
        config.skillBonus.push({ wisdom: 1 });
        config.racialTraits.push(RacialTraits.DWARVEN_TOUGHNESS);
    }
    else if (config.subrace === SubRace.MOUNTAIN_DWARF) {
        config.skillBonus.push({ strength: 2 });
        config.racialTraits.push(RacialTraits.DWARVEN_ARMOUR_TRAINING);
    }
    console.log(config);
    return config;
}
function createElf(config) {
    const minAge = 100;
    const maxAge = 750;
    config.skillBonus = [{ dexterity: 2 }];
    config.age = randomAge(minAge, maxAge);
    config.speed = 30;
    config.languages = [Languages.COMMON, Languages.ELVISH];
    config.racialTraits = [RacialTraits.DARKVISION, RacialTraits.KEEN_SENSES, RacialTraits.FEY_ANCESTRY, RacialTraits.TRANCE];
    if (config.subrace === SubRace.HIGH_ELF) {
        config.skillBonus.push({ intelligence: 1 });
        config.racialTraits.push(RacialTraits.CANTRIP, RacialTraits.EXTRA_LANGUAGE);
    }
    else if (config.subrace === SubRace.WOOD_ELF) {
        config.skillBonus.push({ wisdom: 1 });
        config.racialTraits.push(RacialTraits.FLEET_OF_FOOT, RacialTraits.MASK_OF_THE_WILD);
    }
    console.log(config);
    return config;
}
function createHalfling(config) {
    const minAge = 20;
    const maxAge = 200;
    config.skillBonus = [{ dexterity: 2 }];
    config.age = randomAge(minAge, maxAge);
    config.speed = 25;
    config.languages = [Languages.COMMON, Languages.HALFLING];
    config.racialTraits = [RacialTraits.LUCKY, RacialTraits.BRAVE, RacialTraits.HALFLING_NIMBLENESS];
    if (config.subrace === SubRace.LIGHTFOOT) {
        config.skillBonus.push({ charisma: 1 });
        config.racialTraits.push(RacialTraits.NATURALLY_STEALTHY);
    }
    else if (config.subrace === SubRace.STOUT) {
        config.skillBonus.push({ constitution: 1 });
        config.racialTraits.push(RacialTraits.STOUT_RESILIENCE);
    }
    console.log(config);
    return config;
}
function createHuman(config) {
    const minAge = 18;
    const maxAge = 80;
    config.skillBonus = [
        { dexterity: 1 },
        { strength: 1 },
        { constitution: 1 },
        { intelligence: 1 },
        { wisdom: 1 },
        { charisma: 1 }
    ];
    config.age = randomAge(minAge, maxAge);
    config.speed = 30;
    if (config.languages) {
        config.languages.push(Languages.COMMON);
    }
    config.racialTraits = [RacialTraits.EXTRA_LANGUAGE];
    console.log(config);
    return config;
}
