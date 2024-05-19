/** @param {NS} ns */
export async function main(ns) {
  //Logging
  ns.tprint("Corporation hire script started");

  //Constants
  const cities = ["Sector-12", "Aevum", "Volhaven", "Chongqing", "New Tokyo", "Ishima"];

  for (const city of cities){
    ns.print("===" + city + "===");
    ns.corporation.upgradeOfficeSize("Agriculture", city, 1);
    ns.tprint("Expanded office");
      for (let i = 0; i < 4; i++) {
        ns.corporation.hireEmployee("Agriculture", city, "Research & Development");
      } 
    ns.tprint("Hired Employees");
  }
}
