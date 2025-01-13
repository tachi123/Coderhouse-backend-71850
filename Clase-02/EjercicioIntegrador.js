class TicketManager{

    #eventos = [];
    #precioBaseDeGanancia = 0.15;

    constructor(){
        //Inicializar
    }

    get eventos(){
        return this.#eventos;
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()){
        //Se pueden agregar validaciones a los campos
        const nuevoEvento = {
            id: this.#eventos.length + 1,
            nombre,
            lugar,
            precio: precio * (1 + this.#precioBaseDeGanancia),
            capacidad,
            fecha,
            participantes: []
        }
        this.#eventos.push(nuevoEvento);
        return nuevoEvento;
    }

    agregarUsuario( idEvento, idUsuario){
        //Encontrar el evento
        const evento = this.#eventos.find( unEvento => unEvento.id === idEvento );
        if(!evento){
            //NO ENCONTRO EL EVENTO
            console.error("EVENTO NO ENCONTADO");
            throw new Error('Evento no encontrado');
        }
        if(evento.participantes.includes(idUsuario)){
            //YA ESTA EL USUARIO REGISTRADO EN EL EVENTO
            console.error("USUARIO YA REGISTRADO");
            throw new Error('Usuario ya registrado');
        }
        this.#eventos.participantes.push(idUsuario);
    }

    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha){
        //Encontrar el evento
        const eventoOriginal = this.#eventos.find( unEvento => unEvento.id === idEvento );
        if(!eventoOriginal){
            //NO ENCONTRO EL EVENTO
            console.error("EVENTO NO ENCONTADO");
            throw new Error('Evento no encontrado');
        }

        const nuevoEvento = {
            ...eventoOriginal, //Copiamos todas las propiedades del evento original
            id: this.#eventos.length + 1,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            participantes: []
        }

        this.#eventos.push(nuevoEvento);
    }

}

const unaInstancia = new TicketManager();