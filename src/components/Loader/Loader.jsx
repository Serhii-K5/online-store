import React, { useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

// export class Loader extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//     };
//   }

//   render() {
//     return (
//       <div className="sweet-loading">
//         <PuffLoader
//           size={150}
//           color={"#4d27d7"}
//           loading={this.state.loading}
//           speedMultiplier={1.5}
//           aria-label="Loading Spinner"
//           data-testid="loader"
//         />
//       </div>
//     );
//   }
// }

export const Loader = () => {
  const [loading, setLoading] = useState(true);
  
  console.log(setLoading);
  
  return (
    <div className="sweet-loading">
      <PuffLoader
        size={150}
        color={"#4d27d7"}
        loading={loading}
        speedMultiplier={1.5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
