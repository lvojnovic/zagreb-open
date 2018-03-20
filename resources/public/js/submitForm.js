$( document ).ready(function() {
    var rules = {
      "Male" : {
        category : ["Long Cycle", "Biathlon", "Jerk Duel"],
        kettlebell : {
            "Long Cycle" : ["2x20 kg", "2x24 kg", "2x28 kg", "2x32 kg"],
            "Biathlon" : ["2x20 kg", "2x24 kg", "2x28 kg", "2x32 kg"],
            "Jerk Duel" : ["2x24 kg"]
        },
        bodyweight : ["-63 kg", "-68 kg", "-73 kg", "-78 kg",
                      "-85 kg", "-95 kg", "+95 kg"]
      },
      "Female" : {
        category : ["Snatch", "Long Cycle", "Jerk", "Jerk Duel"],
        kettlebell : {
            "Snatch" : ["12 kg", "16 kg", "20 kg", "24 kg"],
            "Long Cycle" : ["2x12 kg", "2x16 kg", "2x20 kg"],
            "Jerk" : ["2x12 kg", "2x16 kg", "2x20 kg"],
            "Jerk Duel" : ["2x16 kg"]
        },
        bodyweight : ["-58 kg", "-63 kg", "-68 kg", "+68 kg"]
      }
    }

    var sex = $("#sex");
    var category = $("#category");
    var kettlebell = $("#kettlebell");
    var bodyweight = $("#bodyweight");

    var onCategoryChange = function() {
        var sexValue = sex.val();
        var categoryVal = category.val();

        kettlebell[0].options.length = 0; //reset
        var newVals = rules[sexValue]['kettlebell'][categoryVal]
        newVals.forEach(function(c) {
            kettlebell[0].appendChild(new Option(c, c));
        });
    };

    var onChange = function() {
        var sexValue = sex.val()

        var repopulateOptions = function(cmp, name) {
            cmp[0].options.length = 0; //reset
            var newVals = rules[sexValue][name]
            newVals.forEach(function(c) {
                cmp[0].appendChild(new Option(c, c));
            });
        }

        repopulateOptions(category, "category");
        repopulateOptions(bodyweight, "bodyweight");
        onCategoryChange();
    }

    sex.on('change', onChange);
    category.on('change', onCategoryChange);
});
