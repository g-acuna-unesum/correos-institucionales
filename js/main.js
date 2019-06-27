function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}
function search() {
    let _names = capital_letter(document.querySelector("#student_name").value.toLowerCase());    
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
                    document.querySelector('.notify-content').innerHTML = 'Ud no consta con correo institucional. <a href="https://forms.gle/d3s9FBqL5oCxDktr7" target="_blank">Registrase</a>';

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

