/** @param {NS} ns */
//Monolithic script for use outside of BN3

//By the time you have $150m required for self-funding a corpo, you should have the ram required to run this script

//This script implents the corpo strategy set out in this guide: https://docs.google.com/document/d/1eqQ_KTnk3VkW1XLHjM2fAQbCNY05CTCE85mJFjeFDE8/edit

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
  
  //Implement starting strategies

  //1.1
  ns.corporation.expandIndustry("Agriculture", "Agriculture");
  ns.print("Industry expandtion: Agri");

  //1.2
  ns.corporation.purchaseUnlock("Smart Supply");
  ns.print("Smart Supply unlocked");

  //1.3
  for (const city of cities){
    ns.print("===" + city + "===");
    if(city!="Sector-12"){
      ns.corporation.expandCity("Agriculture", city);
      ns.print("Expanded");
      ns.corporation.purchaseWarehouse("Agriculture", city);
      ns.print("Warehouse purchased");
    }
    ns.corporation.hireEmployee("Agriculture", city, "Operations");
    ns.corporation.hireEmployee("Agriculture", city, "Engineer");
    ns.corporation.hireEmployee("Agriculture", city, "Business");
    ns.print("Employees hired");
    ns.corporation.setSmartSupply("Agriculture", city, true);
    ns.print("Smart Supply Set");
    ns.corporation.sellProduct("Agriculture", city, "Food", "MAX", "MP", true);
    ns.print("Sellside set");
  }

  //1.4
  ns.corporation.hireAdVert("Agriculture");
  ns.print("Advertisement bought");

  //1.5
  for (const city of cities){
    ns.print("===" + city + "===");
    ns.corporation.upgradeWarehouse("Agriculture", city, 2);
    ns.print("Warehouse upgraded");
  }
  
  //1.6
  for (const upgrade of upgrades){
    ns.corporation.levelUpgrade(upgrade);
    ns.corporation.levelUpgrade(upgrade);
  }
  ns.print("Upgrades leveled");
  
  //1.7
  for (const city of cities){
    ns.print("===" + city + "===");
    ns.corporation.bulkPurchase("Agriculture", city, "Hardware", 125);
    ns.corporation.bulkPurchase("Agriculture", city, "AI Cores", 75);
    ns.corporation.bulkPurchase("Agriculture", city, "Real Estate", 27000);
    ns.print("Materials bought");
  }

  //RAM: 241.6 GB
}
