 function updateClickCount(count, callback) {
    const clickCounterElement = document.getElementById('clickCounter');
    if (clickCounterElement) {
       const newCount = count + 1;
      clickCounterElement.textContent = `You clicked ${newCount} time${newCount !== 1 ? 's' : ''}`;
  
       callback(newCount);
    }
  }
  
   function logClickCount(count) {
    console.log(`Current click count: ${count}`);
  }
  
   let clickCount = 0;
  
   document.getElementById('clickButton').addEventListener('click', function () {
     updateClickCount(clickCount, logClickCount);
  
     clickCount++;
  });
  