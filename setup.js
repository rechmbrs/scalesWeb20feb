var config = "";
config = config + '<br>'
    + '<label for="scales">Scale: </label>'
    + '<select name="scales" id="scales" class="heighttext">';

for (var k = 0; k < scaleNames.length; k++) {
    config = config
        + '<option value="'
        + scaleNames[k]
        + '">'
        + scaleNames[k]
        + '</option>';
}
config = config
    + '</select>';

config = config + '<br>'
    + '<label for="scaleLo">Scale low note:&nbsp;&nbsp;</label>'
    + '<select name="scaleLo" id="scaleLo" class="heighttext">';

for (var k = 1; k < chromScale.length; k++) {
    config = config
        + '<option value="'
        + chromScale[k]
        + '">'
        + chromScale[k]
        + '</option>';
}
config = config
    + '</select>';

config = config + '<br>'
    + '<label for="scaleHi">Scale high note: </label>'
    + '<select name="scaleHi" id="scaleHi" class="heighttext">';

for (var k = chromScale.length - 1; k >= 1; k--) {
    config = config
        + '<option value="'
        + chromScale[k]
        + '">'
        + chromScale[k]
        + '</option>';
}
config = config
    + '</select>';

config = config + '<br>'
    + '<label for="direction">Scale direction: </label>'
    + '<select name="direction" id="direction" class="heighttext">'
    + '<option value="up">Up</option>'
    + '<option value="down">Down</option>'
    + '<option value="upDown">Up / Down</option>'
    + '<option value="downUp">Down / Up</option>'
    + '<option value="random">Random</option>'
    + '<option value="user" disabled>User</option>'
    + '</select>';

config = config + '<br>'
    + '<label for="stepIn">Scale step (1-12): </label>'
    + '<input type="number" id="stepIn" name="stepIn" min="1" max="12" step="1" value="1" class="heighttext">';

config = config + '<br><br>'
    + '<label for="volumeIn">Volume (0.0-1.0): </label>'
    + '<input type="number" id="volumeIn" name="volumeIn" min="0.0" max="1.0" step="0.05" value="0.5" class="heighttext">';

config = config + ' <br><br>'
    + '<label for="durationIn">Duration (0.0-8.0s): </label>'
    + '<input type="number" id="durationIn" name="durationIn" min="0.0" max="8.0" step="0.05" value="1.0" class="heighttext">';

config = config + ' <br><br>'
    + '<input class="heighttext" id="startBtn" type="button" value="OK" onclick="syncer()">'
    + '<input class="heighttext" id="loopBtn" type="button" value="LOOP" onclick="looper()">'
    + '<input class="heighttext" id="resetBtn" type="button" value="RESET" onclick="resetter()">'
    + '<input class="heighttext" id="stopBtn" type="button" value="STOP" onclick="stopper()">'
    + '<input class="heighttext" id="helpBtn" type="button" value="HELP" onclick="helper()">';

config = config + ' <br>'
    + '<textarea id="errorPanel" name="errorPanel" rows="2" cols="24">'
    + '</textarea>';

// console.log(config);
document.getElementById("column3").innerHTML = config;