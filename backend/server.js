import express from 'express';
const app= express();

app.get('/',(req,res)=>{
    res.send('server is ready');
});

app.get('/api/jokes',(req,res)=>{
    const jokes= [
        {
            id:1,
            title:'1 joke',
            content:'Apparently, someone in London gets stabbed every 52 seconds. Poor bastard.'
        },
        {
            id:2,
            title:'2 joke',
            content:'this is a joke'
        }, 
        {
            id:3,
            title:'3 joke',
            content:'I told my wife she was drawing her eyebrows too high. She looked surprised'
        },
        {
            id:4,
            title:'4 joke',
            content:'Every 60 seconds in Africa... a minute passeses'
        }, {
            id:5,
            title:'5 joke',
            content:'How do you find Will Smith in the snow'
        }, 

    ];
    res.send(jokes);
});

const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);

});