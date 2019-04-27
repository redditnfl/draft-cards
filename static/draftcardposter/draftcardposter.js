var picks;

function update_overall() {
    var round = $("#round").val();
    var pick = $("#pick").val();
    console.log("Pick selected: " + round + "." + pick);
    var overall = picks[round-1][pick-1][2];
    console.log("Overall: " + overall);
    $("#overall-label").text(overall);
}

$(document).ready(function() {
    var nextRound = $('#next-round').val();
    var nextPick = $('#next-pick').val();
    console.log("Selecting next round and pick", nextRound, nextPick);
    $.getJSON('picks', function(data) {
        picks = data.picks[data.current_year];
        for (var i=1; i <= picks.length; i++) {
            $("#round").append($('<option>', { value: i, text: i }));
        }
    }).done(function() {
        $("#round").on("changed.bs.select",
            function(e, clickedIndex, newValue, oldValue) {
                $("#pick").find('option').remove();
                var round = picks[this.value - 1];
                for (var i=0; i < round.length; i++) {
                    var pick = round[i];
                    var text = pick[0];
                    if (pick[1] == "c") text += " (comp)";
                    if (pick[1] == "M") text += " (moved)";
                    if (pick[1] == "X") text += " (forfeited)";
                    var attrs = { value: pick[0], text: text}
                    if (this.value == nextRound && pick[0] == nextPick) {
                        attrs.selected = 'selected';
                    }
                    $("#pick").append($('<option>', attrs));
                }
                $("#pick").selectpicker('refresh');
                update_overall();
            }
        );
        $("#pick").on("changed.bs.select",
            function(e, clickedIndex, newValue, oldValue) {
                update_overall();
            }
        );
        $("#round").val(nextRound);
        $("#round").selectpicker('refresh');
        $("#round").trigger("changed.bs.select");
    });
    $.getJSON('players', function(data) {
        $("#name").autocomplete({
            minLength: 2,
            source: $.map(data.players, function (p) {
                return {value: p.name, label: p.name + " ("+p.position+"), " + p.college, obj: p};
            }),
            focus: function(event, ui) {
                $("#name").val(ui.item.value);
                $("#college").val(ui.item.obj.college);
                $("#position").selectpicker('val', ui.item.obj.position);
            },
            select: function(event, ui) {
                $("#name").val(ui.item.value);
                $("#college").val(ui.item.obj.college);
                $("#position").selectpicker('val', ui.item.obj.position);
            }
        });
    });
});
