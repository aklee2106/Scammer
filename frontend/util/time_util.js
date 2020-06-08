export const formatUploadTime = time => {
  const newTime = new Date(time);

  let year = newTime.getFullYear();
  let month =  newTime.getMonth();

  let day = newTime.getDate();
  let hour = newTime.getHours();

  let minute = ('0'+ newTime.getMinutes()).slice(-2);

  let merid = 'AM'; 

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  if (hour > 12) {
    hour = hour - 12;
    merid = 'PM';
  };


  return `${months[month]} ${day}, ${year} at ${hour}:${minute} ${merid}`; 
}

