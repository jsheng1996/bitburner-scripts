** @param {NS} ns */
//This script initates a hacking gang with NiteSec
export async function main(ns) {
  //Create gang if necessary
  if (!ns.gang.inGang()){
    let gang_init_success = ns.gang.createGang("NiteSec");
    if (gang_init_success){
      ns.tprint("Success: Gang created with NiteSec");
    } else{
      ns.tprint("ERROR: Gang not created. You might not have backdoor installed on avmnite-02h");
    }
  }
  else {
    ns.tprint("INFO: Already in gang");
  }

  //Recruit members
  if (ns.gang.recruitMember("1") && ns.gang.recruitMember("2") && ns.gang.recruitMember("3")){
    ns.tprint("INFO: First 3 gang members successfully recruited");
  } else{
    ns.tprint("ERROR: Failed to recruit one or more member");
  }
  
  //Purchase rootkits and train hacking
  const members = ns.gang.getMemberNames();
  const rootkits = ["NUKE Rootkit", "Soulstealer Rootkit", "Jack the Ripper", "Demon Rootkit", "Hmap Node"];

	for (let i = 0; i < 3; i++){
    const member = members[i];
    for (const rootkit of rootkits){
      ns.gang.purchaseEquipment(member, rootkit);
      ns.tprint("INFO: Purchased " + rootkit+ " for member " + member);
    }
    ns.gang.setMemberTask(member, "Train Hacking");
    ns.tprint("INFO: Member "+ member + " has started training hacking");
  }

  while (ns.gang.getMemberInformation(members[0]).hack<200 || ns.gang.getMemberInformation(members[1]).hack<200 || ns.gang.getMemberInformation(members[2]).hack<200){
    await ns.sleep(60000);
    ns.tprint("INFO: Awaiting one or more members to be above 200 hack");
    ns.tprint("INFO: Sleeping for 60 seconds...");
  }

  for (let i = 0; i < 3; i++){
    const member = members[i];
    ns.gang.setMemberTask(member, "Phishing");
    ns.tprint("INFO: Member "+ member + " has started training phishing");
  }

  ns.tprint("Success: Hacking gang with NiteSec has successfully been initiated")
}
