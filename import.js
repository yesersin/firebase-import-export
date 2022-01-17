const { initializeApp,restore } =  require('firestore-export-import')

const  serviceAccount  =  require('./firebase-adminsdk-xxx-xxxxx.json')
const  appName  =  '[DEFAULT]'

initializeApp(serviceAccount, appName)


var collection=["firestore.collection1.json","firestore.collection2.json","firestore.collection3.json"];

collection.forEach(element => {
restore(`firestore.${element}.json`, {
//where refs is an array of key item. You can leave it blank.
    refs: ['x'],
    //autoParseDates to parse dates if documents have timestamps
    autoParseDates: true,

    },()=>{
        console.log('OK:'+element);
})

})
