const { initializeApp} =  require('firestore-export-import')

const  serviceAccount  =  require('./firebase-adminsdk-xxx-xxxx.json')

const  appName  =  '[DEFAULT]'

initializeApp(serviceAccount, appName)

const  fs  =  require('fs');

const { backup } =  require('firestore-export-import')
//backup('collection name')

var collection=["collection1","collection2","collection3"];

collection.forEach(element => {
    backup(element).then((data) =>
    {
        const  json  =  JSON.stringify(data);
        fs.writeFile(`firestore.${element}.json`, json, 'utf8',()=>{
        console.log('OK:'+element);

    })
});

});
