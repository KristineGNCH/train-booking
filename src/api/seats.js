export async function searchSeats(id) {
  // const params = new URLSearchParams(props)

  return await fetch(`https://students.netoservices.ru/fe-diplom/routes/${id}/seats`)
    .then(response => response.json())
    .catch(err => console.log(err));
}