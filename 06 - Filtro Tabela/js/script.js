function filtrarTabelaClassico(){



    var input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("filtro");
    filter = input.value.toUpperCase();
    table = document.getElementById ("tabela");
    tbody = table.getElementsByTagName ("tbody")[0];
    tr = tbody.getElementsByTagName ("tr");

    for (i = 0; i < tr.length; i++){ //linhas

        
        td = tr[i].getElementsByTagName("td");
        var displayed = false; 
        for (j = 0; j < td.length; j++) { //colunas
            
            if(td[j].textContent.toUpperCase().indexOf(filter) > -1){ //coluna por coluna
                console.log(td[j].textContent.toUpperCase())
                displayed = true;
                break;
            }
            
        }

        if(displayed){
            tr[i].style.display = "";
        }else
            tr[i].style.display = "none";
        }
        //tr[i].style.display = (displayed ? "" : "nome");
    }

    const filtrarTabelaModerno = () => {
        const filtro = document.getElementById('filtro').value.toUpperCase();
        const tr = document.querySelectorAll('#tabela tbody tr');
        tr.forEach(row => {
            const visible = Array.from(row.getElementsByTagName('td')).some(td => td.textContent.toUpperCase().includes(filtro));
            row.style.display = visible ? '' : 'none';
        });

}