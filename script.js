$(function () {
    const myAjax=new MyAjax();
    const blog = [];
    const szuloElem = $(".megjelenit");
    let apivegpont = "http://localhost:3000/blog";
    $("#rendezes").on("click", () => {
        let apivegpont = "http://localhost:3000/blog";
        let rendezes = "?_sort=lajkokszama&_order=desc";
        apivegpont += rendezes;
        myAjax.getAdat(apivegpont, blog, kiir);
    });
    
    $("#ujadat").on("click", () => {
        let adat={};
        adat.id =$('#id').val();
        adat.cim =$("#cima").val();
        adat.leiras =$("#leirasa").val();
        adat.datum =$("#datuma").val();
        adat.szerzo =$("#szerzoa").val();
        adat.lajkokszama =$("#lajkokszamaa").val();
        myAjax.postAdat(apivegpont,adat);
        
        }
    );


    

    $(window).on("#modositas", (event) => {
        $("#cima").val(event.detail.cim);
        $("#leirasa").val(event.detail.leiras);
        $("#datuma").val(event.detail.datum);
        $("#szerzoa").val(event.detail.szerzo);
        $("#lajkokszamaa").val(event.detail.lajkokszama);
        $("#ujadat").attr("disabled", true);
        $("#modositas").attr("disabled", false);
    })
    
    $(window).on("#torol", (event) => {
    console.log(event.detail.id);
    myAjax.deleteAdat(apivegpont, event.detail.id);

})

    let keresomezo = $("#kereses");
    keresomezo.on("keyup", () => {
        let apivegpont="http://localhost:3000/blog";
        apivegpont += "?q=" + keresomezo.val();
        console.log(apivegpont);
        myAjax.getAdat(apivegpont, blog, kiir);
    });

    myAjax.getAdat(apivegpont, blog, kiir);

    

 






    function kiir(tomb) {
        console.log(tomb);
        let sablon = "";
        tomb.forEach((elem) => {
            
            sablon += `
            <div id="blog">
            <h3 >${elem.cim}</h3>
           
            <h4 class="cim">
            ${elem.leiras}
            </h4>
            <p>${elem.datum}</p>
         
            <p>${elem.szerzo}</p>

            <p>${elem.lajkokszama}</p>

            <button class="torol">Törlés</button>
            <button id ="modosit" class="modosit">Módosítás</button>
        </div>
            `;
            
           /*
           sablon += `
            <tr id="blog">
            <td id="cim">${elem.cim}</td>
            <td id="leiras">${elem.leiras}</td>
            <td id="datum">${elem.datum}</td>
            <td id="szerzo">${elem.szerzo}</td>
            <td id="lajkokszama">${elem.lajkokszama}</td>
            <td>
                <button id="torol" class="torol">Törlés</button>
                <button id ="modosit" class="modosit">Módosítás</button>
            </td>
            </tr>
            `;
            */
        });
        
        szuloElem.html(sablon);
    }
});