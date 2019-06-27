function search() {
    let _names = document.querySelector("#student_name").value

    let = _content = "";
    let results = [];
    if (_names !== "") {
        axios.get('data/bd.json').then(
            response => {
                response.data.emails.forEach(student => {
                    if (student.names.search(_names) != -1) {
                        results.push(student);
                    }
                }
                );
                if (results.length > 0) {
                    results.forEach(row => {
                        _content += `
                    <tr>
                        <td>${row.names}</td>
                        <td>${row.email}</td>    
                    </tr>
                    `;
                    });
                }
                else {
                    document.querySelector('.notify-content').innerHTML = 'Ud no consta con correo institucional. <a href="registrarse.html">Registrase</a>';

                    document.querySelector('.notify').style.display = 'block';
                    document.querySelector('#btnOk').style.display = 'none';
                }
                document.querySelector('#resp').innerHTML = _content;

            });
    } else {
        document.querySelector('.notify-content').innerHTML = 'Por favor ingrese sus apellidos y nombres para realizar la búsqueda';

        document.querySelector('.notify').style.display = 'block';
        document.querySelector('#btnOk').style.display = 'none';
    }


}
function call_search(e) {
    if (e.keyCode == 13) {
        search();
    }
}

function check_input(parametros) {
    resp = true;
    ite = 0;
    while (resp) {
        if (parametros[ite].input === "") {
            document.querySelector('.notify-content').innerHTML = parametros[ite].fail_message;

            document.querySelector('.notify').style.display = 'block';
            document.querySelector('#btnOk').style.display = 'none';
            resp = false;
        }
        ite++;
    }
    return resp;
}

function form_validate(event) {

    let _id = document.querySelector('#doc_id').value;
    let _ap1 = document.querySelector('#ap1').value;
    let _ap2 = document.querySelector('#ap2').value;
    let _n1 = document.querySelector('#name1').value;
    let _n2 = document.querySelector('#name2').value;
    let _cel = document.querySelector('#cel').value;
    let _email_p = document.querySelector('#email').value;
    params = [
        { "input": _id, "fail_message": "Por favor ingrese su C.I. o Pasaporte" },
        { "input": _ap1, "fail_message": "Por favor ingrese su apellido paterno" },
        { "input": _ap2, "fail_message": "Por favor ingrese su apellido materno" },
        { "input": _n1, "fail_message": "Por favor ingrese primer nombre" },
        { "input": _n2, "fail_message": "Por favor ingrese su segundo nombre" },
        { "input": _cel, "fail_message": "Por favor ingrese su telefono celular" },
        { "input": _email_p, "fail_message": "Por favor ingrese su correo personal" },
    ];
    if(check_input(params)){
        
    }
    


}