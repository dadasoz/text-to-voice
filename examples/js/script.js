$(document).ready(function(){
    var voicelist = TextToVoice.getVoices();
    var vselect = $("#voiceselection");
    $.each(voicelist, function() {
        vselect.append($("<option >").val(this.name).text(this.name));
    });
    playbutton.onclick = function() {
        TextToVoice.speak(($('#text').val()) ? $('#text').val() : $('#text').attr("placeholder"), $('#voiceselection').val());
    };
    $('#voicetestdiv').hide();
    $('#waitingdiv').show();
    TextToVoice.OnVoiceReady = function() {
        $('#voicetestdiv').fadeIn(0.5);
        $('#waitingdiv').fadeOut(0.5);
    }
});