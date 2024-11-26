export async function searchRoutes(props) {
  const params = new URLSearchParams(props)

  return await fetch('https://students.netoservices.ru/fe-diplom/routes?' + params.toString())
    .then(response => response.json())
    .catch(err => console.log(err));
}
