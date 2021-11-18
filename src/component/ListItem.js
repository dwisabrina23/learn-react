import "./Home.css"
import PassengerEdit from "./PassengerEdit"
const ListItem = (props) => {

    const { id, nama, umur, jk } = props.data
    const hapusPengunjung = props.hapusPengunjung
    const editPengunjung = props.editPengunjung

    return (
        <tr>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{jk}</td>
            <td className="removeBorder" onClick={() => hapusPengunjung(id)}><button>Hapus</button></td>
            <td className="removeBorder"><PassengerEdit id={id} data={props.data} editPengunjung={editPengunjung}/></td>
        </tr>
    )
}

export default ListItem;