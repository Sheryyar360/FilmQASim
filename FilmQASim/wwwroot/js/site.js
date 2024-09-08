// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    // Define the URL to your MVC action
    const apiUrl = '/Home/GetGafObj'; // Adjust the URL if necessary

    // Make an AJAX GET request to the MVC action
    fetch(apiUrl) // Replace with your actual URL
    .then(response => response.json())
    .then(data => {
        console.log(data);
                // create a heatmap
            let chart = anychart.heatMap(getData(data));
                // name the heatmap
            chart.title("gafChrome");
                // set the container for the heatmap
            chart.container("heatmap");
                // draw the heatmap
            let colorScale = anychart.scales.ordinalColor();
            colorScale.ranges([
                { less: 250, color: "#afd0ce" },
                { from: 250, to: 500, color: "#40826d" },
                { from: 500, to: 750, color: "#c54b8c" },
                { greater: 750, color: "#702963" }
            ]);
            chart.colorScale(colorScale);        
            
               chart.draw();
    })
    .catch(error => console.error('Error fetching data:', error));
    
    
    /*$.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            // On success, use the data
            console.log(data);
                // create a heatmap
            let chart = anychart.heatMap(getData(data));
                // name the heatmap
            chart.title("gafChrome");
                // set the container for the heatmap
            chart.container("heatmap");
                // draw the heatmap
            chart.draw();
        },
        error: function (xhr, status, error) {
            // Handle errors
            console.error('Error:', error);
        }
    });*/
});



