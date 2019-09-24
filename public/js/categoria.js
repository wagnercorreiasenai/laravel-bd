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

    //Trava o botão adicionar
    $('#btnSalvar').attr('disabled', 'true');

    if (nomcat.trim() != "") {
        $.ajax({

            method: 'post',
            url: destino,
            data: dadosForm,
            dataType: 'html',
            success: function (data) {
                if (data == "true") {

                    msg = 'Categoria adicionada com sucesso !';
                    $('#status').hide();
                    $('#status').html('<h4 class="sucesso">' + msg + '</h4>');
                    $('#status').fadeIn(800);

                    //Redireciona o usuário
                    //location.href='https://google.com';

                    $('#nomcat').val('');
                    $('#nomcat').focus();

                    //Destrava o botão
                    $('#btnSalvar').removeAttr('disabled');

                } else {
                    msg = 'Falha ao adicionar categoria !';
                    $('#status').hide();
                    $('#status').html('<h4 class="erro">' + msg + '</h4>');
                    $('#status').fadeIn(800);
                }
            },
            error: function (argument) {
                msg = 'Erro ao eliminar categoria!';
                $('#status').hide();
                $('#status').html('<h4 class="erro">' + msg + '</h4>');
                $('#status').fadeIn(800);
            }

        });

    } else {
        msg = 'Preencha todos os campos!';
        $('#status').hide();
        $('#status').html('<h4 class="erro">' + msg + '</h4>');
        $('#status').fadeIn(800);

        //Destrava o botão
        $('#btnSalvar').removeAttr('disabled');
    }

    return false;

}