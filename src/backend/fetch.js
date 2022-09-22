// consumindo com fetch
const [page, setPage] = useState([]);
useEffect(() => {
  fetch(
    "https://artesplasticas.art.br/_react_backend/alpe/wp-json/wp/v2/pages/10"
  )
    .then((response) => response.json())
    .then((data) => setPage(data));
}, []);
console.log(page);

// consumindo com Axios
import axios from "axios";
const [page, setPage] = useState([]);
useEffect(() => {
  axios
    .get(
      "https://artesplasticas.art.br/_react_backend/alpe/wp-json/wp/v2/pages/10"
    )
    .then((response) => {
      setPage(response.data);
    });
}, []);
console.log(page);
