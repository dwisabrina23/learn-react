import React, {useState, useRef} from 'react';
import styles from "./FormBuku.module.css";
function FormPage(props) {

    const dataKosong = {
        judul:"",
        pengarang: "",
        cetakan: "",
        tahunTerbit: "",
        kotaTerbit:"",
        harga: 0,
    }

    const [data, setData] = useState(dataKosong);
    const fotoSampul = useRef("")
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData({
            ...data,
            [name] : value,
        })
    }
    return (
        <div>
            <h1 style={{"text-align":"center"}}>Formulir Buku Baru</h1>
            <form>
                <label>
                    Judul
                    <input 
                        type="text"
                        className={styles.input} 
                        name="judul"
                        value={data.judul}
                        onClick={handleInput}
                        required/>
                </label>
                <label>
                    Pengarang
                    <input 
                        type="text"
                        className={styles.input} 
                        name="pengarang"
                        required
                        value={data.pengarang}
                        onClick={handleInput}
                        />
                </label>
                <label>
                    Cetakan
                    <input 
                        type="text"
                        className={styles.input} 
                        name="cetakan"
                        value={data.cetakan}
                        onClick={handleInput}
                        />
                </label>
                <label>
                    Tahun Terbit
                    <input 
                        type="number"
                        className={styles.input} 
                        name="tahunTerbit"
                        value={data.tahunTerbit}
                        onClick={handleInput}
                        />
                </label>
                <label>
                    Kota Terbit
                    <input 
                        type="text"
                        className={styles.input} 
                        name="kotaTerbit"
                        value={data.kotaTerbit}
                        onClick={handleInput}
                        />
                </label>
                <label>
                    Harga
                    <input 
                        type="number"
                        className={styles.input} 
                        name="harga"
                        value={data.harga}
                        onClick={handleInput}
                        />
                </label>
                <label>
                    Foto Sampul
                    <input 
                        type="file"
                        className={styles.input} 
                        ref={fotoSampul}
                    />
                </label>
                <input type="submit" value="Submit" />
                <button>Reset</button>
            </form>
        </div>
    );
}

export default FormPage;