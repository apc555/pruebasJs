// Programa para calcular coste de viaje

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function consViaje (){
  console.log('Gasto de combustible por viaje')
  rl.question('Introduce el precio de tu combustible: ', (precio) => { 
    rl.question('Introduce el consumo a los 100km: ', (a) => {
      rl.question('Introduce los kilómetros de viaje: ', (b) => {
        if (a < 1) {
          console.log(a,'non e un consumo válido');
        } else if (b < 0.1) {
          console.log(`${b} non é unha distancia válida`);
        } else {
          let final = a/100*b;
          let finalRedondeado = Math.round(1000*final)/1000;
          let precioFinal = final * precio;
          let precFinalRed = Math.round(100*precioFinal)/100;
          console.log("\n** Consumo del trayecto:",finalRedondeado,"litros **");
          console.log("\n** Si el combustible cuesta",precio,"€/L, el precio del trayecto es",precFinalRed,"€ **");
        }
        
        rl.close();
      });
    });
  });
}

consViaje();