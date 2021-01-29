
var request = new XMLHttpRequest()


request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true)


request.send()


request.onload=function(){
    var data = JSON.parse(this.response)
    var message = document.createElement('div')
    message.innerHTML="Click on a button to view the details."
    document.body.append(message)
    var buttonArr = document.createElement('div')

    for(i=1;i<=data.length;i++)
    {   
        var a = document.createElement("button")
        a.type = "submit" 
        a.innerHTML= i
        a.value= i
        a.setAttribute('onClick','display(this)')
        buttonArr.append(a)
        buttonArr.append(' ')   
    }   

    document.body.append(buttonArr) 
    
}


function display(t){
    
     val = t.value

     request.open('GET',"https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json", true)
     request.send()
     request.onload=function(){   
     var newData = JSON.parse(this.response)
     var table = document.createElement('table') 
     table.style.border="1px solid black"
     document.body.append(table)
   
     for(i=0;newData.length;i++)
     {
         if(newData[i]["id"]==val)
         {
           var a = Object.keys(newData[i])
           var b = Object.values(newData[i])

        for(j=0;j<a.length;j++)
           {
            var tableRow = document.createElement('tr')  
                tableRow.setAttribute('style','border:1px solid black')            
                var td = document.createElement('td')
                td.setAttribute('style','border:1px solid black')  
                td.innerHTML=a[j]
                tableRow.append(td)
                var td = document.createElement('td')
                td.setAttribute('style','border:1px solid black')  
                td.innerHTML=b[j]
                tableRow.append(td)
                table.append(tableRow)
           }
         }
        }
      }     
    }