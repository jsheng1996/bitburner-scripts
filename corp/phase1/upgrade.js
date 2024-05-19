/** @param {NS} ns */
export async function main(ns) {
  //Logging
  ns.disableLog('ALL'); ns.tail();
  ns.print("Corporation upgrade script started");

  //Constants
  const cities = ["Sector-12", "Aevum", "Volhaven", "Chongqing", "New Tokyo", "Ishima"];
  const upgrades = ["FocusWires", "Neural Accelerators", "Speech Processor Implants", "Nuoptimal Nootropic Injector Implants", "Smart Factories"];
  
  //1.4
  ns.corporation.hireAdVert("Agriculture");
  ns.print("Advertisement bought");

  //1.5
  for (const city of cities){
    ns.print("===" + city + "===");
    ns.corporation.upgradeWarehouse("Agriculture", city, 2);
    ns.print("Warehouse upgraded");
  }

  //1.6
  for (const upgrade of upgrades){
    ns.corporation.levelUpgrade(upgrade);
    ns.corporation.levelUpgrade(upgrade);
  }
  ns.print("Upgrades leveled");
}