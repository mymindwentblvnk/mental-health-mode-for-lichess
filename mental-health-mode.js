const cssIds = [
    // Home
    "clinput",
    "challenge-toggle",
    "notify-toggle",
    "topnav",
    "friend_box",
    // Profile
    "us_profile",
];
const cssClassNames = [
    // Home
    "lobby__puzzle",
    "lobby__side",
    "lobby__counters",
    "lobby__about",
    "lobby__leaderboard",
    "lobby__tv",
    "lobby__blog",
    "lobby__support",
    "lobby__forum",
    "tabs-horiz",
    "lobby__tournaments",
    "lobby__simuls",
    "ratings",
    // Profile
    "page-menu__menu",
    "user-show__social",
    "user-infos",
    "angles",
    "angle-content",
    // Game
    "ruser-top",
    "ruser-bottom",
    "round__side",
    "round__underboard",
    // Analysis Board
    "analyse__side",
    "mchat",
    "chat__members",
    "analyse__underboard"
];

function applyMentalHealthMode() {
    var style = document.createElement('style')
    document.head.appendChild(style)
    var sheet = style.sheet

    cssClassNames.forEach(function (cssClassName, index) {
        try {
            sheet.addRule("."+cssClassName, "display: none", 0)
        } catch(error) { console.log(cssClassName, error) }
    });
    cssIds.forEach(function (cssId, index) {
        try {
            sheet.addRule("#"+cssId, "display: none", 0)
        } catch(error) { console.log(cssId, error) }
    });

    sheet.addRule("#dasher_app .links a:first-child", "display: none", 0)
    sheet.addRule("#dasher_app .links a:nth-child(2)", "display: none", 0)

    document.getElementsByClassName('site-title').item(0).append(' 🧘');
}

applyMentalHealthMode()
