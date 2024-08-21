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
              stopImg: "https://cdn-imgix.headout.com/media/images/a4b93ddaa87c2222fee610913b6b1075-Londoneye.jpg",
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
              stopImg: "https://hips.hearstapps.com/hmg-prod/images/big-ben-tower-on-westmister-royalty-free-image-1664369812.jpg?crop=0.671xw:1.00xh;0.0849xw,0&resize=1200:*",
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
              stopImg: "https://cdn-imgix.headout.com/media/images/a4b93ddaa87c2222fee610913b6b1075-Londoneye.jpg",
              stopRanking: 2,
              stopDone: false,
              stopNotes: ""
          },
          {
              stopName : "Bergain",
              stopDate : "09/11/1999",
              lat: '',
              lng: '',
              stopDescription: "Questa è una didascalia sul Bergain",
              stopImg: "https://hips.hearstapps.com/hmg-prod/images/big-ben-tower-on-westmister-royalty-free-image-1664369812.jpg?crop=0.671xw:1.00xh;0.0849xw,0&resize=1200:*",
              stopRanking: 1,
              stopDone: true,
              stopNotes: ""
          }
      ]
  }
]
export default trips