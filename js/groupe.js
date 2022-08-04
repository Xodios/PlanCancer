function showthing(){
    if (document.getElementById('menuu a').style.display == 'block') {
        document.getElementById('menuu a').style.display = 'none';
    } else {
        document.getElementById('menuu a').style.display = 'block';
    }
}
document.getElementById('btnn').addEventListener('click',showthing);
