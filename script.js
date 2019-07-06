animals = ['dog', 'cat', 'rabbit', 'hamster', 'skank', 'goldfish', 'bird', 'ferret',
    'turtle', 'sugar glider', 'chinchilla', 'hedgehog', 'gerbil', 'pygmy goat', 'chicken',
    'capybara', 'teacup pig', 'serval', 'salamander', 'frog'];

function createButtons() {
    $('#buttons').empty();
    for (var i = 0; i < animals.length; ++i)
        $('#buttons').append($('<button>')
            .text(animals[i])
            .attr('name', animals[i])
            .on('click', function () {
                var animal = $(this).attr("name");
                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                    animal + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

                $.ajax({
                    url: queryURL,
                    method: "GET"
                })
                    .then(function (response) {
                        var results = response.data;

                        for (var i = 0; i < results.length; i++) {
                            var image = $("<img>");
                            image.attr("src", results[i].images.fixed_height.url);
                            $("#gifs").prepend(image);
                        }
                    });
            }));
}

createButtons();

$("#submit").on("click", function() {
    animals.push($("#animal").val().trim());
    createButtons();
});