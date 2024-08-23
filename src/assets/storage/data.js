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
              stopDescription: "Questa è una didascalia sul London-eye",
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
              stopDescription: "Questa è una didascalia sul Big Ben",
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
              stopDescription: "Questa è una didascalia sul Muro di Berlino",
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
              stopDescription: "Questa è una didascalia sul Bergain",
              stopImg: "/Berghain.jpg",
              stopRanking: 1,
              stopDone: true,
              stopNotes: ""
          }
      ]
  }
]
export default trips