import './LabelHarga'

function KartuMenu ({nama, harga, kategori}) {
    return(
        <div className='kartu'>
            <h3>{nama}</h3>
            <h7>{kategori || "Makanan"}</h7>
            <labelHarga nilai={harga}></labelHarga>
        </div>
    );
}

export default KartuMenu