/** @param {NS} ns */
export async function main(ns) {
  function showProgressBar(step, totalSteps) {
    const progressBarLength = 50;
    const progress = Math.round((step / totalSteps) * progressBarLength);
    const progressBar = "[" + "=".repeat(progress) + " ".repeat(progressBarLength - progress) + "]";
    ns.tprintf(`Progress: ${progressBar} (${step}/${totalSteps})`);
  }

  const totalSteps = 10;

  if (ns.singularity.purchaseTor()) {
    ns.tprint("INFO: purchaseTor: success");
  } else {
    ns.tprint("ERROR: purchaseTor: failure");
  }
  showProgressBar(1, totalSteps);

  if (ns.singularity.purchaseProgram("BruteSSH.exe")) {
    ns.tprint("INFO: purchaseProgram BruteSSH.exe: success");
  } else {
    ns.tprint("ERROR: purchaseProgram BruteSSH.exe: failure");
  }
  showProgressBar(2, totalSteps);

  if (ns.singularity.purchaseProgram("FTPCrack.exe")) {
    ns.tprint("INFO: purchaseProgram FTPCrack.exe: success");
  } else {
    ns.tprint("ERROR: purchaseProgram FTPCrack.exe: failure");
  }
  showProgressBar(3, totalSteps);

  if (ns.singularity.purchaseProgram("relaySMTP.exe")) {
    ns.tprint("INFO: purchaseProgram relaySMTP.exe: success");
  } else {
    ns.tprint("ERROR: purchaseProgram relaySMTP.exe: failure");
  }
  showProgressBar(4, totalSteps);

  if (ns.singularity.purchaseProgram("HTTPWorm.exe")) {
    ns.tprint("INFO: purchaseProgram HTTPWorm.exe: success");
  } else {
    ns.tprint("ERROR: purchaseProgram HTTPWorm.exe: failure");
  }
  showProgressBar(5, totalSteps);

  if (ns.singularity.purchaseProgram("SQLInject.exe")) {
    ns.tprint("INFO: purchaseProgram SQLInject.exe: success");
  } else {
    ns.tprint("ERROR: purchaseProgram SQLInject.exe: failure");
  }
  showProgressBar(6, totalSteps);

  if (ns.singularity.purchaseProgram("ServerProfiler.exe")) {
    ns.tprint("INFO: purchaseProgram ServerProfiler.exe: success");
  } else {
    ns.tprint("ERROR: purchaseProgram ServerProfiler.exe: failure");
  }
  showProgressBar(7, totalSteps);

  if (ns.singularity.purchaseProgram("DeepscanV1.exe")) {
    ns.tprint("INFO: purchaseProgram DeepscanV1.exe: success");
  } else {
    ns.tprint("ERROR: purchaseProgram DeepscanV1.exe: failure");
  }
  showProgressBar(8, totalSteps);

  if (ns.singularity.purchaseProgram("DeepscanV2.exe")) {
    ns.tprint("INFO: purchaseProgram DeepscanV2.exe: success");
  } else {
    ns.tprint("ERROR: purchaseProgram DeepscanV2.exe: failure");
  }
  showProgressBar(9, totalSteps);

  if (ns.singularity.purchaseProgram("AutoLink.exe")) {
    ns.tprint("INFO: purchaseProgram AutoLink.exe: success");
  } else {
    ns.tprint("ERROR: purchaseProgram AutoLink.exe: failure");
  }
  showProgressBar(10, totalSteps);

}
