/** @param {NS} ns */
export async function main(ns) {
  //Logging
  ns.disableLog('ALL'); ns.tail();
  ns.print("Corporation materials script started");

  //Constants
  const cities = ["Sector-12", "Aevum", "Volhaven", "Chongqing", "New Tokyo", "Ishima"];

  //2.10
  for (const city of cities){
    ns.print("===" + city + "===");
    if (ns.corporation.getMaterial("Agriculture", city, "Hardware").stored<9300){
      ns.corporation.bulkPurchase("Agriculture", city, "Hardware", 9300 - ns.corporation.getMaterial("Agriculture", city, "Hardware").stored);
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