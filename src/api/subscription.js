export async function getSubscription(email) {
  return await fetch(`https://students.netoservices.ru/fe-diplom/subscribe?email=${email}`).then(response => response.json()).catch(err => console.log(err))
}
