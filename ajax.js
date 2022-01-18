class MyAjax {
    constructor() {

    }

    getAdat(apivegpont, tomb, myCallback) {
        tomb.splice(0, tomb.length);

        $.ajax({
            url: apivegpont,
            type: "GET",
            success: function (result) {
                console.log("result");
                result.forEach((element) => {
                    tomb.push(element);
                });

                myCallback(tomb);
            },
        });
    }

    postAdat(apivegpont, adat) {    
        $.ajax({
            url: apivegpont,
            type: "POST",
            data:adat,
            success: function (result) {
                console.log(result);
              
            },
        });
    }
    deleteAdat(apivegpont, id) {    
        $.ajax({
            url: apivegpont+"/"+id,
            type: "DELETE",
            
            success: function (result) {
                console.log(result);
              
            },
        });
    }
    putAdat(apivegpont, adat,  id) {    
        $.ajax({
            url: apivegpont+"/"+id,
            type: "PUT",
            data:adat,
            success: function (result) {
                console.log(result);
              
            },
        });
    }



}