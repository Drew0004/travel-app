const trips = [
  {
    travel : "London",
    travelInfo: {
          dateStart: "02/10/2025",
          dateEnd: "06/10/2025",
          description: "Londra, capitale del Regno Unito, è una delle città più cosmopolite e storiche al mondo. Situata sul Tamigi, è celebre per monumenti come il Big Ben, il Tower Bridge e Buckingham Palace. Con una ricca offerta culturale, ospita musei di fama mondiale e una vivace scena di teatri, moda e cucina, riflettendo la sua grande diversità culturale.",
          travelImg: "/London.jpg"
      },
      numberOfDays : 5,
      stops : [
          {
              stopName : "London-Eye",
              stopDate : "02/10/2025",
              lat: '',
              lng: '',
              stopDescription: "Il London Eye è una grande ruota panoramica situata lungo il fiume Tamigi a Londra. Inaugurata nel 2000, offre spettacolari viste della città e dei suoi monumenti. Con i suoi 135 metri di altezza, è una delle attrazioni turistiche più popolari di Londra, offrendo un'ampia panoramica a 360 gradi della capitale britannica.",
              stopImg: "/LondonEye.jpg",
              stopRanking: 4,
              stopDone: false,
              stopNotes: ""
          },
          {
              stopName : "Big Ben",
              stopDate : "03/10/2025",
              lat: '',
              lng: '',
              stopDescription: "Il Big Ben è l'iconico orologio situato alla torre del Parlamento di Londra. Inaugurato nel 1859, è un simbolo riconoscibile della città e del Regno Unito. Spesso usato per rappresentare Londra, il nome Big Ben si riferisce inizialmente alla grande campana all'interno della torre, mentre il vero nome della torre è Elizabeth Tower.",
              stopImg: "/Big Ben.jpg",
              stopRanking: 3,
              stopDone: true,
              stopNotes: ""
          }
      ]
  },
  {
    travel : "Berlino",
    travelInfo: {
          dateStart: "05/11/1999",
          dateEnd: "10/11/1999",
          description: "Berlino, capitale della Germania, è una città vibrante e storicamente ricca. Conosciuta per la Porta di Brandeburgo, il Muro di Berlino e il Reichstag, Berlino è un centro di cultura, arte e politica. La città è rinomata per la sua scena artistica e musicale all'avanguardia, i suoi numerosi musei e gallerie, e la sua atmosfera internazionale e inclusiva. Berlino è anche un simbolo di rinascita, avendo superato divisioni storiche per diventare una metropoli dinamica e innovativa.",
          travelImg: "/Berlin.jpg"
      },
      numberOfDays : 6,
      stops : [
          {
              stopName : "Muro di berlino",
              stopDate : "05/11/1999",
              lat: '',
              lng: '',
              stopDescription: "Il Muro di Berlino, eretto nel 1961, separava Berlino Est comunista da Berlino Ovest, parte del blocco occidentale. Simbolo della Guerra Fredda, impediva la fuga dei cittadini dall'Est all'Ovest. Dopo decenni di tensioni, il muro fu abbattuto il 9 novembre 1989, segnando la fine della divisione tra le due Germanie e il crollo del blocco comunista in Europa.",
              stopImg: "/BerlinWall.jpg",
              stopRanking: 2,
              stopDone: false,
              stopNotes: ""
          },
          {
              stopName : "Berghain",
              stopDate : "09/11/1999",
              lat: '',
              lng: '',
              stopDescription: "Il Berghain è un iconico club di Berlino, celebre per la musica techno e le feste che durano tutto il weekend. Situato in un'ex centrale elettrica, è noto per la rigida selezione all'ingresso e l'atmosfera libertina. Il club, avvolto nel mistero, vieta l'uso dei telefoni, creando un ambiente di privacy e libertà che lo rende un punto di riferimento nella scena techno mondiale.",
              stopImg: "/Berghain.jpg",
              stopRanking: 1,
              stopDone: true,
              stopNotes: ""
          }
      ]
  }
]
export default trips