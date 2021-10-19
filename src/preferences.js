var html = `<h2>Mental Health Mode</h2>
<group class="radio">
    <div>
        <input id="irdisplay_mhm_0" type="radio" value="0" name="display.mhm">
        <label for="irdisplay_mhm_0">No</label>
    </div>
    <div>
        <input id="irdisplay_mhm_1" type="radio" value="1" name="display.mhm">
        <label for="irdisplay_mhm_1">Yes</label>
    </div>
</group>`;

var section = document.createElement('section')
section.innerHTML = html
document.getElementsByClassName('account box box-pad').item(0).getElementsByTagName('form').item(0).appendChild(section);

const MHM_ACTIVATED = "mhm.activated";
const YES = "yes";
const NO = "no";

console.log("Mental Health Mode in localStorage activated: ", localStorage.getItem(MHM_ACTIVATED))
// Not yet set OR set to active
if (localStorage.getItem(MHM_ACTIVATED) == null || localStorage.getItem(MHM_ACTIVATED) == YES) {
    localStorage.setItem(MHM_ACTIVATED, YES);
    document.getElementById("irdisplay_mhm_0").removeAttribute("checked");
    document.getElementById("irdisplay_mhm_1").setAttribute("checked", "checked");
// Set to not active
} else if(localStorage.getItem(MHM_ACTIVATED) == NO) {
    document.getElementById("irdisplay_mhm_0").setAttribute("checked", "checked");
    document.getElementById("irdisplay_mhm_1").removeAttribute("checked");
} else {
    alert("This should never show up. Congrats.");
}