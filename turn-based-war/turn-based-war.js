let karakterler = [
  {
    name: "ADC",
    saldiri: 110, // 120
    defans: 40, // 80
    can: 500, // 800
    kritikorani: 0.4,
    kritikdmg: 2,
    iska: 0.2,
    healthregen: 30,
  },
  {
    name: "APC",
    saldiri: 120,
    defans: 30,
    can: 500,
    kritikorani: 0.3,
    kritikdmg: 2,
    iska: 0.2,
    healthregen: 30,
  },
  {
    name: "Tank",
    saldiri: 80,
    defans: 60,
    can: 600,
    kritikorani: 0.2,
    kritikdmg: 2,
    iska: 0.2,
    healthregen: 50,
  },
  {
    name: "Support",
    saldiri: 90,
    defans: 50,
    can: 650,
    kritikorani: 0.1,
    kritikdmg: 2,
    iska: 0.2,
    healthregen: 60,
  },
];

// PC'ye rastgele karakter atamak için seçim rastgele numara belirleme fonksiyonu
function rakipSecim(max) {
  return Math.floor(Math.random() * max);
}

// Kendimizin ve rakibin karakterine ileride attribute vermek için boş array oluşturma.
let ourCharacter = {};
let oppCharacter = {};

var secim = parseInt(
  prompt(
    "Lütfen bir karakter seciniz\n\n 1) ADC \n 2) APC \n 3) Tank \n 4) Support"
  )
);

if (secim === 1) {
  ourCharacter = karakterler[0];
  oppCharacter = karakterler[rakipSecim(5)];
} else if (secim === 2) {
  ourCharacter = karakterler[1];
  oppCharacter = karakterler[rakipSecim(5)];
} else if (secim === 3) {
  ourCharacter = karakterler[2];
  oppCharacter = karakterler[rakipSecim(5)];
} else if (secim === 4) {
  ourCharacter = karakterler[3];
  oppCharacter = karakterler[rakipSecim(5)];
} else if (isNaN(secim)) {
  prompt("Karakter seçmediniz !");
}

while (ourCharacter === oppCharacter && !isNaN(secim) == "") {
  if (secim === 1) {
    ourCharacter = karakterler[0];
    oppCharacter = karakterler[rakipSecim(5)];
  } else if (secim === 2) {
    ourCharacter = karakterler[1];
    oppCharacter = karakterler[rakipSecim(5)];
  } else if (secim === 3) {
    ourCharacter = karakterler[2];
    oppCharacter = karakterler[rakipSecim(5)];
  } else if (secim === 4) {
    ourCharacter = karakterler[3];
    oppCharacter = karakterler[rakipSecim(5)];
  }
}

console.log(oppCharacter);
console.log(ourCharacter);
alert(`Karakteriniz ${ourCharacter.name}`);
alert(`Karşı karakter ${oppCharacter.name}`);

while (ourCharacter.can > 0 && oppCharacter.can > 0) {
  ourCharacter.can =
    ourCharacter.can - oppCharacter.saldiri + ourCharacter.defans;
  oppCharacter.can =
    oppCharacter.can - ourCharacter.saldiri + oppCharacter.defans;
  if (Math.random() < oppCharacter.kritikorani) {
    oppCharacter.saldiri *= oppCharacter.kritikdmg;
    alert("Kritik vurdu!");
    alert(`Canınız ${ourCharacter.can}`);
  }
  if (Math.random() < ourCharacter.kritikorani) {
    ourCharacter.saldiri *= ourCharacter.kritikdmg;
    alert(`Kritik vurdun!`);
  }
  if (Math.random() < ourCharacter.iska) {
    oppCharacter.can += oppCharacter.healthregen;
    alert(
      `Iskaladın ve rakip ${ourCharacter.healthregen} can doldurdu! yeni canı ${oppCharacter.can}`
    );
  }
  if (Math.random() < oppCharacter.iska) {
    ourCharacter.can += ourCharacter.healthregen;
    alert(
      `Rakip ıskaladı ve sen de ${ourCharacter.healthregen} can doldurdun! artık canın ${ourCharacter.can}`
    );
  }
  alert(`Canınız ${ourCharacter.can}`);
  alert(`PC'nin canı ${oppCharacter.can}`);
  if (oppCharacter.can <= 0 && ourCharacter.can > 0) {
    alert("Siz kazandınız!");
  } else if (ourCharacter.can <= 0 && oppCharacter.can > 0) {
    alert("PC Kazandı :(");
  } else if (ourCharacter.can <= 0 && oppCharacter.can <= 0) {
    alert("Berabere !");
  }
}
