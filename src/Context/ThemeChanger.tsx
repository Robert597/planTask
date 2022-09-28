import React, {Dispatch, SetStateAction} from 'react';

interface sendProps {
    themeIsDark: boolean | string | null;
    setThemeIsDark: Dispatch<SetStateAction<string | boolean | null>>
}

const ThemeContext = React.createContext<Partial<sendProps>>({});

interface providerProps {
    children: React.ReactNode;
}




export const ThemeContextProvider = ({children}: providerProps) => {
    const[themeIsDark, setThemeIsDark] = React.useState<boolean | string | null>(localStorage.getItem("theme") ? 
    localStorage.getItem("theme") : true);
    return (
    <ThemeContext.Provider value={{themeIsDark, setThemeIsDark}} >
        {children}
    </ThemeContext.Provider>
    )
}

//custom hook
export const useThemeProvider = () => {
    return React.useContext(ThemeContext);
}

export default ThemeContext;