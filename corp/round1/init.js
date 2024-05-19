export async function main(ns) {
  //Logging
  ns.disableLog('ALL'); ns.tail();
  ns.print("Corporation init script started");

  //Create new corpo
  if(!ns.corporation.hasCorporation()){
    ns.print("No corporation found");
    ns.corporation.createCorporation("fcorp",true);
    ns.print("New coporation created");
  }
  
  //Constants
  const cities = ["Sector-12", "Aevum", "Volhaven", "Chongqing", "New Tokyo", "Ishima"];

  for (const city of cities){
    ns.print("===" + city + "===");

    //Expand to all cities and purchase warehouse
    if(city!="Sector-12"){
      ns.corporation.expandCity("Agriculture", city);
      ns.print("Expanded");
      ns.corporation.purchaseWarehouse("Agriculture", city);
      ns.print("Warehouse purchased");
    }
  }
}
