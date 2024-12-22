
    const rslider=document.getElementById('redslider');
    const bslider=document.getElementById('blueslider');   
    const gslider=document.getElementById('greenslider');

    const rv=document.getElementById('rvalue');   
    const bv=document.getElementById('bvalue');   
    const gv=document.getElementById('gvalue');   
      
    const box=document.getElementById('color-box');
    const ip=document.getElementById('ip1');

   rslider.addEventListener('input',update);
   bslider.addEventListener('input',update);
   gslider.addEventListener('input',update);
   b1=document.getElementById('b1');
   b1.addEventListener('click',handle);
   

 function update(){
   const rvalue=rslider.value;
   const gvalue=gslider.value;
   const bvalue=bslider.value;
   rv.textContent= rvalue;
   gv.textContent= gvalue;
   bv.textContent= bvalue;
   ip.textContent= `rgb(${rvalue},${bvalue},${gvalue})`;
   box.style.backgroundColor=`rgb(${rvalue},${bvalue},${gvalue})`
 }
update();

 function handle(){
    const rvalue=rslider.value;
    const gvalue=gslider.value;
    const bvalue=bslider.value;
    const res=`rgb(${rvalue},${bvalue},${gvalue})`;
    
      if (document.hasFocus()) {
          navigator.clipboard.writeText(res)
          .then(() => {
              alert('Text copied to clipboard'+res);
          }).catch(err => {
              console.error('Failed to copy: ', err);
          });
      } else {
          console.error('Document is not focused');
      }
  }
  
   






