const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');

let mostRecentlyChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === mostRecentlyChecked) {
        inBetween = !inBetween;
        console.log('first / last');
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  // value of mostRecentlyChecked doesn't change until the interpreter gets to this line.
  mostRecentlyChecked = this;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck);
})
;