
// create divs
var newContainer = document.querySelector('.container');

// Console log helps us to see how the code runs 
console.log(newContainer);

// create a 16 x 16 grid and creates hover effect
function createGrid(rows, cols) {
    for (i=0; i < (rows * cols); i++) {
        let grid = document.createElement('div');
        newContainer.appendChild(grid).className = 'grid-item';
        
        grid.addEventListener('mouseover', () => {
          console.log('mouse over');
          grid.style.backgroundColor = "purple";
        })
        
        grid.addEventListener('mouseleave', () => {
          console.log('mouse leave');
        })
        
        };
};

createGrid(16, 16);



// To do
// nået til punkt 3 hover funktion - ovenstående virker dog ikke 




//newContainer.style.setProperty('grid-rows', 'rows');
  //newContainer.style.setProperty('grid-cols', 'cols');

  // This appends the div to the container
//newContainer.appendChild(newDiv);

// we add an id and class to each div 
//newDiv.setAttribute('id','newDiv');
//newContainer.classList.add('container');