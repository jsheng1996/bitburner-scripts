/** @param {NS} ns */
export async function main(ns) {
  //Logging
  ns.disableLog('ALL'); ns.tail();
  ns.print("Corporation hire script started");

  //Constants
  const cities = ["Sector-12", "Aevum", "Volhaven", "Chongqing", "New Tokyo", "Ishima"];

  //2.9
  for (const city of cities){
    ns.print("===" + city + "===");
    ns.corporation.upgradeWarehouse("Agriculture", city, 9);
    ns.print("Warehouse upgraded");
  }
}