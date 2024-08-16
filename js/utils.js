//Zaman Dilimini kullanarak biçimlendirilmiş bir tarih ve saat bilgisini döndüren fonnksiyon.
function convertTimeStamp(timeStamp, timezone) {
  const convertTimezone = timezone / 3600;
  const date = new Date(timeStamp * 1000);

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timezone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(
      convertTimezone
    )}`, //Zaman Dilimini Belirleme
    hour12: true, //12 saat formatında gösterilsin mi?
  };
  //tarihi ve saati kullanıcıya dost bir formatta döndürür.
  return date.toLocaleString("en-US", options);
}
//üLKE Kodunu ülke adına çeviren fonksiyondur.
function convertCountryCode(country){
    const regionNames=new Intl.DisplayNames(["en"],{type:"region"});
    console.log(regionNames.of(country));
    return regionNames.of(country);
}

export {convertTimeStamp,convertCountryCode};