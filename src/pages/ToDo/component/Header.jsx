
export default function Header({text}){
    return (
        <div style={{background:"white", padding:"5px 10px", marginBottom:20, boxShadow:"0px 2px grey"}}>
            <h1>{text}</h1>
        </div>
    );
}