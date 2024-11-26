export async function getLastTickets() {
  return await fetch('https://students.netoservices.ru/fe-diplom/routes/last').then(response => response.json()).catch(err => console.log(err));
}