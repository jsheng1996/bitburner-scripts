/** @param {NS} ns */
export async function main(ns) {
	const args = ns.flags([["help", false]]);
	if (args.help || args._.length < 2) {
		ns.tprint("This script buys rootkits and sets the task to 'Train Hacking' for hacking gang members");
		ns.tprint(`Usage: run ${ns.getScriptName()} start stop`);
		ns.tprint("Example:");
		ns.tprint(`> run ${ns.getScriptName()} 1 2`);
    ns.tprint("This would buy rootkits for the first 2 members of the gang and get them to train hacking");
		return;
	}

	const start = args._[0]-1;
	const stop = args._[1];
  const members = ns.gang.getMemberNames();
  const rootkits = ["NUKE Rootkit", "Soulstealer Rootkit", "Jack the Ripper", "Demon Rootkit", "Hmap Node"];

	for (let i = start; i < stop; i++){
    const member = members[i];
    for (const rootkit of rootkits){
      ns.gang.purchaseEquipment(member, rootkit);
      ns.tprint("Purchased " + rootkit+ " for member " + member);
    }
    ns.gang.setMemberTask(member, "Train Hacking");
    ns.tprint("Member "+ member + " has started training hacking");
  }
}
