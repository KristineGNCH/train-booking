export async function getCities(query) {
  try {
    const response = await fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${encodeURIComponent(query)}`);
    if (!response.ok) {
      console.error(`Ошибка ${response.status}: ${response.statusText}`);
      return null; 
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return null; 
  }
}