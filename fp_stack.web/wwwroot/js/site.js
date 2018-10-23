

$(function () {
    setInterval(carrouselTopo, 10000);
    $('select#opcoesFFC option:first').attr('selected', 'selected');

    $(".accordion").accordion({
        event: "mouseover",
        animate: "linear"
    });


    $(".fotosCasos li:nth-child(4) div, .fotosCasos li:nth-child(5) div, .fotosCasos li:nth-child(6) div ").hover(function () {
        $(this).css("top", "-155px");
    }, function () {
        $(this).css("top", "0");
    });

    $('.texto > span > strong').hover(function () {
        $('div.texto .tooltip').css('opacity', '1')
    }, function () {
        $('div.texto .tooltip').css('opacity', '0')
    });

    $('a.abrirModalVideo').click(function (e) {
        e.preventDefault();
        MostraModal('#modalVideo');
        var vid = document.getElementById("videoBemVindo");
        vid.play();
    });

    $('a.abrirModalDestaque').click(function (e) {
        e.preventDefault();
        MostraModal('#modalVideoDestaque');
        var vid = document.getElementById("videoDestaque");
        vid.play();
    });

    $("a[data-id='abreModalCadastro']").click(function () {
        Revista.Url = $(this).attr('data-url');

        if (Revista.VerificarCookie())
            window.open(Revista.Url);
        else
            MostraModal('#modalCadastro');
    });

    $('#formAlimentos').submit(function () {
        if ($("#q").val() == "")
            return false;
    });

    $('#modalVideo #btFecharModal a').click(function () {
        var vid = document.getElementById("videoBemVindo");
        vid.pause();
    });
    $('#modalVideoDestaque #btFecharModal a').click(function () {
        var vid = document.getElementById("videoDestaque");
        vid.pause();
    });

});

$("#controleCarrosel li a").live('click', function () {
    var bullets = $("#controleCarrosel li a");
    var position = $(this).parent('li')[0].id;

    bullets.html('<img src="' + $base_url + 'Content/images/bullets/bulletInativo.png">');
    $(this).html('<img src="' + $base_url + 'Content/images/bullets/bulletAtivo.png">');

    $('#outdoor li').removeClass('ativo');

    switch (position) {
        case 'first':
            $($('#outdoor li')).fadeOut();
            $($('#outdoor li')[0]).fadeIn('slow');
            break;
        case 'second':
            $($('#outdoor li')).fadeOut();
            $($('#outdoor li')[1]).fadeIn('slow');
            break;
        case 'third':
            $($('#outdoor li')).fadeOut();
            $($('#outdoor li')[2]).fadeIn('slow');
            break;
        default:
            $($('#outdoor li')).fadeOut();
            $($('#outdoor li')[0]).fadeIn('slow');
            break;
    }

    $('#divMae').removeClass();
    $('#divMae').addClass(position);
    $('#controleCarrosel li.' + position).addClass('bulletAtivo');
});

function carrouselTopo() {
    var slide = elementosCarrosel();
    controleCarrousel(slide);
}

function elementosCarrosel() {
    var func = function (index) {
        $($('#outdoor li')).fadeOut('fast', function () {
            $($('#outdoor li')[index]).fadeIn('fast');
        });
        return divMaeSlide.attr('class');
    }

    var divMaeSlide = $("#divMae");
    switch (divMaeSlide.attr('class')) {
        case 'first':
            divMaeSlide.attr('class', 'second');
            return func(1);
            break;
        case 'second':
            divMaeSlide.attr('class', 'third');
            return func(2);
            break;
        case 'third':
            divMaeSlide.attr('class', 'first');
            return func(0);
            break;
    }
}

function controleCarrousel(slideAtual) {
    $("#controleCarrosel li").removeClass();

    var bullet = $("#" + slideAtual);

    bullet.addClass("bulletAtivo");

    $("#controleCarrosel li a").html('<img src="' + $base_url + 'Content/images/bullets/bulletInativo.png">');
    bullet.children('a').html('<img src="' + $base_url + 'Content/images/bullets/bulletAtivo.png">');
}

function MostraModal(id) {
    var modal = $(id);
    centralizaModal(modal);

    modal.jqm({ modal: true, overlay: 20 });
    modal.jqmAddClose('.jqmClose');
    modal.jqmShow();
}


function centralizaModal(idModal) {
    var jModal = $(idModal);

    var larguraModal = parseInt(jModal.outerWidth());
    var larguraPagina = document.documentElement.clientWidth;

    var alturaModal = parseInt(jModal.outerHeight());
    var alturaPagina = document.documentElement.clientHeight;

    var left = (larguraPagina / 2) - (larguraModal / 2);
    var top = (alturaPagina / 2) - (alturaModal / 2);

    jModal.css('left', left);
    jModal.css('top', top);

    //$('body').append(jModal);
}

function RedirectUrl(url) {
    if (url)
        window.location = url;
}
