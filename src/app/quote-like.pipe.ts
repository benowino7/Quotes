import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteLike'
})
export class QuoteLikePipe implements PipeTransform {

  transform(value: any): any {
    document.getElementById('display').addEventListener('click',()=>{like(1);});
document.getElementById('dislike').addEventListener('click',()=>{like(0);});
function like(lk) 
{
var likes, dlikes;


likes=parseInt(document.getElementById('lk').innerText);
dlikes=parseInt(document.getElementById('dlk').innerText);
if(lk==1){likes++; dlikes--;} else{dlikes++; likes--;}
if(likes<=0){likes=0;} if(dlikes<=0){dlikes=0;}
document.getElementById('lk').innerText=likes;
document.getElementById('dlk').innerText=dlikes;
}
  }

}
