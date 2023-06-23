import { useState, useEffect } from "react";
import "./App.css";

// function App() {
//   const saveItem = (e) => {
//     e.preventDefault();
//     if (form.title == "" || form.url == "") {
//       alert("bos gecemezsiniz");
//       return;
//     }
//     // setdata([
//     //   ...data,
//     //   {
//     //     title: form.title,
//     //     url: form.url,
//     //   },
//     // ]);
//     data.push({
//       ...form,
//     });
//     localStorage.setItem("hesen's data", JSON.stringify(data));
//     setform({
//       title: "",
//       url: "",
//     });
//     console.log(setdata);
//   };
//   useEffect(() => {
//     getItem();
//   }, []);

//   const getItem = () => {
//     const localData = localStorage.getItem("data" ?? []);
//     setdata(JSON.parse(localData));
//   };

//   const [data, setdata] = useState([]);

//   const [form, setform] = useState({
//     title: "",
//     url: "",
//   });

//   const removeItem = (item)=>{

//   }
//   return (
//     <div className="App">
//       {data.map((item) => (
//         <a href={item.url}>
//           {item.title} <br />
//         </a>
//       ))}
//       <h1>fjhfjh</h1>

//       <form>
//         <input
//           type="text"
//           value={form.title}
//           onChange={(e) => setform({ ...form, title: e.target.value })}
//         />
//         <input
//           type="text"
//           value={form.url}
//           onChange={(e) => setform({ ...form, url: e.target.value })}
//         />
//         <button onClick={saveItem}>Ekle</button>
//         <button onClick={()=>removeItem(item)}>x</button>
//       </form>
//     </div>
//   );
// }

// export default App;
const App = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fethcing();
  }, []);
  const fethcing = () => {
    fetch("https://fakestoreapi.com/products")
      // .then((data) => setProduct(data))
      .then((data) => data.json())
      .then((data) => setProduct(data));
  };
    console.log(product); 

  return (
    <div>
      <ul>
        {product.map((prodct) => (
          <li key={prodct.id}>{prodct.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
// https://fakestoreapi.com/products
