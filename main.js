var App = new Vue({
  el : "#root",
  data : {
    indiceChat:0,

    avatarImg :"file:///Users/francescobello/Desktop/Bello%20Francesco/vue-boolzapp/img/myuser.jpg",
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages:[
          {
           date: '10/01/2020 15:30:55',
           message: 'Hai portato a spasso il cane?',
           status: 'sent'
           },
           {
           date: '10/01/2020 15:50:00',
           message: 'Ricordati di dargli da mangiare',
           status: 'sent'
           },
           {
           date: '10/01/2020 16:15:22',
           message: 'Tutto fatto!',
           status: 'received'
         }],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages:[
          {
           date: '10/01/2020 15:30:55',
           message: 'Hai portato a spasso il cane?',
           status: 'sent'
           },
           {
           date: '10/01/2020 15:50:00',
           message: 'Ricordati di dargli da mangiare',
           status: 'sent'
           },
           {
           date: '10/01/2020 16:15:22',
           message: 'Tutto fatto!',
           status: 'received'
         }],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages:[
          {
           date: '10/01/2020 15:30:55',
           message: 'Hai portato a spasso il cane?',
           status: 'sent'
           },
           {
           date: '10/01/2020 15:50:00',
           message: 'Ricordati di dargli da mangiare',
           status: 'sent'
           },
           {
           date: '10/01/2020 16:15:22',
           message: 'Tutto fatto!',
           status: 'received'
         }],
      },
      {
        name: 'Lorenzo',
        avatar: '_4',
        visible: true,
        messages:[
          {
           date: '10/01/2020 15:30:55',
           message: 'Hai portato a spasso il cane?',
           status: 'sent'
           },
           {
           date: '10/01/2020 15:50:00',
           message: 'Ricordati di dargli da mangiare',
           status: 'sent'
           },
           {
           date: '10/01/2020 16:15:22',
           message: 'Tutto fatto!',
           status: 'received'
         }],
      },


    ]

},
//  openChat() {
  //       this.indiceChat += 1;

    // },

//}
}
)
