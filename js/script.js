 const dataDaCorrida = new Date('June 14, 2026 10:00:00').getTime();

    const intervaloContagem = setInterval(function() {
        const agora = new Date().getTime();
        const distancia = dataDaCorrida - agora;

        const elDias = document.getElementById('dias');
        
        if (elDias) {
            const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

            elDias.innerText = dias < 10 ? '0' + dias : dias;
            document.getElementById('horas').innerText = horas < 10 ? '0' + horas : horas;
            document.getElementById('minutos').innerText = minutos < 10 ? '0' + minutos : minutos;
            document.getElementById('segundos').innerText = segundos < 10 ? '0' + segundos : segundos;

            if (distancia < 0) {
                clearInterval(intervaloContagem);
                document.getElementById('countdown').innerHTML = "<span class='text-success fs-3'>LARGADA! 🏁</span>";
            }
        }
    }, 1000);