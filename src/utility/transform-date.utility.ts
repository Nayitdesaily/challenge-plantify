export const trasnformDate = (fechaString: string): any => {
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const partes = fechaString.split('-');
    const mes = parseInt(partes[1], 10) - 1;
    const dia = Number(partes[2]);
    const ano = Number(partes[0]);
    const mesNombre = meses[mes];

    return {
        gregoriano: `${dia} de ${mesNombre}`,
        eeuu: `${dia}/${mes}/${ano}`
    };
}