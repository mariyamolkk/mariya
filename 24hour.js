function convertToMilitaryTime(time) {
    const [hour, minute, secondAMPM] = time.split(':');
    
    let hour24 = parseInt(hour);
    const minute24 = parseInt(minute);
    const second24 = parseInt(secondAMPM);
  
    if (time.endsWith('AM') && hour24 === 12) {
      hour24 = 0;
    } else if (time.endsWith('PM') && hour24 !== 12) {
      hour24 += 12;
    }
  
    const militaryTime = `${hour24.toString().padStart(2, '0')}:${minute24.toString().padStart(2, '0')}:${second24.toString().padStart(2, '0')}`;
    return militaryTime;
  }
  
  // Usage example
  const time12Hour = '12:00:00AM';
  const militaryTime = convertToMilitaryTime(time12Hour);
  console.log(militaryTime);
  