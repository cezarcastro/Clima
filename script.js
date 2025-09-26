document.querySelector('.busca').addEventListener('sybmit', (event)=>{
    event.preventDefault()

    let input = Document.querySelector('#searchInput').value

    if(input !== ""){
        ShowWarning("Carregando...")
    }else{

    }
})

function ShowWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
}