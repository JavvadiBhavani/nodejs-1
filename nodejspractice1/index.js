var fs=require('fs');

var material;
fs.readFile("file.txt",(err,data)=>{

    if(err){
    console.log("Some error occured");
    }
    else{
       material=data.toString();  //intially data is in binary form
    }
});

var http=require('http');
var server=http.createServer((req,res)=>{           //http directly contains createServer function
    res.writeHead(200,{             // 200 means status is ok
        'Content-type':'text/html',
    });
    res.write('<h1 style="color:red">'+material +'</h1>')
    res.end('');
});
server.listen(8081);    //8081 is port
