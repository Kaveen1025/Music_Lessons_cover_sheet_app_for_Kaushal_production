// import React, { Component, useEffect, useState } from "react";
// import axios from "axios";
// import { saveAs } from "file-saver";
// import {Button} from 'reactstrap'
// import Swal from "sweetalert2";

// export default function PurchaseHistory(props) {
//   const [cover, setCover] = useState([]);
//   const [searchValue, setSearchvalue] = useState([]);
//   const [noData, setNoData] = useState([]);
//   const [empty, setEmpty] = useState([]);
//   let [total, setTotal] = useState([]);
//   let [time, setTime] = useState([]);
//   let [tot, setTot] = useState([]);
//   // let [pdfName, setPdfName] = useState([]);
//   let covers = [];
//   let array2 = [];

//   let Tot=0;
//   let TotalPrice = 0;

//   useEffect(() => {
//     function getCovers() {
//       // const objectId = props.match.params.id;
//       axios
//         .get("http://localhost:8070/order/getOrders")
//         .then((res) => {
//           console.log(res.data)
//           const filter = res.data.filter(
//             (cus) => cus.CustomerID == "6199d490bfd483038f7067bf"
//             // objectId
//           );

//           filter.map((post) => {
//             covers.push(post.CoverIDs);
//           });
//           for(let i = 0; i < res.data.length; i++){
//             // console.log(res.data[i].TotalPrice)
//             // Tot += Number(res.data[i].TotalPrice)
//             // setTot(res.data[i].TotalPrice)
//             // console.log(res.data[i].TransactionDateAndTime)
//             setTime(res.data[i].TransactionDateAndTime)
//         }
          
//           axios.get("http://localhost:8070/covers/getcovers").then((res) => {
//             getSpecificOrderCoverDetiles(res.data);
//           });
//         })
//         .catch((err) => {
//           alert(err);
//         });
//     }
//     getCovers();
//   }, []);


//   function getSpecificOrderCoverDetiles(allCovers) {
//     for (let j = 0; j < allCovers.length; j++) {
//       for (let i = 0; i < covers[0].length; i++) {
//         if (covers[0][i] == allCovers[j]._id) {
//           array2.push(allCovers[j]);
//           TotalPrice = TotalPrice + Number(array2[j].Price)
//           console.log(TotalPrice)
//           setTotal(TotalPrice)
//           setNoData(array2.length)
//         }
//       }
//     }
//     setCover(array2);
//   }

//   function searchByName(val) {
//     setSearchvalue(val);

//     let searchResult = cover.filter(
//       (post) =>
//         post.Title.toLowerCase().includes(val.toLowerCase()) ||
//         post.MainCategory.toLowerCase().includes(val.toLowerCase())||
//         post.SubCategory.toLowerCase().includes(val.toLowerCase())
//     );
//     // if (searchResult.length != 0) {
//     //   // setCover(searchResult);
//     //   setEmpty("");
//     // } else {
//     //   setEmpty("No Covers available !");
//     //   setCover([]);
//     // }

//     setCover(searchResult);

//     if (searchResult !== null) {
//      //
//      setEmpty("");
//     }

//     if (searchResult.length === 0) {
//       //alert("d");
//      //
//      setCover(cover);
//      setEmpty("No Covers available !");
//       // setCover([]);
//     }
//   }

//   // function previewPdf(pdfName) {
//   //   setModalOpenForPdf(true);
//   //   const storageRef = ref(storage, `Covers(PDF)/${pdfName}`);
//   //   getDownloadURL(storageRef)
//   //     .then((url) => {
//   //       // setPdfUrl(url)
//   //       window.location.href = url;
//   //       //setModalOpenForPdf(false)
//   //     })
//   //     .catch(() => {
//   //       setModalOpenForPdf(false);
//   //       Swal.fire({
//   //         icon: "error",
//   //         title: "Oops...",
//   //         text: "Something went wrong!",
//   //       });
//   //     });
//   // }


//   var fileDownload = require('js-file-download');
//   fileDownload('samplepdf.pdf');

//   function saveFile(CoverPdf){
//     console.log(CoverPdf)
//     // saveAs(
//     //   "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
//     //   "example.pdf"
//     // );


//     // const storageRef = ref(storage, `Covers(PDF)/${CoverPdf}`);
//     // getDownloadURL(storageRef)
//     //   .then((url) => {
//     //     // setPdfUrl(url)
//     //     window.location.href = url;
//     //     //setModalOpenForPdf(false)


//         // fetch('https://cors-anywhere.herokuapp.com/' + "https://firebasestorage.googleapis.com/v0/b/kaushal-music-production-app.appspot.com/o/Covers(PDF)%2Fsample.pdf?alt=media&token=7bc7ca7b-8f4a-4f7c-9fc4-f836237c47e6", {
//         //   method: 'GET',
//         //   headers: {
//         //     'Content-Type': 'application/pdf',
//         //   },
//         // })
//         // .then((response) => response.blob())
//         // .then((blob) => {
//         //   // Create blob link to download
//         //   const url = window.URL.createObjectURL(
//         //     new Blob([blob]),
//         //   );
//         //   const link = document.createElement('a');
//         //   link.href = url;
//         //   link.setAttribute(
//         //     'download',
//         //     `sample.pdf`,
//         //   );
      
