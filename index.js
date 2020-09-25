const design = document.querySelectorAll("#design path");

for(let i = 0; i<design.length; i++){
    console.log('Letter ${i} is ${design[i].getTotalLength()}');
}