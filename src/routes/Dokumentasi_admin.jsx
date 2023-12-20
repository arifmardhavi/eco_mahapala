import { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import lipu from "../images/review/1.png";
import { Link, useHref } from "react-router-dom";


const Dokumentasiadmin = () =>{
    const [showModal, setShowModal] = useState(false);
    const [Modallihat, Setmodallihat] = useState(false);
    const [dokumentasi, setDokumentasi] = useState([]);
    const [dataid, setRowData] = useState();
    const [id, setId] = useState();
    const [nama, setNama] = useState("");
    const [ubahnama, setubahNama] = useState("");
    const [divisi, setDivisi] = useState("");
    const [ubahdivisi, setubahDivisi] = useState("");
    const [kategori, setKategori] = useState("");
    const [ubahkategori, setubahKategori] = useState("");
    const [berkas, setBerkas] = useState("");
    const [ubahberkas, setubahBerkas] = useState("");
    const [setatus, setSetatus] = useState("");
    const [ubahsetatus, setubahSetatus] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [ubahtanggal, setubahTanggal] = useState("");
    // const [file, setFile] = useState(null);

    const handleViewClick = (data) => {
      Setmodallihat(true); // Menampilkan modal
      setRowData(data); // Mengatur rowData dengan data yang sesua
    };

    const setHapusDokumen = (e) => {
      console.log(e)
      fetch(`http://localhost:5000/dokumentasi/${e}`, {
        method: "DELETE",
      })
      .then((response) => response.json())
      .catch((error) => {
        console.error(`Gagal menghapus item dengan e ${e}:`, error);
      });
      alert('data berhasil dihapus');
      window.location.reload();
    }

    const editDokumen = (e) => {
      e.preventDefault();
      try{
        const formData = new FormData();
          formData.append("nama", ubahnama);
          formData.append("divisi", ubahdivisi);
          formData.append("kategori", ubahkategori);
          formData.append("berkas", ubahberkas);
          formData.append("status", ubahsetatus);
          formData.append("tanggal", ubahtanggal);

          fetch(`http://localhost:5000/dokumentasi/${id}`, {
            method: 'PATCH' ,
            body: formData,
          })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            alert(id);
            alert('Data berhasil diupdate');
            window.location.reload();
            // Lakukan tindakan lain jika diperlukan setelah pengunggahan berhasil
          })
          .catch(error => {
            console.error('Gagal mengirim data:', error);
            alert('Gagal mengirim data');
          });

      }catch (error) {
        console.error('Gagal mengirim data:', error);
        alert('Gagal mengirim data');
      }

    };

    const handleFileChange1 = (e) => {
      const file = e.target.files[0];
      setubahBerkas(file);
      console.log(ubahberkas)
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setBerkas(file);
      console.log(berkas)
    };


    useEffect(() => {
      
      const url="http://localhost:5000/dokumentasi"
      fetch(url)
    .then((response) => response.json()) 
    .then((json) => setDokumentasi(json.data));
    
       }, []);

       const addDokumentasi = (e) => {
        // setShowModal(false);
        e.preventDefault();
        try{
          const formData = new FormData();
          formData.append("nama", nama);
          formData.append("divisi", divisi);
          formData.append("kategori", kategori);
          formData.append("berkas", berkas);
          formData.append("status", setatus);
          formData.append("tanggal", tanggal);

          fetch('http://localhost:5000/dokumentasi', {
            method: 'POST',
            body: formData,
          })
        
          .then(response => response.json())
          .then(data => {
            console.log(data);
            alert('Data berhasil ditambahkan');
            window.location.reload();
            // Lakukan tindakan lain jika diperlukan setelah pengunggahan berhasil
          })
          .catch(error => {
            console.error('Gagal mengirim data:', error);
            alert('Gagal mengirim data');
          });
        }catch (error) {
          console.error('Gagal mengirim data:', error);
          alert('Gagal mengirim data');
        }
      };
    
      // State untuk menyimpan data yang dipilih untuk dihapus
      
    return (
      <div >
      <div className="flex flex-col gap-3 h-screen w-screen bg-gray-300  lg:p-12 lg:py-6 overflow-y-hidden">
        <Sidebar/>
        <div className="bg-white rounded-xl p-3 flex flex-col text-center ml-64">
                        <b className="text-2xl">Management Dokumentasi Kegiatan</b>
                        </div>
                    <div className="flex flex-row gap-3 ml-64">
                      <div className="rounded-xl flex justify-between items-center flex-grow">
                        <div className="">
                          <b className="text-2xl">Tabel Data Dokumentasi</b>
                        </div>
                        <button
                          className="px-3 bg-blue-600 text-white rounded-full py-2 hover:bg-blue-700"
                          onClick={() => setShowModal(true)}>
                          + Tambah Dokumentasi
                          </button>
                      </div>
                    </div>
              <div className="flex flex-row gap-3">

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-64">     
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3 border-b w-64 text-left">Gambar</th>
            <th className="px-6 py-3 border-b w-64 text-left">Nama</th>
            <th className="px-6 py-3 border-b w-64 text-left">Kategori</th>
            <th className="px-6 py-3 border-b w-64 text-left">Divisi</th>
            <th className="px-6 py-3 border-b w-64 text-left">Status</th>
            <th className="px-6 py-3 border-b w-64 text-left">Tanggal</th>
            <th className="px-6 py-3 border-b w-64 text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dokumentasi.map((rowData) => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td className="py-2 px-4 border-b">
                <img src="file:///C:/Berkas%20Kuliah%20Aa/ProjectManpro/mahapala-backend/uploads/1703000926642-2021-08-18%20(8).png" alt={rowData.berkas} />
              </td>
              <td className="py-2 px-4 border-b">{rowData.nama}</td>
              <td className="py-2 px-4 border-b">{rowData.kategori}</td>
              <td className="py-2 px-4 border-b">{rowData.divisi}</td>
              <td className="py-2 px-4 border-b">{rowData.status}</td>
              <td className="py-2 px-4 border-b">{rowData.tanggal}</td>
              <td className="py-2 px-4 border-b">{
                <div>
                <button onClick={() =>  handleViewClick(rowData) } className={`hover:bg-green-200 hover:text-red-800 px-4 py-2 rounded-lg flex items-center "bg-green-200 text-green-800" : ""}`}> Edit</button>
                
                {Modallihat ? (
                <>
              <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 z-10 overflow-y-auto pt-32">
                  <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
                    <div class="relative transform  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg min-h-20">
                      <form onSubmit={editDokumen}>
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                          <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                              <div class="mt-2">
                                <div className="flex justify-center items-center">
                                      <div className="flex flex-col w-[26.5rem]">
                                        <label className="mb-2">Nama</label>
                                        <input
                                          type="text"
                                          name="nama"
                                          placeholder={dataid.nama}
                                          value={ubahnama}
                                          onChange={(e) => setubahNama(e.target.value)}
                                          className="border p-2 mb-2"
                                        />

                                        <label className="mb-2">divisi</label>
                                        <input
                                          type="number"
                                          name="divisi"
                                          placeholder={dataid.divisi}
                                          value={ubahdivisi}
                                          onChange={(e) => setubahDivisi(e.target.value)}
                                          className="border p-2 mb-2"
                                        />
                                        <label className="mb-2">kategori</label>
                                        <input 
                                        type="number" 
                                        name="kategori"
                                        placeholder={dataid.kategori}
                                        value={ubahkategori} 
                                        onChange={(e) => setubahKategori(e.target.value)} 
                                        className="border p-2 mb-2"
                                        />
                                        <label className="mb-2">status</label>
                                        <input 
                                        type="number" 
                                        name="status" 
                                        placeholder={dataid.status}
                                        value={ubahsetatus} 
                                        onChange={(e) => setubahSetatus(e.target.value)} 
                                        className="border p-2 mb-2"
                                        />
                                        <label className="mb-2">Tanggal</label>
                                        <input 
                                        type="date" 
                                        name="tanggal" 
                                        placeholder={dataid.tanggal}
                                        value={ubahtanggal} 
                                        onChange={(e) => setubahTanggal(e.target.value)} 
                                        className="border p-2 mb-2"
                                        />
                                        <label className="mb-2">berkas</label>
                                        <input 
                                        type="file" 
                                        name="berkas" 
                                        // value={berkas} 
                                        accept="image/*, .pdf"
                                        onChange={handleFileChange1}
                                        className="border p-2 mb-2"
                                        />

                                        {/* Tombol Submit */}
                                        
                                      </div>
                                      {/* <input className="submit-btn" type="submit" value="Submit" data-testid="submit" /> */}
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <button onClick={() => setId(dataid.id_dokumentasi)}
                          type="submit"
                          class="inline-flex w-full justify-center rounded-md border 
                          border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm 
                          hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                          sm:ml-3 sm:w-auto sm:text-sm">Submit</button>
                          <button type="button" onClick={() => Setmodallihat(false)}
                          class="inline-flex w-full justify-center rounded-md border 
                          border-transparent bg-gray-800 px-4 py-2 text-base font-medium text-white shadow-sm 
                          hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                          sm:ml-3 sm:w-auto sm:text-sm">close</button>

                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
                </>
      ) : null}
              <button onClick={(e) => setHapusDokumen(rowData.id_dokumentasi)} className={`hover:bg-red-200 hover:text-red-800 px-4 py-2 rounded-lg flex items-center "bg-red-200 text-red-800" : ""}`}> Hapus</button>
                </div>

              }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
                    </div>
                    
        {showModal ? (
        <>
          <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            
            <div class="fixed inset-0 z-10 overflow-y-auto pt-32">
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
                <div class="relative transform  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg min-h-20">
                  <form onSubmit={addDokumentasi}>
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div class="sm:flex sm:items-start">
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <div class="mt-2">
                            <div className="flex justify-center items-center">
                                  <div className="flex flex-col w-[26.5rem]">
                                    <label className="mb-2">Nama</label>
                                    <input
                                      type="text"
                                      name="nama"
                                      value={nama}
                                      onChange={(e) => setNama(e.target.value)}
                                      className="border p-2 mb-2"
                                    />

                                    <label className="mb-2">divisi</label>
                                    <input
                                      type="number"
                                      name="divisi"
                                      value={divisi}
                                      onChange={(e) => setDivisi(e.target.value)}
                                      className="border p-2 mb-2"
                                    />
                                    <label className="mb-2">kategori</label>
                                    <input 
                                    type="number" 
                                    name="kategori" 
                                    value={kategori} 
                                    onChange={(e) => setKategori(e.target.value)} 
                                    className="border p-2 mb-2"
                                    />
                                    <label className="mb-2">status</label>
                                    <input 
                                    type="number" 
                                    name="status" 
                                    value={setatus} 
                                    onChange={(e) => setSetatus(e.target.value)} 
                                    className="border p-2 mb-2"
                                    />
                                    <label className="mb-2">Tanggal</label>
                                    <input 
                                    type="date" 
                                    name="tanggal" 
                                    value={tanggal} 
                                    onChange={(e) => setTanggal(e.target.value)} 
                                    className="border p-2 mb-2"
                                    />
                                    <label className="mb-2">berkas</label>
                                    <input 
                                    type="file" 
                                    name="berkas" 
                                    // value={berkas} 
                                    accept="image/*, .pdf"
                                    onChange={handleFileChange}
                                    className="border p-2 mb-2"
                                    />

                                    {/* Tombol Submit */}
                                    
                                  </div>
                                  {/* <input className="submit-btn" type="submit" value="Submit" data-testid="submit" /> */}
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button 
                      type="submit"
                      class="inline-flex w-full justify-center rounded-md border 
                      border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm 
                      hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                      sm:ml-3 sm:w-auto sm:text-sm">Submit</button>
                      <button type="button" onClick={() => setShowModal(false)}
                      class="inline-flex w-full justify-center rounded-md border 
                      border-transparent bg-gray-800 px-4 py-2 text-base font-medium text-white shadow-sm 
                      hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                      sm:ml-3 sm:w-auto sm:text-sm">close</button>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}  
      
      
      </div>
      
    );
  }
  export default Dokumentasiadmin;