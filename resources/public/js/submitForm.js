$( document ).ready(function() {
    var rules = {
      "Male" : {
        category : ["Jerk", "Long Cycle", "Snatch"],
        kettlebell : {
            "Snatch" : ["20 kg", "24 kg", "28 kg", "32 kg"],
            "Long Cycle" : ["2x20 kg", "2x24 kg", "2x28 kg", "2x32 kg"],
            "Jerk" : ["2x20 kg", "2x24 kg", "2x28 kg", "2x32 kg"]
        },
        bodyweight : ["-63 kg", "-68 kg", "-73 kg", "-78 kg",
                      "-85 kg", "-95 kg", "+95 kg"]
      },
      "Female" : {
        category : ["Snatch", "Long Cycle", "Jerk"],
        kettlebell : {
            "Snatch" : ["12 kg", "16 kg", "20 kg", "24 kg"],
            "Long Cycle" : ["2x12 kg", "2x16 kg", "2x20 kg"],
            "Jerk" : ["2x12 kg", "2x16 kg", "2x20 kg"],
        },
        bodyweight : ["-58 kg", "-63 kg", "-68 kg", "+68 kg"]
      }
    }

    var sex = $("#sex");
    var category = $("#category");
    var kettlebell = $("#kettlebell");
    var bodyweight = $("#bodyweight");

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
    }

    var onCategoryChange = function() {
        var sexValue = sex.val();
        var category = category.val();

        kettlebell[0].options.length = 0; //reset
        var newVals = rules[sexValue]['kettlebell'][category]
        newVals.forEach(function(c) {
            kettlebell[0].appendChild(new Option(c, c));
        });
    };

    sex.on('change', onChange);
    category.on('change', onCategoryChange);
});
