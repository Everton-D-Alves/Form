"use strict";
document.querySelector("form").addEventListener("submit", async (e)=>{
    e.preventDefault();
    const checkbox = document.getElementById("permitir");
    if(!checkbox.checked){ // Verifica se o checkbox está marcado
        alert("Marque checkbox para enviar dados ou clique em Cancelar!");
        return false; // Impede o envio se o checkbox não estiver marcado
    }
    const formData = new FormData(e.target); // Captura os dados do formulário;
    const data = Object.fromEntries(formData.entries()); // Transforma dados em objeto.
    try{
        const resposta = await fetch("http://localhost:3000/usuarios", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data) // Transforma dados em JSON antes de enviá-los
        })
        if(resposta.ok){
            e.target.reset(); // Reseta o formulário se o envio for bem-sucedido
            alert("Formulário enviado com sucesso!")
        }else{
            throw new Error("Erro de envio de dados!")
        }
    }
    catch(_error){
        console.error("Erro:", _error)
    }
    finally{
        alert("Fim do programa!")
    }
})
