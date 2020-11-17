var App = new Vue({
  el : "#root",
  data : {
    indiceMex:0,
    newMessage:"",
    indice:0,
    search:"",
    visible:true,

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
           message: 'Tu fatto!',
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
           message: 'Ricordatigiare',
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
           message: 'Hai portato il cane?',
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
        name: 'Luca',
        avatar: '_5',
        visible: true,
        messages:[
          {
           date: '10/01/2020 15:30:55',
           message: 'Hai portato il cane?',
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
        name: 'Pasquale',
        avatar: '_6',
        visible: true,
        messages:[
          {
           date: '10/01/2020 15:30:55',
           message: 'Mangiamo fuori stasera?',
           status: 'sent'
           },
           {
           date: '10/01/2020 15:50:00',
           message: 'Ti va?',
           status: 'sent'
           },
           {
           date: '10/01/2020 16:15:22',
           message: 'Si va bene',
           status: 'received'
         }],
      },


      {
        name: 'Ale',
        avatar: '_7',
        visible: true,
        messages:[
          {
           date: '10/01/2020 15:30:55',
           message: 'Sei andato dalla nonna?',
           status: 'sent'
           },
           {
           date: '10/01/2020 15:50:00',
           message: 'Ricordati di dargli le medicine',
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
  methods:{
    change_active_contact(contact_indice) {
           this.indiceMex = contact_indice;

       },
       addMex(){

         console.log('addmex chiamato');

         let nuovoMex = {
                message: this.newMessage,
                date: '16/11/2020',
                status: 'sent'
            };
            let activeChat = this.contacts[this.indiceMex].messages;

        activeChat.push(nuovoMex);
        this.newMessage = "";

           setTimeout(function() {
             let receivedMessage = {
               message: "ok",
               date: '16/11/2020',
               status: 'received'
             };
             activeChat.push(receivedMessage);

           },1000);
      },
      searchItem(){
      this.contacts.forEach((contact, i) => {
        if (contact.name.includes(this.search)) {
          contact.visible = true;
        }else {
          contact.visible = false;
        }
          console.log(this.search);
      });


    },





  }


}

);
