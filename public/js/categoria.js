function eliminarCategoria(idForm, destino) {

    confirma = confirm("Deseja eliminar esta categoria?");

    if (confirma) {

        dadosForm = $('#' + idForm).serialize();

        $.ajax({

            method: 'post',
            url: destino,
            data: dadosForm,
            dataType: 'html',
            success: function (data) {
                //Ação de sucesso
                if (data == 'true') {
                    //$('#linha'+idForm).remove();
                    $('#linha' + idForm).fadeOut(1000);
                } else {
                    alert('Não foi possível eliminar a categoria!');
                }
            },
            error: function (argument) {
                alert('Erro ao eliminar categoria!');
            }

        });

    }

    return false;
}

/**
 * Mostra e esconde o título
 * */
function mostrarEsconderTitulo() {
    $('#titulo').fadeToggle(1000);
}

/**
 * Rotina para adicionar categorias
 * */
function adicionarCategoria(destino) {
    
        dadosForm = $('#formAdd').serialize();
        nomcat = $('#nomcat').val();
        
        if (nomcat.trim() != "") {
        $.ajax({

            method: 'post',
            url: destino,
            data: dadosForm,
            dataType: 'html',
            success: function (data) {
               if (data == "true") {
                   alert('Categoria adicionada com sucesso !');
                   
                   //Redireciona o usuário
                   //location.href='https://google.com';
                   
                   $('#nomcat').val('');
                   $('#nomcat').focus();
                   
               } else {
                   alert('Falha ao adicionar categoria !');
               }
            },
            error: function (argument) {
                alert('Erro ao eliminar categoria!');
            }

        });
        
    } else {
        alert("Preencha todos os campos!");
    }

    return false;
    
}