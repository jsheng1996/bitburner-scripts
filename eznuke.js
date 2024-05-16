export async function main(ns) {
	const args = ns.flags([["help", false]]);
	if (args.help || args._.length < 1) {
		ns.tprint("This script opens necessary ports and runs NUKE.exe on target server");
		ns.tprint(`Usage: run eznuke.js [target server]`);
		ns.tprint("Example:");
		ns.tprint(`> run eznuke joesguns`);
		return;
	}

	const target = args._[0];

  if (!ns.serverExists(target)){
    ns.tprint("No such server");
    return;
  }

  if (ns.hasRootAccess(target)){
    ns.tprint("Already have root access");
    return;
  }

  const numPorts = ns.getServerNumPortsRequired(target);

	switch(numPorts) {
  case 0:
    ns.nuke(target);
    ns.tprint("Server " + target + " successfully nuked");
    break;
  case 1:
    if (!ns.fileExists("brutessh.exe")){
      ns.tprint("Need BruteSSH.exe");
      return;
    }
    ns.brutessh(target);
    ns.nuke(target);
    ns.tprint("Server " + target + " successfully nuked");
    break;
  case 2:
    if (!ns.fileExists("brutessh.exe")){
      ns.tprint("Need BruteSSH.exe");
      return;
    }
    if (!ns.fileExists("ftpcrack.exe")){
      ns.tprint("Need FTPCrack.exe");
      return;
    }
    ns.brutessh(target);
    ns.ftpcrack(target);
    ns.nuke(target);
    ns.tprint("Server " + target + " successfully nuked");
    break;
  case 3:
    if (!ns.fileExists("brutessh.exe")){
      ns.tprint("Need BruteSSH.exe");
      return;
    }
    if (!ns.fileExists("ftpcrack.exe")){
      ns.tprint("Need FTPCrack.exe");
      return;
    }
    if (!ns.fileExists("relaysmtp.exe")){
      ns.tprint("Need relaySMTP.exe");
      return;
    }
    ns.brutessh(target);
    ns.ftpcrack(target);
    ns.relaysmtp(target);
    ns.nuke(target);
    ns.tprint("Server " + target + " successfully nuked");
    break;
  case 4:
    if (!ns.fileExists("brutessh.exe")){
      ns.tprint("Need BruteSSH.exe");
      return;
    }
    if (!ns.fileExists("ftpcrack.exe")){
      ns.tprint("Need FTPCrack.exe");
      return;
    }
    if (!ns.fileExists("relaysmtp.exe")){
      ns.tprint("Need relaySMTP.exe");
      return;
    }
    if (!ns.fileExists("httpworm.exe")){
      ns.tprint("Need httpWorm.exe");
      return;
    }
    ns.brutessh(target);
    ns.ftpcrack(target);
    ns.relaysmtp(target);
    ns.httpworm(target);
    ns.nuke(target);
    ns.tprint("Server " + target + " successfully nuked");
    break;
  case 5:
    if (!ns.fileExists("brutessh.exe")){
      ns.tprint("Need BruteSSH.exe");
      return;
    }
    if (!ns.fileExists("ftpcrack.exe")){
      ns.tprint("Need FTPCrack.exe");
      return;
    }
    if (!ns.fileExists("relaysmtp.exe")){
      ns.tprint("Need relaySMTP.exe");
      return;
    }
    if (!ns.fileExists("httpworm.exe")){
      ns.tprint("Need HTTPWorm.exe");
      return;
    }
    if (!ns.fileExists("sqlinject.exe")){
      ns.tprint("Need SQLInject.exe");
      return;
    }
    ns.brutessh(target);
    ns.ftpcrack(target);
    ns.relaysmtp(target);
    ns.httpworm(target);
    ns.sqlinject(target);
    ns.nuke(target);
    ns.tprint("Server " + target + " successfully nuked");
    break;
  default:
    // code block
  }
}
