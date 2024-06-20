/** @param {NS} ns */
//Expansion to Tobacco
export async function main(ns) {
  //Logging
  ns.disableLog('ALL'); ns.tail();
  ns.print("Phase 3 init script started");

  //Constants
  const cities = ["Sector-12", "Aevum", "Volhaven", "Chongqing", "New Tokyo", "Ishima"];
  
  //3.1
  ns.corporation.expandIndustry("Tobacco", "Tobacco");
  ns.print("Industry expandtion: Tobacco");


  //3.2
  for (const city of cities){
    ns.print("===" + city + "===");
    if (city!="Sector-12"){
      ns.corporation.expandCity("Tobacco", city);
      ns.corporation.purchaseWarehouse(city);
    }
    ns.print("Expanded");

    ns.print("Warehouse purchased");
  }
}
}
