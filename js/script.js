const buscar = () =>{
    var x = document.getElementById("buscar").value;
    const url = `https://pokeapi.co/api/v2/pokemon/${x.toLowerCase()}`;
    fetch(url).then((res)=> {
        if(res.status == "200"){
            return res.json();
        }else{
            document.getElementById("imgPoke").src = "./img/pokebola.png";    
            document.getElementById("nombre").value = ""; 
            
            document.getElementById("type").value = "";  

            document.getElementById("hr").value = "";    
            document.getElementById("attack").value = "";    
            document.getElementById("defense").value = "";    
            document.getElementById("special").value = "";    
            document.getElementById("specialdef").value = "";    
            document.getElementById("speed").value = "";   
            
            alert("No se encontro información del pokemon")
        }
    }).then((data) => {
        let imgPoke=data.sprites.front_default;
        let nom =data.name;
        let type = data.types;
        let states = data.stats;

        document.getElementById("imgPoke").src = imgPoke;    
        document.getElementById("nombre").value = nom;    
        
        type.forEach(data => {
            document.getElementById("type").value = data.type.name;  

        });
        document.getElementById("hr").value = states[0].base_stat;    
        document.getElementById("attack").value = states[1].base_stat;    
        document.getElementById("defense").value = states[2].base_stat;    
        document.getElementById("special").value = states[3].base_stat;    
        document.getElementById("specialdef").value = states[4].base_stat;    
        document.getElementById("speed").value = states[5].base_stat;    

        

    })
}

function buscarBtn(){
    buscar();
}
function limpiar(){
    document.getElementById("imgPoke").src = "./img/pokebola.png";    
    document.getElementById("nombre").value = ""; 
    
    document.getElementById("type").value = "";  

    document.getElementById("hr").value = "";    
    document.getElementById("attack").value = "";    
    document.getElementById("defense").value = "";    
    document.getElementById("special").value = "";    
    document.getElementById("specialdef").value = "";    
    document.getElementById("speed").value = "";   
    document.getElementById("buscar").value = "";   

}