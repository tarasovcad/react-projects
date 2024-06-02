useEffect(() => {
const timeout = setTimeout(() => {
removeAlert(false);
}, 3000);
return () => clearTimeout(timeout);
}, [alert]);
