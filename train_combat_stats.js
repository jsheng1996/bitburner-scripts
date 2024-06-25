/** @param {NS} ns */
export async function main(ns) {
  const args = ns.flags([["help", false]]);
	if (args.help || args._.length < 1) {
		ns.tprint("This script trains combat stats to specified target");
		ns.tprint(`Usage: run ${ns.getScriptName()} TARGET`);
		ns.tprint("Example:");
		ns.tprint(`> run ${ns.getScriptName()} 50`);
		return;
	}
  const target = args._[0];
  //agility
  if (ns.singularity.isBusy() == true){
    ns.singularity.stopAction();
  }
  var strength = ns.getPlayer().skills.strength;
  while (strength < target){
    if (ns.singularity.isBusy() == false){
      ns.singularity.gymWorkout("Powerhouse Gym", "strength");
    }
    await ns.sleep(10000);
    strength = ns.getPlayer().skills.strength;
  }
  ns.singularity.stopAction();

  //Agility
  if (ns.singularity.isBusy() == true){
    ns.singularity.stopAction();
  }
  var agility = ns.getPlayer().skills.agility;
  while (agility < target){
    if (ns.singularity.isBusy() == false){
      ns.singularity.gymWorkout("Powerhouse Gym", "agility");
    }
    await ns.sleep(10000);
    agility = ns.getPlayer().skills.agility;
  }
  ns.singularity.stopAction();

  //Defense
  if (ns.singularity.isBusy() == true){
    ns.singularity.stopAction();
  }
  var defense = ns.getPlayer().skills.defense;
  while (defense < target){
    if (ns.singularity.isBusy() == false){
      ns.singularity.gymWorkout("Powerhouse Gym", "defense");
    }
    await ns.sleep(10000);
    defense = ns.getPlayer().skills.defense;
  }
  ns.singularity.stopAction();

  //Dexterity
  if (ns.singularity.isBusy() == true){
    ns.singularity.stopAction();
  }
  var dexterity = ns.getPlayer().skills.dexterity;
  while (dexterity < target){
    if (ns.singularity.isBusy() == false){
      ns.singularity.gymWorkout("Powerhouse Gym", "dexterity");
    }
    await ns.sleep(10000);
    dexterity = ns.getPlayer().skills.dexterity;
  }
  ns.singularity.stopAction();

}
