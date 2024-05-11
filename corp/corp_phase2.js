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

  //2.5
  for (const city of cities){
    ns.print("===" + city + "===");
    if (ns.corporation.getMaterial("Agriculture", city, "Hardware").stored<2800){
      ns.corporation.bulkPurchase("Agriculture", city, "Hardware", 2800 - ns.corporation.getMaterial("Agriculture", city, "Hardware").stored);
    }
    if (ns.corporation.getMaterial("Agriculture", city, "Robots").stored<96){
      ns.corporation.bulkPurchase("Agriculture", city, "Robots", 96 - ns.corporation.getMaterial("Agriculture", city, "Robots").stored);
    }
    if (ns.corporation.getMaterial("Agriculture", city, "AI Cores").stored<2520){
      ns.corporation.bulkPurchase("Agriculture", city, "AI Cores", 2520 - ns.corporation.getMaterial("Agriculture", city, "AI Cores").stored);
    }
    if (ns.corporation.getMaterial("Agriculture", city, "Real Estate").stored<146400){
      ns.corporation.bulkPurchase("Agriculture", city, "Real Estate", 146400 - ns.corporation.getMaterial("Agriculture", city, "Real Estate").stored);
    }
    ns.print("Materials bought");
  }

  //2.9
  for (const city of cities){
    ns.print("===" + city + "===");
    ns.corporation.upgradeWarehouse("Agriculture", city, 9);
    ns.print("Warehouse upgraded");
  }

  //2.10
  for (const city of cities){
    ns.print("===" + city + "===");
    if (ns.corporation.getMaterial("Agriculture", city, "Hardware").stored<9300){
      ns.corporation.bulkPurchase("Agriculture", city, "Hardware", 9300 - ns.corporation.getMaterial("Agriculture", city, "Hardware"));
    }
    if (ns.corporation.getMaterial("Agriculture", city, "Robots").stored<726){
      ns.corporation.bulkPurchase("Agriculture", city, "Robots", 726 - ns.corporation.getMaterial("Agriculture", city, "Robots").stored);
    }
    if (ns.corporation.getMaterial("Agriculture", city, "AI Cores").stored<6270){
      ns.corporation.bulkPurchase("Agriculture", city, "AI Cores", 6270 - ns.corporation.getMaterial("Agriculture", city, "AI Cores").stored);
    }
    if (ns.corporation.getMaterial("Agriculture", city, "Real Estate").stored<230400){
      ns.corporation.bulkPurchase("Agriculture", city, "Real Estate", 230400 - ns.corporation.getMaterial("Agriculture", city, "Real Estate").stored);
    }
    ns.print("Materials bought");
  }
}