//         //   // Append to html link element page
//         //   document.body.appendChild(link);
      
//         //   // Start download
//         //   link.click();
      
//         //   // Clean up and remove the link
//         //   link.parentNode.removeChild(link);
//         // });

//       //   axios({
//       //     method: "get",
//       //     url: "https://firebasestorage.googleapis.com/v0/b/kaushal-music-production-app.appspot.com/o/Covers(PDF)%2Fsample.pdf?alt=media&token=7bc7ca7b-8f4a-4f7c-9fc4-f836237c47e6",
//       //     responseType: "arraybuffer"
//       //  })
//       //  .then((response) => {
//       //     var link = document.createElement("a");
//       //     link.href = window.URL.createObjectURL(
//       //        new Blob([response.data], {
//       //           type: "application/octet-stream"
//       //        })
//       //     );
//       //     link.download = "name_of_file_with_extension";
    
//       //     document.body.appendChild(link);
    
//       //     link.click();
//       //     setTimeout(function() {
//       //        window.URL.revokeObjectURL(link);
//       //     }, 200);
//       //  })
//       //  .catch((error) => {});

//         // const fileURL = "https://firebasestorage.googleapis.com/v0/b/kaushal-music-production-app.appspot.com/o/Covers(PDF)%2Fsample.pdf?alt=media&token=7bc7ca7b-8f4a-4f7c-9fc4-f836237c47e6";


//         // fetch('https://cors-anywhere.herokuapp.com/' + fileURL, {
//         //   method: 'GET',
//         //   headers: {
//         //     'Content-Type': 'application/pdf',
//         //   },
//         // })
//         // .then((response) => response.blob())
//         // .then((blob) => {
//         //   // Create blob link to download
//         //   const url = window.URL.createObjectURL(
//         //     new Blob([blob]),
//         //   );
//         //   const link = document.createElement('https://firebasestorage.googleapis.com/v0/b/kaushal-music-production-app.appspot.com/o/Covers(PDF)%2Fsample.pdf?alt=media&token=7bc7ca7b-8f4a-4f7c-9fc4-f836237c47e6');
//         //   link.href = url;
//         //   link.setAttribute(
//         //     'download',
//         //     `FileName.pdf`,
//         //   );

//         //   // Append to html link element page
//         //   document.body.appendChild(link);

//         //   // Start download
//         //   link.click();

//         //   // Clean up and remove the link
//         //   link.parentNode.removeChild(link);
//         // });
//         // fetchFile();{
//         //   axios({
//         //         url: fileURL,
//         //         method: "GET",
//         //         // headers: headers,
//         //         responseType: "blob" // important
//         //     }).then(response => {
//         //         const url = window.URL.createObjectURL(new Blob([response.data]));
//         //         const link = document.createElement("a");
//         //         link.href = url;
//         //         link.setAttribute(
//         //             "download",
//         //             `samplepdf.pdf`
//         //         );
//         //         document.body.appendChild(link);
//         //         link.click();
//         //     });
//         //   }
        

//   //       fetch('https://cors-anywhere.herokuapp.com/' + fileURL, {
//   //     method: 'GET',
//   //     headers: {
//   //        'Content-Type': 'application/pdf',
//   //     },
//   //  })
//   //  .then((response) => response.blob())
//   //  .then((blob) => {
//   //     // Create blob link to download
//   //     const url = window.URL.createObjectURL(
//   //        new Blob([blob]),
//   //     );
//   //     const link = document.createElement('a');
//   //     link.href = url;
//   //     link.setAttribute(
//   //        'download',
//   //        `FileName.pdf`,
//   //     );

//   //     // Append to html link element page
//   //     document.body.appendChild(link);

//   //     // Start download
//   //     link.click();

//   //     // Clean up and remove the link
//   //     link.parentNode.removeChild(link);
//   //  });


//       // })
//       // .catch(() => {
//       //   setModalOpenForPdf(false);
//       //   Swal.fire({
//       //     icon: "error",
//       //     title: "Oops...",
//       //     text: "Something went wrong!",
//       //   });
//       // });

//     //   axios({
//     //     method: "get",
//     //     url: "downloadSamplePDF.php",
//     //     responseType: "arraybuffer"
//     //  })
//     //  .then((response) => {
//     //     var link = document.createElement("a");
//     //     link.href = window.URL.createObjectURL(
//     //        new Blob([response.data], {
//     //           type: "application/octet-stream"
//     //        })
//     //     );
//     //     link.download = "name_of_file_with_extension";
  
//     //     document.body.appendChild(link);
  
//     //     link.click();
//     //     setTimeout(function() {
//     //        window.URL.revokeObjectURL(link);
//     //     }, 200);
//     //  })
//     //  .catch((error) => {});

//     }

    
   


