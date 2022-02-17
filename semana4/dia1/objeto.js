const validarUsuarioPeru = (usuarioObjeto)=>{
    const {location, nickname, level} = usuarioObjeto;
    return location === "Peru"
    ? `${nickname}, ${level}`
    : "Oye tu nickname no es Peruano"
}
