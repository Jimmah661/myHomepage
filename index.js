window.onload = () => {
  let time = moment();
  console.log(JSON.stringify(time))
  document.getElementById('time').innerHTML = time;
}