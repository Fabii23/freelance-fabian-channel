
const FILENAME = `${new Date().getTime()}_test_file.csv`;
const classList = [ "shadow-sm","p-3", "mb-5", "bg-white", "rounded"];
const TEST_PAYLOAD =
  `id,name,status,
  1325-3FDB,Jim Smith,In Progress,
  6725-3FDB,Simon Waynes,Completed`;



function buildDownloadLink(data, filename) {

  const blob = new Blob([data], {
    type: 'text/csv;charset=UTF-8'
  });

  let link = document.createElement("a");
  link.setAttribute("href", URL.createObjectURL(blob));
  link.innerHTML = "Noob Sample1.csv";
  link.setAttribute("download", filename);

  classList.forEach(_class =>{
    link.classList.add(_class)
  });

  return link;
}


const DL_LINK = buildDownloadLink(TEST_PAYLOAD.trim(), FILENAME);


document.getElementsByClassName("container")[0].appendChild(DL_LINK);