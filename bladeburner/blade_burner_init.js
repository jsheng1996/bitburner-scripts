/** @param {NS} ns */
export async function main(ns) {
  //agility
  if (ns.singularity.isBusy() == true){
    ns.singularity.stopAction();
  }
  var agility = ns.getPlayer().skills.agility;
  while (strength < 200){
    if (ns.singularity.isBusy() == false){
      ns.singularity.gymWorkout("Powerhouse Gym", "strength");
    }
    strength = ns.getPlayer().skills.strength;
    await ns.sleep(10000);
  }
  ns.singularity.stopAction();

  //Agility
  if (ns.singularity.isBusy() == true){
    ns.singularity.stopAction();
  }
  var agility = ns.getPlayer().skills.agility;
  while (agility < 200){
    if (ns.singularity.isBusy() == false){
      ns.singularity.gymWorkout("Powerhouse Gym", "agility");
    }
    agility = ns.getPlayer().skills.agility;
    await ns.sleep(10000);
  }
  ns.singularity.stopAction();

  //Defense
  if (ns.singularity.isBusy() == true){
    ns.singularity.stopAction();
  }
  var defense = ns.getPlayer().skills.defense;
  while (defense < 200){
    if (ns.singularity.isBusy() == false){
      ns.singularity.gymWorkout("Powerhouse Gym", "defense");
    }
    defense = ns.getPlayer().skills.defense;
    await ns.sleep(10000);
  }
  ns.singularity.stopAction();

  //Dexterity
  if (ns.singularity.isBusy() == true){
    ns.singularity.stopAction();
  }
  var dexterity = ns.getPlayer().skills.dexterity;
  while (dexterity < 200){
    if (ns.singularity.isBusy() == false){
      ns.singularity.gymWorkout("Powerhouse Gym", "dexterity");
    }
    dexterity = ns.getPlayer().skills.dexterity;
    await ns.sleep(10000);
  }
  ns.singularity.stopAction();

}
