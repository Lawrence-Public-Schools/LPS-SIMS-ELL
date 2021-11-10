/*----------------------------------------------------------
| FileName: 'LPS-ell_sims.js'
| Description: PowerSchool SIMS for ELL students
| Author: Benjamin Houle
----------------------------------------------------------*/
// FILE CURRENTLY NOT USED, ATTEMPTING TO MOVE JAVASCRIPT OVER FROM HTML FILE
// Create lang-code array, because PowerSchool didn't
var langMap = [
  [   "", 'eng'],["002", "chi"],["003", "fre"],["004", "gre"],["005", "ita"],["007", "spa"],

  ["110", "afr"],["115", "alb"],["125", "tut"],["130", "amh"],["135", "ara"],["140", "arm"],
  ["145", "aym"],["150", "ind"],["155", "bam"],["160", "bnt"],["165", "baq"],["170", "ben"],
  ["180", "bre"],["185", "bul"],["190", "bur"],

  ["205", "cat"],["210", "cau"],["225", "hat"],["230", "cpp"],["235", "cze"],["240", "dan"],
  ["247", "din"],["250", "div"],["260", "dut"],["265", "dzo"],["267", "eng"],["270", "fan"],
  ["280", "fij"],["290", "fin"],

  ["310", "fry"],["317", "gaa"],["320", "glg"],["330", "ger"],["335", "gil"],["342", "grb"],
  ["345", "grn"],["347", "guj"],["360", "hau"],["365", "heb"],["370", "hin"],["375", "hmn"],
  ["380", "hun"],["385", "ibo"],["390", "ice"],

  ["400", "ine"],["405", "gle"],["415", "jpn"],["420", "jav"],["422", "jrb"],["423", "kas"],
  ["430", "khm"],["435", "kin"],["445", "kor"],["446", "kpe"],["452", "kro"],["455", "kur"],
  ["460", "kru"],["470", "lao"],["480", "lat"],["483", "lav"],["487", "lit"],["495", "ltz"],
  ["501", "mac"],["505", "mlg"],["510", "may"],["515", "mlt"],["522", "man"],["525", "mao"],
  ["542", "men"],["551", "mos"],["560", "nah"],["580", "nep"],["585", "new"],["595", "nor"],
  ["600", "paa"],["610", "per"],["620", "phi"],["630", "pol"],["633", "pan"],["645", "que"],
  ["665", "rus"],["670", "smo"],

  ["700", "sna"],["707", "snd"],["725", "slo"],["735", "smo"],["750", "swa"],["755", "swe"],
  ["759", "tgl"],["765", "tam"],["767", "tel"],["770", "tha"],["775", "tib"],["783", "tir"],
  ["785", "ton"],["795", "tvl"],["797", "twi"],

  ["800", "ukr"],["810", "urd"],["815", "uzb"],["825", "vie"],["835", "wel"],["845", "yid"],
  ["850", "yor"],
];

// PowerSchool doesn't support tlist_sql in .js files?
function yearIdEqual26(lang) {
  $j("#HomeLang16_17").show();
  $j("#HomeLang17_18").hide();
  var langCode = langMap.find(langPair => langPair[1] === lang);
  $j('#MA_Lang option[value="' + langCode + '"]').attr("selected", "selected");
  $j("#defaultMsg_container").html('<div class="defaultMsg">(if not defined, "267" is extracted)<br /></div>');
}
function yearIdLessThan26() {
  $j("#defaultMsg_container").html('<div class="defaultMsg">(if not defined, "267" is extracted)<br /></div>');
  $j("#HomeLang16_17").show();
  $j("#HomeLang17_18").hide();
}

// Data Validation
function checkDefaultInfo() {
  if (document.getElementById('enrollstatus').value == "04" && (
    document.getElementById('futureplans').value == "500" || 
    document.getElementById('gradstatus').value == "00"
  )) {
    let errorMsg1 = document.getElementById('futureplans').value == "500" ? "\n - DOE033 (Post Graduate Plans) must be set to something other than 500" : "";		
    let errorMsg2 = document.getElementById('gradstatus').value == "00" ? "\n - DOE037 (Graduate) must be set to something other than 00" : "";
    alert("When DOE012 (Enrollment Status) is set to Graduated: \n" + errorMsg1 + errorMsg2 );
    closeLoading();
    return false;
  }
}
function checkStateStuNum(ele) {
  let errorMsg = document.getElementById('errormessage');
  errorMsg.innerHTML = "";

  if (isNaN(ele.value)) {
    errorMsg.innerHTML = "SASID must contain 10 numeric characters (0-9)";
    ele.value = "";
  } else if (ele.value.length < 10) {
    errorMsg.innerHTML = "SASID must contain 10 numeric characters (0-9)";
  }
  return false;
}