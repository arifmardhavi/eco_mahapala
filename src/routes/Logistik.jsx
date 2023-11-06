import { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import lipu from "../images/review/1.png";
import { Link, useHref } from "react-router-dom"


const Dokumentasiadmin = () =>{
    const [showModal, setShowModal] = useState(false);
    const data = [
        { nama: '123.jpg', jumlah: 'John Doe', kondisi: 'IT' },
        { nama: '234.jpg', jumlah: 'Jane Doe', kondisi: 'Marketing' },
        // ... tambahkan data lainnya sesuai kebutuhan
      ];
    
      // State untuk menyimpan data yang dipilih untuk dihapus
      
    return (
      <div >
      <div className="flex flex-col gap-3 h-screen w-screen bg-lime-500  lg:p-12 lg:py-6 overflow-y-hidden">
                    <div className="flex flex-row gap-3">
                        <div className="bg-white rounded-xl p-5 w-48 h-48 flex flex-col items-center justify-center">
                            <b className="mt-5"></b>
                            <b>{''}</b>
                            <span className="text-slate-600">{''}</span>
                        </div>
                        <div className="bg-white rounded-xl p-5 flex flex-col items-start flex-grow gap-1">
                            <b className="text-2xl">Manajemen Dokumentasi </b>
                            <span className="text-slate-600"></span>
                            <button
                    className="px-3 bg-blue-600 text-white rounded-xl py-2 self-end hover:bg-blue-700"
                    onClick={() => setShowModal(true)}>Tambah Dokumentasi</button>
                  
                    
                  
                        </div>
                        
                    </div>
                    <div className="flex flex-row gap-3">
                        
                    <Sidebar/>
    <div className="bg-white rounded-xl min-h-[500px] overflow-y-auto h-[500px]">     
      <table className="px-3 py-2">
        <thead>
          <tr>
            <th className="py-2 border-b w-64 text-left px-5">Nama</th>
            <th className="py-2 border-b w-64 text-left px-5">Jumlah</th>
            <th className="py-2 border-b w-64 text-left px-5">Kondisi</th>
            <th className="py-2 boer-rdb w-64 text-left px-5">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rowData) => (
            <tr key={rowData.nim}>
              <td className="py-2 px-4 border-b">{rowData.nama}</td>
              <td className="py-2 px-4 border-b">{rowData.jumlah}</td>
              <td className="py-2 px-4 border-b">{rowData.kondisi}</td>
              <td className="py-2 px-4 border-b">{
                <div>
                <Link to="/" className={`hover:bg-sky-200 hover:text-sky-800 px-4 py-2 rounded-lg flex items-center "bg-sky-200 text-sky-800" : ""}`}> Lihat</Link>
                <Link to="/" className={`hover:bg-green-200 hover:text-red-800 px-4 py-2 rounded-lg flex items-center "bg-green-200 text-green-800" : ""}`}> Edit</Link>
                <Link to="/" className={`hover:bg-red-200 hover:text-red-800 px-4 py-2 rounded-lg flex items-center "bg-red-200 text-red-800" : ""}`}> Hapus</Link>
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
          <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true ">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto pt-32">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg min-h-20">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div class="mt-2">
              <div className="flex justify-center items-center">
      {/* Sebelah Kiri: Bagian Foto */}
      <div className="mr-8">
        {/* Tambahkan logika untuk menampilkan foto */}
        <img
  src={lipu}
  alt="Foto Profil"
  className="w-32 h-32 object-cover "
/>

        {/* Input untuk mengunggah foto */}
        
      </div>

      {/* Sebelah Kanan: Form NIM, Nama, Divisi, Status Jabatan */}
      <form onSubmit={'handleSubmit'}>
        <div className="flex flex-col">
          <label className="mb-2">NIM</label>
          <input
            type="text"
            name="nim"
            value={'formValues.nim'}
            onChange={'handleChange'}
            className="border p-2 mb-2"
          />

          <label className="mb-2">Nama</label>
          <input
            type="text"
            name="nama"
            value={'formValues.nama'}
            onChange={'handleChange'}
            className="border p-2 mb-2"
          />

          <label className="mb-2">Divisi</label>
          <input
            type="text"
            name="divisi"
            value={'formValues.divisi'}
            onChange={'handleChange'}
            className="border p-2 mb-2"
          />

          <label className="mb-2">Status Jabatan</label>
          <input
            type="text"
            name="statusJabatan"
            value={'formValues.statusJabatan'}
            onChange={'handleChange'}
            className="border p-2 mb-4"
          />

          {/* Tombol Submit */}
          
        </div>
      </form>
    </div>
                <p class="text-sm text-gray-500">{''}</p>
                
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" onClick={() => setShowModal(false)}
          class="inline-flex w-full justify-center rounded-md border 
          border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm 
          hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
          sm:ml-3 sm:w-auto sm:text-sm">Submit</button>

        </div>
      </div>
    </div>
  </div>
  <div className="bg-white rounded-xl min-h-[500px] overflow-y-auto h-[500px]">
  <div className="container mx-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">NIM</th>
            <th className="py-2 px-4 border-b">Nama</th>
            <th className="py-2 px-4 border-b">Divisi</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rowData) => (
            <tr key={rowData.nim}>
              <td className="py-2 px-4 border-b">{rowData.nim}</td>
              <td className="py-2 px-4 border-b">{rowData.nama}</td>
              <td className="py-2 px-4 border-b">{rowData.divisi}</td>
              <td className="py-2 px-4 border-b">{rowData.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div>
</div>
        </>
      ) : null}
      
      
      </div>
      
    );
  }
  export default Dokumentasiadmin;