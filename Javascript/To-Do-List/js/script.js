let liveToast=document.querySelector('#liveToast')
let close_success=document.querySelector('.close')
let error=document.querySelector('.error')
let success=document.querySelector('.success')
let close_error=error.querySelector('.close')

// Listeye yeni eleman ekleme fonksiyonu

function newElement(){
    
if(!(task.value=='')){
    let liDOM=document.createElement('li')
    liDOM.innerHTML=task.value
    list.append(liDOM)
    //Listeye eklendi alerti geldi
    liveToast.classList.replace('show','hide')
    liveToast=success
    liveToast.classList.replace('hide','show')
    console.log(liveToast)

  
    }

 else{
    liveToast.classList.replace('show','hide')
    //Listeye boş ekleme yapamazsınız! alerti geldi
    liveToast=error
    liveToast.classList.replace('hide','show')
    console.log(liveToast)
    
 }                   

  
}



// Success alert'inin close'u

close_success.addEventListener('click',function(){
    liveToast.classList.replace('show','hide')
})

// Error alert'inin close'u

close_error.addEventListener('click',function(){
    liveToast.classList.replace('show','hide')
})



// Check İşlemi

window.onclick = function(){
    let liChecked=document.getElementsByTagName('li')
    for (let i = 0; i < liChecked.length; i++) {
       
        liChecked[i].addEventListener('click', function(){
            if(!(liChecked[i].classList.contains('checked'))){
                liChecked[i].classList.add('checked')
               
            }

            else{
                liChecked[i].classList.remove('checked')
            }
          
        });

    

     }
 };






    
    


