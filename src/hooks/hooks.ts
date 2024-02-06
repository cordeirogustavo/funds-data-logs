export const searchOnTable = (tableId: string, text: string, exact: boolean) => {
  const ref = document.getElementById(tableId);
  if (!ref) return;
  let find = false;
  const term = text.toLowerCase();
  ref.querySelectorAll("tr").forEach((field) => {
    const fieldChange = field;
    field.querySelectorAll("td").forEach((val) => {
      if (!val.textContent) return
      if (!exact) {
        if (val.textContent.toLowerCase().search(term) > -1) find = true;
      } else {
        if (val.textContent.toLowerCase() === term) find = true;
      }
    });
    if (find) {
      fieldChange.classList.remove('hidden');
      fieldChange.classList.add('table-tr');
      find = false;
    } else {
      fieldChange.classList.remove('table-tr');
      fieldChange.classList.add('hidden');
    }
  });
};