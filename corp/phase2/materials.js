/** @param {NS} ns */
export async function main(ns) {
  //Logging
  ns.disableLog('ALL'); ns.tail();
  ns.print("Corporation materials script started");

  //Constants
  const cities = ["Sector-12", "Aevum", "Volhaven", "Chongqing", "New Tokyo", "Ishima"];

  //2.5
  for (const city of cities){
    ns.print("===" + city + "===");
    if (ns.corporation.getMaterial("Agriculture", city, "Hardware").stored<2800){
      ns.corporation.bulkPurchase("Agriculture", city, "Hardware", 2800 - ns.corporation.getMaterial("Agriculture", city, "Hardware"));
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
}