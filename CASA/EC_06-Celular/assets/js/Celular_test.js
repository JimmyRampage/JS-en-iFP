import { Celular } from "./Celular.js";

const CELULAR_1 = new Celular("Apple", "iPhone 13 Mini", 56964643425, 256)
console.log(CELULAR_1.marca);
console.log(CELULAR_1.powerOn());
console.log(CELULAR_1.powerOn());
console.log(CELULAR_1.powerOff());
console.log(CELULAR_1.fotografiar())
console.log(CELULAR_1.powerOff());
console.log(CELULAR_1.powerOn());
console.log(CELULAR_1.info());
console.log(CELULAR_1.fotografiar("oso"));
console.log(CELULAR_1.fotografiar("Paisaje"));
console.log(CELULAR_1.fotografiar("xD"));
console.log(CELULAR_1.verFotografias());
console.log(CELULAR_1.enviarSms(123, "hola hola"))
console.log(CELULAR_1.enviarSms(123, "chaoo"))
console.log(CELULAR_1.enviarSms(123, "peo"))
console.log(CELULAR_1.enviarSms(133, "mimis"))
console.log(CELULAR_1.enviarSms(123, "peo"))
console.log(CELULAR_1.verSms())
console.log(CELULAR_1.instalarApp())
console.log(CELULAR_1.instalarApp("app1", 50))
console.log(CELULAR_1.instalarApp("app2", 200))
console.log(CELULAR_1.instalarApp("app3", 10))
console.log(CELULAR_1.verAppsInstaladas())
console.log(CELULAR_1.info())



