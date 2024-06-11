/** @param {NS} ns */
export async function main(ns) {

  ns.disableLog('ALL'); ns.tail(); // Log Window

  // Set refresh rate (don't set too low or there will be no visible rate values)

  var delaytime = 500;

  // Set default Karma history

  var karma0 = 0; var karma1 = 0;

  while (true) {

    var karma = ns.heart.break();

    ns.clearLog(); // Clear the Log window

    // Track history

    var karma1 = karma0; var karma0 = karma;

    var karmarate = karma - karma1;

    ns.print('🔴Karma: ' + karma);

    ns.print("🔴 Rate : " + karmarate + "" );

    await ns.sleep(delaytime);

  }

} 
