const useClickOutside = (elRef, onClickOutside) => {
  window.addEventListener('click', e => {
    const el = elRef.current;
    if (!el || el.contains(e.target)) return;
    onClickOutside(e);
  });
};

export default useClickOutside;
