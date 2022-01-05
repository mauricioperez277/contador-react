const Contador = ()=>{

    const [contador, setContador] = React.useState(0);  
    const aumentar = () => setContador(contador + 1 );
    const disminur = () => setContador(contador - 1 );
    return ( 
        <div class="col-sm-10 col-md-12">
            <h1 className={contador < 0 ? "menor ":"mayor"} > 
                Contador: {contador} 
            </h1>
            <hr/>
            <button class=" btn btn-primary" onClick={aumentar} >Aumentar</button>
            <button class="btn btn-success" onClick={disminur} >Disminuir</button>
        </div>  
    )
};