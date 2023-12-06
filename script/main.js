let pole = [];
const seznam = [];

function VypisDoTabulky() {
    let table = document.getElementById("studentTable");

    // Vymaž aktuální obsah tabulky
    table.innerHTML = '';

    for (let i = 0; i < seznam.length; i++) {
        let newRow = table.insertRow(table.rows.length);

        let tab_jmeno = newRow.insertCell(0);
        let tab_prijmeni = newRow.insertCell(1);
        let tab_rocnik = newRow.insertCell(2);
        let tab_id = newRow.insertCell(3);

        tab_jmeno.innerHTML = seznam[i].Jmeno;
        tab_prijmeni.innerHTML = seznam[i].Prijmeni;
        tab_rocnik.innerHTML = seznam[i].Rocnik;
        let cislo = seznam[i].Id;
        tab_id.innerHTML = cislo; 
    }
}

function Pridat() {
    let jmeno = document.getElementById("name");
    let prijmeni = document.getElementById("surname");
    let rocnik = document.getElementById("rocnik");

    if((jmeno.value != "") && (isNaN(jmeno.value)))
    {
        if((prijmeni.value != "") && (isNaN(prijmeni.value)))
        {
            if((rocnik.value != "") && (rocnik.value > 0) && (rocnik.value < 10) && (!isNaN(rocnik.value)))
            {
                let cislo = "";
                //cislo = Math.PI * seznam.length
                for(let i =0; i < 5; i++)
                {
                    let nahodne_cislo = Math.floor(Math.random() * 10);
                    cislo += nahodne_cislo;
                }
                
                seznam.push({ Jmeno: jmeno.value, Prijmeni: prijmeni.value, Rocnik: rocnik.value, Id: cislo});

                VypisDoTabulky();

            } 
            else 
            {
                alert("Bitch it ain't workin'!")
            }
        }
    }


}

function odebrat()
{
    if((document.getElementById("bam").value == 0) || (document.getElementById("bam").value > seznam.length))
    {
        alert("Jebu tvoj mať!")
    }
    else
    {
        seznam.splice(document.getElementById("bam").value - 1, 1);
        VypisDoTabulky();
    }
    
}

function odebrat_prvni()
{
    seznam.shift();
    VypisDoTabulky();
}

function odebrat_posledni()
{
    seznam.pop();
    VypisDoTabulky();
}