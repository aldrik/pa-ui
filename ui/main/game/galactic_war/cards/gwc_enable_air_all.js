// !LOCNS:galactic_war
define(['shared/gw_common'], function (GW) {
    return {
        visible: function(params) { return true; },
        describe: function(params) { 
            return '!LOC:Complete air tech enables building of all mobile air units and factories. Basic air factories are built via your commander or any basic fabricator. Advanced factories are built via a basic or advanced vehicle fabricator.';
        },
        summarize: function(params) {
            return '!LOC:Complete Air Tech';
        },
        icon: function(params) {
            return 'coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_combat_air.png';
        },
        audio: function (parms) {
            return {
                found: '/VO/Computer/gw/board_tech_available_air'
            }
        },
        getContext: function (galaxy) {
            return {
                totalSize: galaxy.stars().length
            };
        },
        deal: function (system, context, inventory) {
            var chance = 0;
            var dist = system.distance();
            var chanceMod = 1;
            if( !(inventory.hasCard('gwc_enable_bots_all') || inventory.hasCard('gwc_enable_vehicles_all') || inventory.hasCard('gwc_enable_air_all')) )
            {
                chanceMod = 3;
            }
            if (dist > 0) {
                if (context.totalSize <= GW.balance.numberOfSystems[0]) {
                    chance = 25;
                    if (dist > 2)
                        chance = 200;
                }
                else if (context.totalSize <= GW.balance.numberOfSystems[1]) {
                    chance = 25;
                    if (dist > 3)
                        chance = 200;
                }
                else if (context.totalSize <= GW.balance.numberOfSystems[2]) {
                    chance = 25;
                    if (dist > 4)
                        chance = 200;
                }
                else if (context.totalSize <= GW.balance.numberOfSystems[3]) {
                    chance = 25;
                    if (dist > 5)
                        chance = 200;
                }
                else {
                    chance = 25;
                    if (dist > 6)
                        chance = 200;
                }
            }
            chance *= chanceMod;
            return { chance: chance };

        },
        buff: function(inventory, params) {
            inventory.addUnits([
                '/pa/units/air/air_factory/air_factory.json',
                '/pa/units/air/air_factory_adv/air_factory_adv.json',
                '/pa/units/air/air_scout/air_scout.json',
                '/pa/units/air/bomber/bomber.json',
                '/pa/units/air/fighter/fighter.json',
                '/pa/units/air/transport/transport.json',
                '/pa/units/air/solar_drone/solar_drone.json'
            ]);
        },
        dull: function(inventory) {
        }
    };
});
