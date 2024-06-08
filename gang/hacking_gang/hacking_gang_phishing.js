/** @param {NS} ns */
export async function main(ns) {
	const args = ns.flags([["help", false]]);
	if (args.help || args._.length < 2) {
		ns.tprint("This script sets the task to 'Phishing' for hacking gang members");
		ns.tprint(`Usage: run ${ns.getScriptName()} start stop`);
		ns.tprint("Example:");
		ns.tprint(`> run ${ns.getScriptName()} 1 2`);
    ns.tprint("This would set the first 2 members of the gang to commit phishing");
		return;
	}

	const start = args._[0]-1;
	const stop = args._[1];
  const members = ns.gang.getMemberNames();

	for (let i = start; i < stop; i++){
    const member = members[i];
    ns.gang.setMemberTask(member, "Phishing");
    ns.tprint("Member "+ member + " has started phishing");
  }
}
