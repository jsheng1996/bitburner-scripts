/** @param {NS} ns */
export async function main(ns) {
  //Logging
  ns.disableLog('ALL'); ns.tail();
  ns.print("Corporation init script started");
  
  //Implement starting strategies
  //1.1
  ns.corporation.expandIndustry("Agriculture", "Agriculture");
  ns.print("Industry expandtion: Agri");
  //1.2
  ns.corporation.purchaseUnlock("Smart Supply");
  ns.print("Smart Supply unlocked");
}