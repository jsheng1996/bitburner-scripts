/** @param {NS} ns */
export async function main(ns) {
  let serverName;
  let memorySize;

  serverName = ns.args[0]
  memorySize = ns.args[1]

  ns.purchaseServer(serverName, memorySize);
}
// Usage: buyServer.js [servername] [memorysize] 
