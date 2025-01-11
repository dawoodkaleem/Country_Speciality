import "../../App.css";
import ClipLoader from "react-spinners/ClipLoader";
export function Loader() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="container loader-section">
      <div className="loader">
        <ClipLoader
          color="white" // spinner color
          loading={loading} // controls visibility
          size={50} // size in px
        />
      </div>
      ;
    </div>
  );
}
