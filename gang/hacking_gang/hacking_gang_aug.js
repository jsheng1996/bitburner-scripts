/** @param {NS} ns */
export async function main(ns) {
	const args = ns.flags([["help", false]]);
	if (args.help || args._.length < 2) {
		ns.tprint("This script ascends and buys rootkits for hacking gang members");
		ns.tprint(`Usage: run ${ns.getScriptName()} start stop`);
		ns.tprint("Example:");
		ns.tprint(`> run ${ns.getScriptName()} 1 2`);
    ns.tprint("This would ascend the first 2 members of the gang and buy rootkits for them");
		return;
	}

	const start = args._[0]-1;
	const stop = args._[1];
  const members = ns.gang.getMemberNames();
  const augs = ["BitWire", "Neuralstimulator", "DataJack"];

	for (let i = start; i < stop; i++){
    const member = members[i];
    for (const aug of augs){
      ns.gang.purchaseEquipment(member, aug);
      ns.tprint("Purchased " + aug+ " for member " + member);
    }
  }
}
