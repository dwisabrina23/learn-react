import React, {useState} from 'react';

function PassengerEdit(props) {
    let dataKosong = {
        nama: "",
        umur: "",
        jk: "",
        editing: true,
    }
    const [editData, setEditData] = useState(dataKosong);

    const onChange = (event) => {
        setEditData({
            ...editData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        if(!editData.nama && !!editData.jk && !editData.umur){
            alert("silakan lengkapi form yg kosong")
        }else{
            const newData = {
                id: props.id,
                nama: editData.nama,
                umur: editData.umur,
                jk: editData.jk,
            }
            props.editPengunjung(newData)
            setEditData(dataKosong);
        }
    }

    const handleBukaInput = () => {
        setEditData({
          ...editData,
          editing: false,
        });
      };
    
    const handleTutupInput = () => {
    setEditData({
        ...editData,
        editing: true,
    });
    };

    let viewMode = {};
    let editMode = {};

    if (editData.editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Masukkan Nama Anda</p>
        <input
          type="text"
          className="input-text"
          placeholder={props.data.nama}
          value={editData.nama}
          name="nama"
          onChange={onChange}
        />
        <p>Masukkan Umur Anda</p>
        <input
          type="number"
          className="input-text"
          placeholder={props.data.umur}
          value={editData.umur}
          name="umur"
          onChange={onChange}
        />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select onChange={onChange} name="jk">
          <option value={editData.jk = "Pria"} selected>
            Pria
          </option>
          <option value={editData.jk="Wanita"}>Wanita</option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
      <button className="btn btn-success rounded-pill" onClick={handleBukaInput} style={editMode}>
        Edit
      </button>
    </div>
  );
}

export default PassengerEdit;