/** @param {NS} ns */
export async function main(ns) {
  //agility
  if (ns.singularity.isBusy() == true){
    ns.singularity.stopAction();
  }
  var strength = ns.getPlayer().skills.strength;
  while (strength < 100){
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
  while (agility < 100){
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
  while (defense < 100){
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
  while (dexterity < 100){
    if (ns.singularity.isBusy() == false){
      ns.singularity.gymWorkout("Powerhouse Gym", "dexterity");
    }
    await ns.sleep(10000);
    dexterity = ns.getPlayer().skills.dexterity;
  }
  ns.singularity.stopAction();

}
