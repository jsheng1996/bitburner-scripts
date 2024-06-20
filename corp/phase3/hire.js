/** @param {NS} ns */
export async function main(ns) {
  //Logging
  ns.disableLog('ALL'); ns.tail();
  ns.print("Corporation hire script started");

  //Constants
  const cities = ["Sector-12", "Aevum", "Volhaven", "Chongqing", "New Tokyo", "Ishima"];

  for (const city of cities){
    ns.print("===" + city + "===");
    if (city!="Aevum"){
      ns.corporation.upgradeOfficeSize(city, 6);
      ns.corporation.hireEmployee("Tobacco", city, "Operations");
      ns.corporation.hireEmployee("Tobacco", city, "Engineer");
      ns.corporation.hireEmployee("Tobacco", city, "Business");
      ns.corporation.hireEmployee("Tobacco", city, "Management");
      for (let i = 0; i < 5; i++) {
        ns.corporation.hireEmployee("Tobacco", city, "Research & Development");
      }
      ns.print("Employees hired");
    } else{
      ns.corporation.upgradeOfficeSize(city, 27);
      for (let i = 0; i < 8; i++) {
        ns.corporation.hireEmployee("Tobacco", city, "Operations");
      }
      for (let i = 0; i < 9; i++) {
        ns.corporation.hireEmployee("Tobacco", city, "Engineer");
      }
      for (let i = 0; i < 5; i++) {
        ns.corporation.hireEmployee("Tobacco", city, "Business");
      }
      for (let i = 0; i < 8; i++) {
        ns.corporation.hireEmployee("Tobacco", city, "Management");
      }
      ns.print("Employees hired");
    }
    
    
  }
}
