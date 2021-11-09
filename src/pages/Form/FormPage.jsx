import React, {useState, useRef} from "react";

function FormRegister(){
    const FormKosong = {
        nama: "",
        email: "",
        phone: 0,
        harapan: "",
    }
    //regex untuk periksa alphabet
    const regex = /^[A-Za-z ]*$/;
    const isNum = /^[0-9]*$/;

    //inisialisasi state
    const [data, setData] = useState(FormKosong);
    const [errorMsg, setErrorMsg] = useState("");
    const FotoSurat = useRef(null);

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        if (name === 'nama'){
            if ( regex.test(value)){
                setErrorMsg('')
            } else{
                setErrorMsg( 'Nama Lengkap Harus Huruf' )
            }

            if (name === 'phone' && isNum.test(value)){
                console.log(isNum.test(value))
                if ( value.length > 14 ){
                    setErrorMsg("nomor hp yang dimasukan terlalu panjang")
                } else if (value.length < 9){
                    setErrorMsg("nomor hp yang dimasukan terlalu panjang")
                } else {
                    setErrorMsg("")
                }
            }
        }
        setData( {
            ...data,
            [ name ]: value
        } )
        console.log( "data:", data );
    }

    const resetData = () => {
        setData(FormKosong )
    }


    const handleSubmit = (event) =>{
        if (errorMsg !== ''){
            console.log(errorMsg)
            alert('Data yang diinput belum sesuai');
        }else{
            alert(`"${data.nama}" sukses terdaftar`);
        }
        event.preventDefault();
    }

    return (
        <div className='container py-3'>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <h3 className="card-header text-center" style={{"fontFamily":"monospace", "fontWeight":600}}>
                            Pendaftaran Peserta Coding Bootcamp
                        </h3>
                        <div className="card-body">

                            <form>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group mb-3">
                                            <label >Nama Lengkap</label>
                                            <input
                                                type="text"
                                                name="nama"
                                                required
                                                onChange={handleChange}
                                                className="form-control" id="floatingInput"
                                                placeholder="Nama lengkap anda di sini.." />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label >Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                onChange={handleChange}
                                                className="form-control" id="floatingInput" placeholder="user@example.com" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label >No HP</label>
                                            <input
                                                type="number"
                                                name="phone"
                                                required
                                                onChange={handleChange}
                                                className="form-control" id="floatingInput"
                                                minLength="9"
                                                maxLength="14"
                                                placeholder="085737xxxxxx (9-14 digit)" />
                                        </div>
                                        <label required>
                                            <p>Latar Belakang Pendidikan:</p>
                                            <input
                                                type="radio"
                                                name="IT"
                                                className="radio"
                                                value="=IT"
                                                style={{"marginRight": "10px"}}
                                            />IT
                                            <br />
                                            <input
                                                type="radio"
                                                name="non-IT"
                                                className="radio"
                                                value="non-IT"
                                                style={{"marginRight": "10px"}}
                                            />Non-IT
                                        </label>
                                    </div>
                                    <div className="col">
                                        <div className="form-group mb-3">
                                            <label>Kelas Koding yang Dipilih</label>
                                            <select required name='koding' className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                <option value="backend">Coding Backend with Golang</option>
                                                <option value="Frontend">Coding Frontend with ReactJS</option>
                                                <option value="Fullstack">Fullstack Developer</option>
                                            </select>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label>Harapan untuk Coding Bootcamp ini</label>
                                            <textarea
                                                name='harapan' className="form-control" placeholder="Tulis harapan anda di sini (opsional)" id="floatingTextarea"></textarea>                                        </div>
                                        <div className="input-group">
                                            <label className="input-group-text" htmlFor="inputGroupFile01">Foto Surat Kesungguhan</label>
                                            <input type="file"
                                                required
                                                refs={FotoSurat} className="form-control" id="inputGroupFile01" />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleSubmit} className='btn btn-success m-3 w-25' style={{"borderRadius":"2rem"}}>Submit</button>
                                <button onClick={resetData} className='btn btn-danger w-25' style={{"borderRadius":"2rem"}}>Reset</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FormRegister