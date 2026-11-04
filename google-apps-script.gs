/**
 * Mariage Dominique & Steve : réponses des invités dans Google Sheets
 * + e-mail à chaque réponse + rappel automatique le 8 mars 2027.
 *
 * MODE D'EMPLOI : voir le guide. Résumé :
 * 1) Collez ce code dans Extensions > Apps Script d'un Google Sheets vide.
 * 2) Exécutez une fois la fonction "installer".
 * 3) Déployez en "Application Web" (accès : Tout le monde) et copiez le lien.
 */

var EMAIL = "mvogoo.daniels@gmail.com";   // où recevoir les notifications
var DEADLINE = "15 mars 2027";             // date limite affichée dans le rappel

/* ---------- Réception des réponses du site ---------- */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    var d = JSON.parse(e.postData.contents);
    var name = String(d.name || "").trim().slice(0, 80);
    if (!name) return json_({ success: false, error: "name" });

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName("Réponses");
    var yes = d.attend === "OUI";
    sh.appendRow([
      new Date(), name, yes ? "OUI" : "NON", yes ? Number(d.count) || 1 : 0,
      String(d.guests || "").slice(0, 300), String(d.email || ""), String(d.phone || ""),
      String(d.message || "").slice(0, 600), String(d.lang || "")
    ]);

    var body = (yes ? "✅ PRÉSENCE CONFIRMÉE" : "❌ ABSENCE") + "\n\n" +
      "Nom : " + name + "\n" +
      (yes ? "Nombre de personnes : " + (Number(d.count) || 1) + "\nAccompagnants : " + (d.guests || "—") + "\n" : "") +
      "E-mail : " + (d.email || "—") + "\nTéléphone : " + (d.phone || "—") + "\n" +
      "Message : " + (d.message || "—") + "\n\n" +
      "Total à ce jour : " + totaux_() + "\n" + ss.getUrl();
    MailApp.sendEmail({
      to: EMAIL,
      subject: (yes ? "✅ Présence confirmée : " : "❌ Absence : ") + name,
      body: body,
      replyTo: d.email || EMAIL,
      name: "Invitation Dominique & Steve"
    });
    return json_({ success: true });
  } catch (err) {
    return json_({ success: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function totaux_() {
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Réponses");
  var rows = sh.getLastRow() > 1 ? sh.getRange(2, 3, sh.getLastRow() - 1, 2).getValues() : [];
  var oui = 0, non = 0, pers = 0;
  rows.forEach(function (r) { if (r[0] === "OUI") { oui++; pers += Number(r[1]) || 0; } else if (r[0] === "NON") non++; });
  return oui + " présent(s) (" + pers + " personnes), " + non + " absent(s)";
}

/* ---------- Installation (à lancer une seule fois) ---------- */
function installer() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var rep = ss.getSheetByName("Réponses") || ss.insertSheet("Réponses");
  rep.clear();
  rep.getRange(1, 1, 1, 9).setValues([["Date", "Nom", "Présence", "Personnes", "Accompagnants", "E-mail", "Téléphone", "Message", "Langue"]])
    .setFontWeight("bold").setBackground("#14523a").setFontColor("#ffffff");
  rep.setFrozenRows(1);
  rep.getRange("A:A").setNumberFormat("dd/mm/yyyy hh:mm");
  rep.setColumnWidths(1, 1, 130); rep.setColumnWidths(2, 1, 200); rep.setColumnWidths(5, 1, 220); rep.setColumnWidths(8, 1, 300);
  var cf = rep.getRange("C2:C1000");
  rep.setConditionalFormatRules([
    SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("OUI").setBackground("#cfe8c5").setRanges([cf]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("NON").setBackground("#f4cccc").setRanges([cf]).build()
  ]);

  var inv = ss.getSheetByName("Invités") || ss.insertSheet("Invités");
  if (inv.getLastRow() < 1) {
    inv.getRange(1, 1, 1, 3).setValues([["Nom de l'invité (écrit comme sur le formulaire)", "Statut", "Personnes"]])
      .setFontWeight("bold").setBackground("#b4512f").setFontColor("#ffffff");
    inv.getRange("A2:A4").setValues([["Exemple Invité 1"], ["Exemple Invité 2"], ["Exemple Invité 3"]]);
  }
  inv.setFrozenRows(1); inv.setColumnWidths(1, 1, 300); inv.setColumnWidths(2, 1, 170);
  inv.getRange("B2").setFormula('=IF(A2="","",IFERROR(IF(INDEX(Réponses!C:C,MATCH(A2,Réponses!B:B,0))="OUI","✅ Présent","❌ Absent"),"⏳ Pas de réponse"))');
  inv.getRange("C2").setFormula('=IF(A2="","",IFERROR(INDEX(Réponses!D:D,MATCH(A2,Réponses!B:B,0)),""))');
  inv.getRange("B2:C2").copyTo(inv.getRange("B3:C500"));
  var r = inv.getRange("B2:B500");
  inv.setConditionalFormatRules([
    SpreadsheetApp.newConditionalFormatRule().whenTextContains("Pas de réponse").setBackground("#f4cccc").setRanges([r]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenTextContains("Présent").setBackground("#cfe8c5").setRanges([r]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenTextContains("Absent").setBackground("#e0e0e0").setRanges([r]).build()
  ]);

  var rec = ss.getSheetByName("Récap") || ss.insertSheet("Récap");
  rec.clear();
  rec.getRange("A1:B6").setValues([
    ["Récapitulatif", ""],
    ["Réponses « Présent »", '=COUNTIF(Réponses!C:C,"OUI")'],
    ["Réponses « Absent »", '=COUNTIF(Réponses!C:C,"NON")'],
    ["Nombre total de personnes présentes", '=SUMIF(Réponses!C:C,"OUI",Réponses!D:D)'],
    ["Invités sans réponse (liste « Invités »)", '=COUNTIF(Invités!B:B,"⏳*")'],
    ["Date limite", DEADLINE]
  ]);
  rec.getRange("A1").setFontWeight("bold").setFontSize(14);
  rec.setColumnWidths(1, 1, 320); rec.setColumnWidths(2, 1, 120);
  rec.getRange("B2:B5").setFontWeight("bold").setFontSize(13);

  // Rappel automatique : 8 mars 2027 à 8h (une semaine avant la date limite)
  ScriptApp.getProjectTriggers().forEach(function (t) { if (t.getHandlerFunction() === "rappel") ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger("rappel").timeBased().at(new Date(2027, 2, 8, 8, 0, 0)).create();

  var def = ss.getSheetByName("Feuille 1") || ss.getSheetByName("Sheet1");
  if (def && ss.getSheets().length > 1) ss.deleteSheet(def);
  ss.setActiveSheet(rec);
  SpreadsheetApp.flush();
}

/* ---------- Rappel du 8 mars 2027 ---------- */
function rappel() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var inv = ss.getSheetByName("Invités");
  var late = [];
  if (inv && inv.getLastRow() > 1) {
    inv.getRange(2, 1, inv.getLastRow() - 1, 2).getValues().forEach(function (r) {
      if (r[0] && String(r[1]).indexOf("Pas de réponse") > -1) late.push("• " + r[0]);
    });
  }
  MailApp.sendEmail({
    to: EMAIL,
    subject: "⏰ Rappel : relancer les invités en retard (clôture le " + DEADLINE + ")",
    body: "Dans une semaine, le " + DEADLINE + ", les confirmations se ferment.\n\n" +
      "Situation : " + totaux_() + "\n\n" +
      (late.length ? "Invités qui n'ont pas encore répondu (" + late.length + ") :\n" + late.join("\n")
                   : "Tous les invités de votre liste ont répondu, ou la feuille « Invités » est vide.") +
      "\n\nTableau complet : " + ss.getUrl(),
    name: "Invitation Dominique & Steve"
  });
}

/* Test : envoie tout de suite l'e-mail de rappel pour vérifier qu'il arrive. */
function testerRappel() { rappel(); }
