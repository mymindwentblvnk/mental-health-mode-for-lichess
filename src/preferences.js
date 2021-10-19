var html = `<h2>Mental Health Mode</h2>
<group class="radio">
    <div>
        <input id="irdisplay_mhm_0" type="radio" value="0" name="display.mhm">  <!-- checked="checked" -->
        <label for="irdisplay_mhm_0">No</label>
    </div>
    <div>
        <input id="irdisplay_mhm_1" type="radio" value="1" name="display.mhm">
        <label for="irdisplay_mhm_1">Yes</label>
    </div>
</group>`;

var section = document.createElement('section')
section.innerHTML = html


// Read cookie
// if not set yet: Default is No
// If alreday set: Read value
// Set checked attribute according to value
// Apply click listener to both input fields
// If No and Yes is clicked: Set cookie and reload page
// If Yes and No is clicked: Set cookie and reloaad page
document.cookie = 'mhm; SameSite=Strict'

document.getElementsByClassName('account box box-pad').item(0).getElementsByTagName('form').item(0).appendChild(section);