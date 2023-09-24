export function createId() { 
  return new Date().getTime().toString(); 
} 
 
export function formatDate(date) { 
  if (date && date.seconds) { 
    const _date = new Date(date.seconds * 1000); 
    const year = _date.getFullYear(); 
    return Number(year); 
  } else { 
    return ''; // Или другое значение по умолчанию, если date не определен или не содержит свойство seconds. 
  } 
}