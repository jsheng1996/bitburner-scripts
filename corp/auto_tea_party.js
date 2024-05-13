//Script to automate buying of tea and throwing of party

export async function main(ns) {
  //Logging
  ns.disableLog('ALL'); ns.tail();
  ns.print("Auto tea/party script started");
  const cities = ["Sector-12", "Aevum", "Volhaven", "Chongqing", "New Tokyo", "Ishima"];
  
  while(true){
    for (const city of cities){
      for (const div of ns.corporation.getCorporation().divisions){
        var office = ns.corporation.getOffice(div, city);
        if (office.avgEnergy<100){
          ns.corporation.buyTea(div, city);
        }
        if (office.avgMorale<100){
          ns.corporation.throwParty(div, city, 1000000);
        }
      }
    }
    ns.print("Sleeping for 10 secs...");
    await ns.sleep(10000);  //sleep for 60 secs
  }
  
}
