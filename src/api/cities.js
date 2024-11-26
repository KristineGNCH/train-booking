export async function getCities(query) {
  return await fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${query}`).then(response => response.json()).catch(err => console.log(err))
}


