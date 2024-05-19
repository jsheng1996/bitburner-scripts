/** @param {NS} ns */
export async function main(ns) {
  //Logging
  ns.disableLog('ALL'); ns.tail();
  ns.print("Corporation materials script started");

  //Constants
  const cities = ["Sector-12", "Aevum", "Volhaven", "Chongqing", "New Tokyo", "Ishima"];

  //1.7
  for (const city of cities){
    ns.print("===" + city + "===");
    ns.corporation.bulkPurchase("Agriculture", city, "Hardware", 125);
    ns.corporation.bulkPurchase("Agriculture", city, "AI Cores", 75);
    ns.corporation.bulkPurchase("Agriculture", city, "Real Estate", 27000);
    ns.print("Materials bought");
  }
}