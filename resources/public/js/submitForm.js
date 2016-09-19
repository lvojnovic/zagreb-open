$( document ).ready(function() {
    var rules = {
        "Bjelovar Open" : {
            "Male" : {
                category : ["Biathlon", "Long Cycle"],
                kettlebell : ["16 kg", "24 kg", "32 kg"],
                bodyweight : ["-78 kg", "-85 kg", "-95 kg", "+95 kg"]
            },
            "Female" : {
                category : ["Snatch", "Long Cycle"],
                kettlebell : ["12 kg", "16 kg", "24 kg"],
                bodyweight : ["-58 kg", "-63 kg", "-68 kg", "+68 kg"]
            }
        },
        "Prvenstvo Hrvatske" : {
            "Male" : {
                category : ["Biathlon", "Long Cycle"],
                kettlebell : ["24 kg", "32 kg"],
                bodyweight : ["-63 kg", "-68 kg", "-73 kg", "-78 kg", "-85 kg", "-95 kg", "+95 kg"]
            },
            "Female" : {
                category : ["Snatch"],
                kettlebell : ["16 kg", "24 kg"],
                bodyweight : ["-58 kg", "-63 kg", "-68 kg", "+68 kg"]
            }
        }
    }

    var competition = $("#competition");
    var sex = $("#sex");
    var category = $("#category");
    var kettlebell = $("#kettlebell");
    var bodyweight = $("#bodyweight");

    var onChange = function() {
        var compValue = competition.val();
        var sexValue = sex.val()

        var repopulateOptions = function(cmp, name) {
            cmp[0].options.length = 0; //reset
            var newVals = rules[compValue][sexValue][name]
            newVals.forEach(function(c) {
                cmp[0].appendChild(new Option(c, c));
            });
        }

        repopulateOptions(category, "category");
        repopulateOptions(kettlebell, "kettlebell");
        repopulateOptions(bodyweight, "bodyweight");
    }

    competition.on('change', onChange);
    sex.on('change', onChange);
});
