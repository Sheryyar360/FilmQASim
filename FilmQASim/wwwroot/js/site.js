// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    // Define the URL to your MVC action
    const apiUrl = '/Home/getGafObj'; // Adjust the URL if necessary

    // Make an AJAX GET request to the MVC action
    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            // On success, use the data
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
    });
});



function getData(data) {
    return [
        {x: "0", y: "0", heat: data[0][0][0]},
        {x: "0", y: "1", heat: data[0][0][1]},
        {x: "0", y: "2", heat: data[0][0][2]},
        {x: "0", y: "3", heat: data[0][0][3]},
        {x: "0", y: "4", heat: data[0][0][4]},
        {x: "0", y: "5", heat: data[0][0][5]},
        {x: "0", y: "6", heat: data[0][0][6]},
        {x: "0", y: "7", heat: data[0][0][7]},
        {x: "0", y: "8", heat: data[0][0][8]},
        {x: "0", y: "9", heat: data[0][0][9]},
        {x: "1", y: "0", heat: data[0][1][0]},
        {x: "1", y: "1", heat: data[0][1][1]},
        {x: "1", y: "2", heat: data[0][1][2]},
        {x: "1", y: "3", heat: data[0][1][3]},
        {x: "1", y: "4", heat: data[0][1][4]},
        {x: "1", y: "5", heat: data[0][1][5]},
        {x: "1", y: "6", heat: data[0][1][6]},
        {x: "1", y: "7", heat: data[0][1][7]},
        {x: "1", y: "8", heat: data[0][1][8]},
        {x: "1", y: "9", heat: data[0][1][9]},
        {x: "2", y: "0", heat: data[0][2][0]},
        {x: "2", y: "1", heat: data[0][2][1]},
        {x: "2", y: "2", heat: data[0][2][2]},
        {x: "2", y: "3", heat: data[0][2][3]},
        {x: "2", y: "4", heat: data[0][2][4]},
        {x: "2", y: "5", heat: data[0][2][5]},
        {x: "2", y: "6", heat: data[0][2][6]},
        {x: "2", y: "7", heat: data[0][2][7]},
        {x: "2", y: "8", heat: data[0][2][8]},
        {x: "2", y: "9", heat: data[0][2][9]},
        {x: "3", y: "0", heat: data[0][3][0]},
        {x: "3", y: "1", heat: data[0][3][1]},
        {x: "3", y: "2", heat: data[0][3][2]},
        {x: "3", y: "3", heat: data[0][3][3]},
        {x: "3", y: "4", heat: data[0][3][4]},
        {x: "3", y: "5", heat: data[0][3][5]},
        {x: "3", y: "6", heat: data[0][3][6]},
        {x: "3", y: "7", heat: data[0][3][7]},
        {x: "3", y: "8", heat: data[0][3][8]},
        {x: "3", y: "9", heat: data[0][3][9]},
        {x: "4", y: "0", heat: data[0][4][0]},
        {x: "4", y: "1", heat: data[0][4][1]},
        {x: "4", y: "2", heat: data[0][4][2]},
        {x: "4", y: "3", heat: data[0][4][3]},
        {x: "4", y: "4", heat: data[0][4][4]},
        {x: "4", y: "5", heat: data[0][4][5]},
        {x: "4", y: "6", heat: data[0][4][6]},
        {x: "4", y: "7", heat: data[0][4][7]},
        {x: "4", y: "8", heat: data[0][4][8]},
        {x: "4", y: "9", heat: data[0][4][9]},
        {x: "5", y: "0", heat: data[0][5][0]},
        {x: "5", y: "1", heat: data[0][5][1]},
        {x: "5", y: "2", heat: data[0][5][2]},
        {x: "5", y: "3", heat: data[0][5][3]},
        {x: "5", y: "4", heat: data[0][5][4]},
        {x: "5", y: "5", heat: data[0][5][5]},
        {x: "5", y: "6", heat: data[0][5][6]},
        {x: "5", y: "7", heat: data[0][5][7]},
        {x: "5", y: "8", heat: data[0][5][8]},
        {x: "5", y: "9", heat: data[0][5][9]},
        {x: "6", y: "0", heat: data[0][6][0]},
        {x: "6", y: "1", heat: data[0][6][1]},
        {x: "6", y: "2", heat: data[0][6][2]},
        {x: "6", y: "3", heat: data[0][6][3]},
        {x: "6", y: "4", heat: data[0][6][4]},
        {x: "6", y: "5", heat: data[0][6][5]},
        {x: "6", y: "6", heat: data[0][6][6]},
        {x: "6", y: "7", heat: data[0][6][7]},
        {x: "6", y: "8", heat: data[0][6][8]},
        {x: "6", y: "9", heat: data[0][6][9]},
        {x: "7", y: "0", heat: data[0][7][0]},
        {x: "7", y: "1", heat: data[0][7][1]},
        {x: "7", y: "2", heat: data[0][7][2]},
        {x: "7", y: "3", heat: data[0][7][3]},
        {x: "7", y: "4", heat: data[0][7][4]},
        {x: "7", y: "5", heat: data[0][7][5]},
        {x: "7", y: "6", heat: data[0][7][6]},
        {x: "7", y: "7", heat: data[0][7][7]},
        {x: "7", y: "8", heat: data[0][7][8]},
        {x: "7", y: "9", heat: data[0][7][9]},
        {x: "8", y: "0", heat: data[0][8][0]},
        {x: "8", y: "1", heat: data[0][8][1]},
        {x: "8", y: "2", heat: data[0][8][2]},
        {x: "8", y: "3", heat: data[0][8][3]},
        {x: "8", y: "4", heat: data[0][8][4]},
        {x: "8", y: "5", heat: data[0][8][5]},
        {x: "8", y: "6", heat: data[0][8][6]},
        {x: "8", y: "7", heat: data[0][8][7]},
        {x: "8", y: "8", heat: data[0][8][8]},
        {x: "8", y: "9", heat: data[0][8][9]},
        {x: "9", y: "0", heat: data[0][0][0]},
        {x: "9", y: "1", heat: data[0][9][1]},
        {x: "9", y: "2", heat: data[0][9][2]},
        {x: "9", y: "3", heat: data[0][9][3]},
        {x: "9", y: "4", heat: data[0][9][4]},
        {x: "9", y: "5", heat: data[0][9][5]},
        {x: "9", y: "6", heat: data[0][9][6]},
        {x: "9", y: "7", heat: data[0][9][7]},
        {x: "9", y: "8", heat: data[0][9][8]},
        {x: "9", y: "9", heat: data[0][9][9]},
    ]};[0]