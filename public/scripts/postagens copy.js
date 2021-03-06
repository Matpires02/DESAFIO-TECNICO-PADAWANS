
var dataSet= []
function PreencherTabela(){
    $('#posts').DataTable( {
        data: dataSet,
        columns: [
            { title:"userId"},
            { title: "id"},
            { title: "Title" },
            { title: "Body" }
            
        ],
        "language": {
            "lengthMenu": "Mostrando _MENU_ registros por pagina",
            "zeroRecords": "Não foi encontrado",
            "info": "Mostrando pagina _PAGE_ de _PAGES_",
            "infoEmpty": "Não há informações para se mostrar",
            "infoFiltered": "(Buscado dentre _MAX_ registros no total)"
        }
    } );
}
$(document).ready(function() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => listaPosts(json)).then(() =>PreencherTabela())

} );
function listaPosts(placeholder) {
    var data = []
    placeholder.forEach(({userId, id ,title, body}) => {
        
        dataSet.push([userId, id ,title, body])
    })
    
}
