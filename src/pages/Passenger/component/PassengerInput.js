import React, { Component } from 'react';

class PassengerInput extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        nama:"",
        umur:"",
        jenisKelamin:"",
        editing:true
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formIsNotEmpty = this.state.nama && this.state.umur && this.state.jenisKelamin
        if (formIsNotEmpty){
            const newData = {
                nama: this.state.nama,
                umur: this.state.umur,
                jenisKelamin: this.state.jenisKelamin
            }
            this.props.tambahPengunjung(newData)
            this.setState({
                nama:"",
                umur:"",
                jenisKelamin:"Pria",
                editing:true
            })
        } else{
            alert("Data masih ada yg kosong")
        }
    }

    handleBukaInput = () => {
        this.setState({
            editing: false
        })
    }

    handleTutupInput = () => {
        this.setState({
            editing: true
        })
    }
    render() {
        const viewMode = {};
        const editMode = {};

        if(this.state.editing){
            viewMode.display = 'none';
        }else{
            editMode.display = 'none';
        }
        return (
            <div>
                <div onSubmit={() => {}} style={viewMode}>
                    <p>Masukkan Nama Anda</p>
                    <input 
                        type="text"
                        placeholder="Nama anda..." 
                        name="nama"
                        value={this.state.nama} 
                        onChange={this.onChange}
                    />
                    <p>Masukkan Umur Anda</p>
                    <input 
                        type="text"
                        placeholder="Umur anda..." 
                        name="umur"
                        value={this.state.umur} 
                        onChange={this.onChange}
                    />
                    <p>Masukkan Jenis Kelamin Anda</p>
                    <select 
                        name="jenisKelamin"
                        onChange={this.onChange}
                        value={this.state.jenisKelamin}
                    >
                        <option value="Pria">Pria</option>
                        <option value="Wanita">Wanita</option>
                    </select>
                    <button onClick={this.handleSubmit}>Submit</button>
                    <button onClick={this.handleTutupInput}>Selesai</button>

                </div>
                <button onClick={this.handleBukaInput} style={editMode}>Masukan Nama Penumpang</button>
            </div>
        );
    }
}

export default PassengerInput;