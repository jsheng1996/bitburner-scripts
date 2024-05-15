export async function main(ns) {
  //Logging
  ns.disableLog('ALL'); ns.tail();
  ns.print("Corpo shares script started");

  var corp = ns.corporation.getCorporation();
  if (corp.dividendRate == 0.9){
    ns.corporation.buyBackShares(ns.corporation.getCorporation().numShares);
    ns.corporation.issueDividends(0);
    ns.print("Bought" + ns.corporation.getCorporation().numShares/2000000 +"m shares");
    ns.print("Set div rate to 0%");
  } else{
    ns.corporation.sellShares(ns.corporation.getCorporation().numShares/2);
    ns.corporation.issueDividends(0.9);
    ns.print("Sold" + ns.corporation.getCorporation().numShares*/1000000 +"m shares");
    ns.print("Set div rate to 90%");
  }
}
