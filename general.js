

function load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
    if(savegame.version!=version){
        update();
    }

}

function save(){
	var save = {
   		heroes: heroes,
		villains:villains,
        mods:mods,
        played:played,
        version: version,
		settings: settings,
    }
	localStorage.setItem("save",JSON.stringify(save));
}


window.onload = function(){
	load();
	/*settings.autosaveId = setInterval(function(){
		save();
	}, settings.autosavespeed);
	setInterval(function(){update()},settings.tickspeed);*/
}

var version = [0]

var heroes = {
    0:{
        name:"Spider-Man (Peter Parker)",
        aspects:1,
        unique:false,
        vanilla:true,
        pic:false
    },
}

var villains = {
    0:{
        name:"Rhino",
        mods:"1",
        unique:false,
        difficulty:true,
        pic:false
    }
}

var mods = {
    0:{
        name:"Bomb Scare",
        themes:"threat",
        uniques:false
    }
}

var standard = {
    0:{
        name:"Standard"
    }
}

var expert = {
    0:{
        name:"Expert"
    }

}

var played = {
    0:{//player_count
        "0":{//difficulty "0" for standard only, "0_0" for a combination of standard and expert sets
            0:{//villainID
                0:{//heroID as string in MP "0_1_2_3"
                    "0":{//Aspect as sting in MP "0_0_0_0"
                        0:{
                            
                        }
                    }
                }
            }
        }
    }

}