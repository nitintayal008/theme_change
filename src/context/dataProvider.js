import { useContext, createContext, useState } from "react";
// import { MDBSwitch } from "mdb-react-ui-kit";

const dataContext = createContext();
const DataProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");

  return (
    <dataContext.Provider value={{ theme, setTheme }}>
      {children}
    </dataContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(dataContext);
};

export default DataProvider;
