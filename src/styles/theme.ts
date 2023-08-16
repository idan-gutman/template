export type ThemeType = {
  dir?: string;
  colors: {
    primary: {
      primary: string;
      light: string;
      dark: string;
    };
    status: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };
  };

};

const theme: ThemeType = {
  colors: {
    primary: {
      primary: '#00A3B8',
      light: '#FF3100',
      dark: '#3f4254',
    },
    status: {
      success:'green',
      warning:'red',
      error: '#D23B39',
      info:'yellow',
    },
  },
};

export default theme;
