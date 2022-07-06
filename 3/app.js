const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const oneDay = 86400000;
  const oneHour = 3600000;
  const oneMin = 60000;



  //get HTML    
  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelector(".deadline-format h4");

  
  //date init
  let futureDate = new Date(2022, 7, 5, 11, 30, 0);
  console.log(futureDate)

  //date values
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();
  const date = futureDate.getDate();

  let month = futureDate.getMonth();
  month = months[month];
  const weekday = weekdays[futureDate.getDay()];
  


  //text
  giveaway.textContent = 'giveaway ends on ' + date + " " + month + " " + year + " " + hours + ":" + minutes + "am";


  // future time in ms
  const futureTime = futureDate.getTime();


  function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    
    //get days
    let days = t / oneDay;
    days = Math.floor(days);

    //get hours
    let hours = Math.floor ( (t % oneDay / oneHour) );
    
    //get minutes
    



  }

  getRemainingTime();


  