const trips = [
  {
    travel : "London",
    travelInfo: {
          dateStart: "02/10/2025",
          dateEnd: "06/10/2025",
          description: "Il mio viaggio a Londra, questa è una description di test",
          travelImg: "https://www.dltviaggi.it/immagine/17827/Londra%201.jpg"
      },
      numberOfDays : 5,
      stops : [
          {
              stopName : "London-Eye",
              stopDate : "02/10/2025",
              stopDescription: "Questa è una didascalia sul London-eye",
              stopImg: "https://cdn-imgix.headout.com/media/images/a4b93ddaa87c2222fee610913b6b1075-Londoneye.jpg",
              stopRanking: "4",
              stopDone: false,
              stopNotes: ""
          },
          {
              stopName : "Big Ben",
              stopDate : "03/10/2025",
              stopDescription: "Questa è una didascalia sul Big Ben",
              stopImg: "https://hips.hearstapps.com/hmg-prod/images/big-ben-tower-on-westmister-royalty-free-image-1664369812.jpg?crop=0.671xw:1.00xh;0.0849xw,0&resize=1200:*",
              stopRanking: "3",
              stopDone: true,
              stopNotes: ""
          }
      ]
  }
]
export default trips