//   return (
//     <div className="container">
//       <br />
//       <br />
//       <div className="row">
//         <div className="col-sm">
//           <h3 style={{color:'#764A34'}}>
//             {" "}
//             <center><b>Purchase History</b></center>
//           </h3>
//           <br />
//         </div>
//         <div className="col-sm">
//           <div className="row">
//             <div className="col-md-1"></div>
//             <div class="col-md-10 input-group">
//               <input
//                 type="text"
//                 class="form-control"
//                 placeholder="Search Music Covers"
//                 onChange={(e) => {
//                   searchByName(e.target.value)}}
//               />
//               <div class="input-group-append">
//                 <button className="input-group-text">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     class="bi bi-search"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//             <div className="col-md-1"></div>
//           </div>
//           <br />
//         </div>
//         <div className="col-sm text-right">

  

//            <h6>
//             <b>No of downloads : {noData}</b>
//           </h6>
//           <h6>
//             <b>Total : $ {total}</b>
//           </h6>
//           {/* </div> */}
//         </div>
//       </div>
//       <br /><center>
//         <h3 style={{color:'#D0193A '}}>{empty}</h3>
//         </center>
//         <br/>
//       {/* {cover2.map((post) => ( */}
//       {cover.map((post) => {
//         TotalPrice += Number(post.Price)
//         // console.log(TotalPrice)
//           // setTotal(TotalPrice)
//         // alert("asd")
//         return (
//           <div
//             className="card p-3"
//             style={{
//               boxShadow: "10px 10px 6px -6px #aaaaaa",
//               borderRadius: "10px",
//               width: "90%",
//               margin: "auto",
//               marginBottom : "10px",
//               border: "2px solid sienna",
//             }}
//           >
//             <div className="row" style={{ width: "100%", margin: "auto" }}>
//               <div className="col-sm text-center">
//                 <img
//                   class="rounded"
//                   placeholder={"images/923d10247b982186a4ebb24b7ba6fba8.jpg"}
//                   // alt={"images/test2.jpg"}
//                   style={{ width: "100%", margin: "auto" }}
//                   src={"images/923d10247b982186a4ebb24b7ba6fba8.jpg"}
//                   // ref={'images/test2.jpg'} onError={
//                   //   () => this.img.src = 'images/test2.jpg'}
//                   onError={(e)=>{ if (e.target.src !== "images/923d10247b982186a4ebb24b7ba6fba8.jpg"){
//                     e.target.onerror = null;
//                      e.target.src="images/923d10247b982186a4ebb24b7ba6fba8.jpg";}
//                 }
//            }
//                 />
//               </div>

//               <div className="col-sm">
//                 <br />

//                 <div className="row">
//                   <div className="col" style={{ lineHeight: "2em" }}>
//                     <span>
//                       <b> &ensp;&ensp;{post.Title}</b>
//                     </span>
//                     <br />
//                     <span> &ensp;&ensp;{post.MainCategory}</span>
//                     <br />
//                     <span> &ensp;&ensp;{post.SubCategory}</span>
//                     <br />
//                     <span> &ensp;&ensp;Price : ${post.Price}</span>
                    
//                   </div>
//                 </div>
//                 <br />
//                 <br />
//                 <div className="row">
//                   <div className="col-sm">
//                   {/* <Button
//                         href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
//                         color="transparent"
//                         target="_blank"
//                         download>Download
//                   </Button> */}

//                     <button style={{borderRadius: "25px", backgroundColor: "#D0193A",color: "white",}}
//                       className="btn btn-sm btn-block" type="button" 
//                       // onClick={this.fetchFile}
//                       onClick={() => saveFile(post.CoverPdf)} 
//                       >
//                       Download
//                       {/* {console.log(post.CoverPdf)} */}
//                     </button>
//                     <br />
//                     <br />
//                   </div>
//                   <div className="col-sm">
//                     <button
//                       style={{
//                         borderRadius: "25px",
//                         backgroundColor: "#279B14",
//                         color: "white",
//                       }}
//                       className="btn btn-sm btn-block"
//                       type="button"
//                     >
//                       View
                      
//                     </button>
//                     <br />
//                   </div>
//                 </div>
//               </div>
//               <br />
//               <div
//                 className="col-sm "
//                 style={{ backgroundColor: "white", lineHeight: "2em" }}
//               >
//                 <div className="text-right">
//                   <span class="text-center">{time}</span>
//                 </div>
//                 <br/>

//                 <span style={{ color: " #764A34" }}>
//                   Original Artist&ensp;:
//                 </span>
//                 <span>&ensp;{post.OriginalArtistName}</span>
//                 <br />
//                 <span style={{ color: " #764A34" }}>
//                   Arranged By&ensp;:
//                 </span>
//                 <span>&ensp;{post.ArrangedBy}</span>
//                 <br />
//                 <span style={{ color: " #764A34" }}>
//                   Instrument Played On&ensp;:
//                 </span>
//                 <span>&ensp;{post.InstrumentsPlayedOn}</span>
//                 <br />
//               </div>
//             </div>
//           </div>
         
//         );
//       })}

// {/* {console.log(TotalPrice)} */}
// {/* {setTotal(TotalPrice)} */}
        
//     </div>
    
  
//   );
// }

    
