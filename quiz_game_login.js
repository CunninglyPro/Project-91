function addUser() {
    var player_1 = document.getElementById("player1_name_in").value;
    var player_2 = document.getElementById("player2_name_in").value;

    localStorage.setItem("player1login", player_1);
    localStorage.setItem("player2login", player_2);

    window.location = "quiz_game_page.html";
}   