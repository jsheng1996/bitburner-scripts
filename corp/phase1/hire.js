/** @param {NS} ns */
export async function main(ns) {
  //Logging
  ns.disableLog('ALL'); ns.tail();
  ns.print("Corporation hire script started");

  //Constants
  const cities = ["Sector-12", "Aevum", "Volhaven", "Chongqing", "New Tokyo", "Ishima"];

  //1.3
  for (const city of cities){
    ns.print("===" + city + "===");
    ns.corporation.hireEmployee("Agriculture", city, "Operations");
    ns.corporation.hireEmployee("Agriculture", city, "Engineer");
    ns.corporation.hireEmployee("Agriculture", city, "Business");
    ns.print("Employees hired");
    ns.corporation.setSmartSupply("Agriculture", city, true);
    ns.print("Smart Supply Set");
    ns.corporation.sellMaterial("Agriculture", city, "Food", "MAX", "MP", true);
    ns.corporation.sellMaterial("Agriculture", city, "Plants", "MAX", "MP", true);
    ns.print("Sellside set");
  }
}