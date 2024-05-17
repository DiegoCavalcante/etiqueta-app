import { useEffect, useState } from "react";
import "./App.css";
import Barcode from "react-barcode";

function App() {
  const [etiqueta, setEtiqueta] = useState("");
  const [list, setList] = useState([]);

  async function imprimir() {
    const result = etiqueta.split("\n");
    console.log(result);

    await setList(result);
    await print();
  }  

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen w-screen print:hidden bg-gray-100">
      <label for="etiqueta" className="p-2 text-2xl print:hidden">
            Gerador de Etiqueta
          </label>
        <div className="flex flex-col  rounded shadow-inner print:hidden w-1/2 h-1/2 bg-white">
          
          <textarea
            id="etiqueta"
            name="etiqueta"
            className="mx-1 p-2 print:hidden grow "
            type="text"
            placeholder="Digite"
            onChange={(e) => setEtiqueta(e.target.value)}
          />
          <button
            className="h-8 bg-emerald-500 hover:bg-emerald-600 rounded font-bold"
            onClick={() => imprimir()}
          >
            Imprimir
          </button>
        </div>
      </div>
      {list.map(
        (item, index) =>
          item != "" && (
            <div key={index} className="flex flex-col screen:hidden">
              <Barcode className="w-etq h-etq p-1 " value={item} />
            </div>
          )
      )}
    </div>
  );
}

export default App;
