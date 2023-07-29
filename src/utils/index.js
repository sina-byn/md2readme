const getThemeColors = theme => {
  switch (theme) {
    case 'light':
      return { color: '#1f2328', backgroundColor: '#ffffff' };
    case 'light tritanopia':
    case 'light colorblind':
      return { color: '#24292f', backgroundColor: '#ffffff' };
    case 'light high contrast':
      return { color: '#0e1116', backgroundColor: '#ffffff' };
    case 'dark':
      return { color: '#e6edf3', backgroundColor: '#0d1117' };
    case 'dark tritanopia':
    case 'dark colorblind':
      return { color: '#c9d1d9', backgroundColor: '#0d1117' };
    case 'dark high contrast':
      return { color: '#f0f3f6', backgroundColor: '#0d1117' };
    case 'dark dimmed':
      return { color: '#adbac7', backgroundColor: '#22272e' };
  }
};

export { getThemeColors };