function getData(data) {
    return [
        {x: "0", y: "0", heat: parseInt(data[0][0]) * 10},
        {x: "0", y: "1", heat: parseInt(data[0][1]) * 10},
        {x: "0", y: "2", heat: parseInt(data[0][2]) * 10},
        {x: "0", y: "3", heat: parseInt(data[0][3]) * 10},
        {x: "0", y: "4", heat: parseInt(data[0][4]) * 10},
        {x: "0", y: "5", heat: parseInt(data[0][5]) * 10},
        {x: "0", y: "6", heat: parseInt(data[0][6]) * 10},
        {x: "0", y: "7", heat: parseInt(data[0][7]) * 10},
        {x: "0", y: "8", heat: parseInt(data[0][8]) * 10},
        {x: "0", y: "9", heat: parseInt(data[0][9]) * 10},
        {x: "1", y: "0", heat: parseInt(data[1][0]) * 10},
        {x: "1", y: "1", heat: parseInt(data[1][1]) * 10},
        {x: "1", y: "2", heat: parseInt(data[1][2]) * 10},
        {x: "1", y: "3", heat: parseInt(data[1][3]) * 10},
        {x: "1", y: "4", heat: parseInt(data[1][4]) * 10},
        {x: "1", y: "5", heat: parseInt(data[1][5]) * 10},
        {x: "1", y: "6", heat: parseInt(data[1][6]) * 10},
        {x: "1", y: "7", heat: parseInt(data[1][7]) * 10},
        {x: "1", y: "8", heat: parseInt(data[1][8]) * 10},
        {x: "1", y: "9", heat: parseInt(data[1][9]) * 10},
        {x: "2", y: "0", heat: parseInt(data[2][0]) * 10},
        {x: "2", y: "1", heat: parseInt(data[2][1]) * 10},
        {x: "2", y: "2", heat: parseInt(data[2][2]) * 10},
        {x: "2", y: "3", heat: parseInt(data[2][3]) * 10},
        {x: "2", y: "4", heat: parseInt(data[2][4]) * 10},
        {x: "2", y: "5", heat: parseInt(data[2][5]) * 10},
        {x: "2", y: "6", heat: parseInt(data[2][6]) * 10},
        {x: "2", y: "7", heat: parseInt(data[2][7]) * 10},
        {x: "2", y: "8", heat: parseInt(data[2][8]) * 10},
        {x: "2", y: "9", heat: parseInt(data[2][9]) * 10},
        {x: "3", y: "0", heat: parseInt(data[3][0]) * 10},
        {x: "3", y: "1", heat: parseInt(data[3][1]) * 10},
        {x: "3", y: "2", heat: parseInt(data[3][2]) * 10},
        {x: "3", y: "3", heat: parseInt(data[3][3]) * 10},
        {x: "3", y: "4", heat: parseInt(data[3][4]) * 10},
        {x: "3", y: "5", heat: parseInt(data[3][5]) * 10},
        {x: "3", y: "6", heat: parseInt(data[3][6]) * 10},
        {x: "3", y: "7", heat: parseInt(data[3][7]) * 10},
        {x: "3", y: "8", heat: parseInt(data[3][8]) * 10},
        {x: "3", y: "9", heat: parseInt(data[3][9]) * 10},
        {x: "4", y: "0", heat: parseInt(data[4][0]) * 10},
        {x: "4", y: "1", heat: parseInt(data[4][1]) * 10},
        {x: "4", y: "2", heat: parseInt(data[4][2]) * 10},
        {x: "4", y: "3", heat: parseInt(data[4][3]) * 10},
        {x: "4", y: "4", heat: parseInt(data[4][4]) * 10},
        {x: "4", y: "5", heat: parseInt(data[4][5]) * 10},
        {x: "4", y: "6", heat: parseInt(data[4][6]) * 10},
        {x: "4", y: "7", heat: parseInt(data[4][7]) * 10},
        {x: "4", y: "8", heat: parseInt(data[4][8]) * 10},
        {x: "4", y: "9", heat: parseInt(data[4][9]) * 10},
        {x: "5", y: "0", heat: parseInt(data[5][0]) * 10},
        {x: "5", y: "1", heat: parseInt(data[5][1]) * 10},
        {x: "5", y: "2", heat: parseInt(data[5][2]) * 10},
        {x: "5", y: "3", heat: parseInt(data[5][3]) * 10},
        {x: "5", y: "4", heat: parseInt(data[5][4]) * 10},
        {x: "5", y: "5", heat: parseInt(data[5][5]) * 10},
        {x: "5", y: "6", heat: parseInt(data[5][6]) * 10},
        {x: "5", y: "7", heat: parseInt(data[5][7]) * 10},
        {x: "5", y: "8", heat: parseInt(data[5][8]) * 10},
        {x: "5", y: "9", heat: parseInt(data[5][9]) * 10},
        {x: "6", y: "0", heat: parseInt(data[6][0]) * 10},
        {x: "6", y: "1", heat: parseInt(data[6][1]) * 10},
        {x: "6", y: "2", heat: parseInt(data[6][2]) * 10},
        {x: "6", y: "3", heat: parseInt(data[6][3]) * 10},
        {x: "6", y: "4", heat: parseInt(data[6][4]) * 10},
        {x: "6", y: "5", heat: parseInt(data[6][5]) * 10},
        {x: "6", y: "6", heat: parseInt(data[6][6]) * 10},
        {x: "6", y: "7", heat: parseInt(data[6][7]) * 10},
        {x: "6", y: "8", heat: parseInt(data[6][8]) * 10},
        {x: "6", y: "9", heat: parseInt(data[6][9]) * 10},
        {x: "7", y: "0", heat: parseInt(data[7][0]) * 10},
        {x: "7", y: "1", heat: parseInt(data[7][1]) * 10},
        {x: "7", y: "2", heat: parseInt(data[7][2]) * 10},
        {x: "7", y: "3", heat: parseInt(data[7][3]) * 10},
        {x: "7", y: "4", heat: parseInt(data[7][4]) * 10},
        {x: "7", y: "5", heat: parseInt(data[7][5]) * 10},
        {x: "7", y: "6", heat: parseInt(data[7][6]) * 10},
        {x: "7", y: "7", heat: parseInt(data[7][7]) * 10},
        {x: "7", y: "8", heat: parseInt(data[7][8]) * 10},
        {x: "7", y: "9", heat: parseInt(data[7][9]) * 10},
        {x: "8", y: "0", heat: parseInt(data[8][0]) * 10},
        {x: "8", y: "1", heat: parseInt(data[8][1]) * 10},
        {x: "8", y: "2", heat: parseInt(data[8][2]) * 10},
        {x: "8", y: "3", heat: parseInt(data[8][3]) * 10},
        {x: "8", y: "4", heat: parseInt(data[8][4]) * 10},
        {x: "8", y: "5", heat: parseInt(data[8][5]) * 10},
        {x: "8", y: "6", heat: parseInt(data[8][6]) * 10},
        {x: "8", y: "7", heat: parseInt(data[8][7]) * 10},
        {x: "8", y: "8", heat: parseInt(data[8][8]) * 10},
        {x: "8", y: "9", heat: parseInt(data[8][9]) * 10},
        {x: "9", y: "0", heat: parseInt(data[0][0]) * 10},
        {x: "9", y: "1", heat: parseInt(data[9][1]) * 10},
        {x: "9", y: "2", heat: parseInt(data[9][2]) * 10},
        {x: "9", y: "3", heat: parseInt(data[9][3]) * 10},
        {x: "9", y: "4", heat: parseInt(data[9][4]) * 10},
        {x: "9", y: "5", heat: parseInt(data[9][5]) * 10},
        {x: "9", y: "6", heat: parseInt(data[9][6]) * 10},
        {x: "9", y: "7", heat: parseInt(data[9][7]) * 10},
        {x: "9", y: "8", heat: parseInt(data[9][8]) * 10},
        {x: "9", y: "9", heat: parseInt(data[9][9]) * 10},
    ]}