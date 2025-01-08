export const Contact = () => {
  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <>
      <section className="section-contact">
        <h2 className="container-title">Contact Us </h2>
        <div className="contact-wrapper container">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              required
              autoComplete="off"
              placeholder="Enter your name "
              name="username"
            />
            <input
              type="email"
              required
              autoComplete="off"
              placeholder="Enter your email "
              name="email"
            />
            <textarea
              className="form-control"
              rows="10"
              autoComplete="off"
              placeholder="Enter your message "
              required
              name="message"
              data-gramm="false"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </>
  );
};

// export const Contact = () => {
//   const handleFormSubmit = (formData) => {
//     console.log("WWWWWWWWWW");
//     // const formInputData = Object.fromEntries(formData.entries());
//     // console.log(formInputData);
//   };

//   return (
//     <section className="section-contact">
//       <h2 className="container-title">Contact Us</h2>

//       <div className="contact-wrapper container">
//         <form action={handleFormSubmit}>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="enter your name"
//             name="username"
//             required
//             autoComplete="off"
//           />

//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter you email"
//             name="email"
//             required
//             autoComplete="off"
//           />

//           <textarea
//             className="form-control"
//             rows="10"
//             placeholder="Enter your message"
//             name="message"
//             required
//             autoComplete="off"></textarea>

//           <button type="submit" disabled={isPending}>
//             Send
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };
