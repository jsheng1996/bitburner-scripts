/** @param {NS} ns */
export async function main(ns) {
  //Logging
  ns.disableLog('ALL'); ns.tail();
  ns.print("Corporation hire script started");

  //Constants
  const cities = ["Sector-12", "Aevum", "Volhaven", "Chongqing", "New Tokyo", "Ishima"];
  const upgrades = ["Smart Factories", "Smart Storage"];

  //2.2
  for (const city of cities){
    ns.print("===" + city + "===");
    ns.corporation.upgradeOfficeSize("Agriculture", city, 6);
    ns.print("Office Expanded");
    ns.corporation.hireEmployee("Agriculture", city, "Operations");
    ns.corporation.hireEmployee("Agriculture", city, "Engineer");
    ns.corporation.hireEmployee("Agriculture", city, "Business");
    ns.corporation.hireEmployee("Agriculture", city, "Management");
    ns.corporation.hireEmployee("Agriculture", city, "Management");
    ns.corporation.hireEmployee("Agriculture", city, "Research & Development");
    ns.print("Employees hired");
  }

  //2.3
  for (const upgrade of upgrades){
    while (ns.corporation.getUpgradeLevel(upgrade)<10){
      ns.corporation.levelUpgrade(upgrade);
    }
  }
  ns.print("Upgrades leveled");

  //2.4
  for (const city of cities){
    ns.print("===" + city + "===");
    ns.corporation.upgradeWarehouse("Agriculture", city, 7);
    ns.print("Warehouse upgraded");
  }
}