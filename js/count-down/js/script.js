const endDate = "9 Dec 2023 10:49 AM";
document.getElementById("End-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000; //converted into seconds from mili seconds

    if(diff < 0) return;

    inputs[0].value = Math.floor(diff  / 3600 / 24);
    inputs[1].value = Math.floor((diff / 3600) % 24);
    inputs[2].value = Math.floor((diff / 60) % 60);
    inputs[3].value = Math.floor(diff % 60);


}
clock();

function clockTick(){
    clock();
}
setInterval(clockTick , 1000);
