const padTo2Digits = (num)=>{
    return num.toString().padStart(2, '0');
  }
  
const formatDate = (dateString) =>{
     const date = new Date(dateString);
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }
  
  
module.exports = {formatDate}