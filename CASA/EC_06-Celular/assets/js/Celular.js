export class Celular {
    // Consrtuctor
    constructor(marca, modelo, numero, capacidadGB) {
        this.marca = marca;
        this.modelo = modelo;
        this.numero = numero;
        this.capacidadGB = capacidadGB;
        this.capacidadDisponible = capacidadGB
        this.power = false;
        this.photos = []
        this.sms = {}
        this.installedApps = {}
    }

    // Método para encender el celular
    powerOn() {
        if (this.power) {
            return "Celular ya esta encendido..."; // cambie el console.log para que me retorne un valor
        } else {
            this.power = true;
            return `Encendiendo ${this.modelo}...`;
        }
    }

    // Método para apagar el celular
    powerOff() {
        if (this.power) {
            this.power = false
            return `Apagando ${this.modelo}...`;
        } else {
            return "Celular ya esta apagado...";
        }
    }

    // Información del celular
    info() {
        if (this.power) {
            let info_ = `${this.marca} ${this.modelo} de ${this.capacidadGB}GB con ${this.capacidadDisponible}GB libres`;
            return info_;
        } else {
            return "Celular esta apagado..."
        }
    }

    // Tomar fotografia
    fotografiar(descripcion) {
        if (this.power) {
            this.photos.push(descripcion);
            return `Fotografia de "${descripcion}" tomada con exito`;
        } else {
            return `Tu ${this.modelo} esta apagado...`;
        }
    }

    // Ver fotografias
    verFotografias() {
            return this.photos;
    }

    // Enviar sms
    enviarSms(numero, mensaje) {
        if (this.power) {
            if (!this.sms[numero]) {
                this.sms[numero] = []
                this.sms[numero].push(mensaje);
                return `SMS enviado`;
            } else {
                this.sms[numero].push(mensaje);
                return `SMS enviado`;
            }
        } else {
            return `Tu ${this.modelo} esta apagado...`;
        }
    }

    // Ver sms´s
    verSms() {
        return this.sms;
    }

    instalarApp(appName, sizeGB) {
        if ((this.capacidadDisponible - sizeGB) > 0 && this.power) {
            this.capacidadDisponible -= sizeGB

            this.installedApps[appName] = sizeGB

            return `Se ha instalado ${appName} en tu ${this.modelo}`;
        } else if (!this.power) {
            return `Tu ${this.modelo} esta apagado...`;
        } else if (this.capacidadDisponible - sizeGB) {
            return `Solo quedan ${this.capacidadDisponible}GB disponibles de tus ${this.capacidadGB}`;
        } else {
            return `No has especificado una app...`;
        }
    }

    verAppsInstaladas() {
        return this.installedApps;
    }

    desinstalarApps() {

    }
}

// Exportar la clase para node
// module.exports = Celular;


// condicional para node
//if (require.main == module)


        