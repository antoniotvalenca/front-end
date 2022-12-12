const init = async () => {
  const initialFetch = await fetch("./caminhoProFetch")
  const fetchToJson = await initialFetch.json();
  // agora pode-se acessar esse material como se fosse um objeto
}

init();
