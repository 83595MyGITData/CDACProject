// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../components/navbar';

// const Ticket = () => {
//   const { busId, seatNumber, source, destination } = useParams();

//   // Inline styles as JavaScript objects
//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f4f4f9',
//   };

//   const ticketStyle = {
//     backgroundColor: '#ffffff',
//     borderRadius: '10px',
//     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//     width: '350px',
//     padding: '20px',
//     textAlign: 'center',
//   };

//   const headerStyle = {
//     borderBottom: '1px solid #eaeaea',
//     paddingBottom: '15px',
//     marginBottom: '15px',
//   };

//   const titleStyle = {
//     margin: '0',
//     fontSize: '1.5em',
//     color: '#333',
//   };

//   const bodyStyle = {
//     marginBottom: '15px',
//   };

//   const infoStyle = {
//     margin: '10px 0',
//     fontSize: '1.1em',
//   };

//   const spanStyle = {
//     fontWeight: 'bold',
//     color: '#333',
//   };

//   const footerStyle = {
//     borderTop: '1px solid #eaeaea',
//     paddingTop: '15px',
//   };

//   const footerTextStyle = {
//     margin: '0',
//     fontSize: '0.9em',
//     color: '#777',
//   };

//   return (
//     <div>
//       <Navbar />

//       <div style={containerStyle}>
//         <div style={ticketStyle}>
//           <div style={headerStyle}>
//             <h2 style={titleStyle}>Bus Ticket</h2>
//             <p>Bus ID: {busId}</p>
//           </div>
//           <div style={bodyStyle}>
//             <div style={infoStyle}>
//               <p>Seat Number: <span style={spanStyle}>{seatNumber}</span></p>
//               <p>Source: <span style={spanStyle}>{source}</span></p>
//               <p>Destination: <span style={spanStyle}>{destination}</span></p>
//               <p>Date: <span style={spanStyle}>{new Date().toLocaleDateString()}</span></p>
//               <p>Time: <span style={spanStyle}>{new Date().toLocaleTimeString()}</span></p>
//             </div>
//           </div>
//           <div style={footerStyle}>
//             <p style={footerTextStyle}>Thank you for choosing our service!</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ticket;
