/** @param {NS} ns */
export async function main(ns) {
  //Logging
  ns.disableLog('ALL'); ns.tail();
  ns.print("Corporation expand script started");

  //Constants
  const cities = ["Sector-12", "Aevum", "Volhaven", "Chongqing", "New Tokyo", "Ishima"];

  //1.3
  for (const city of cities){
    ns.print("===" + city + "===");
    if(city!="Sector-12"){
      ns.corporation.expandCity("Agriculture", city);
      ns.print("Expanded");
      ns.corporation.purchaseWarehouse("Agriculture", city);
      ns.print("Warehouse purchased");
    }
  }
}