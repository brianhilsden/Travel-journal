import './main.css'

function Main(props){
    return(
        <main className='main'>
            <div>
            <img src={props.item.img} className='main--img'/>
            </div>
            <article className='info'>
                <div className='info--website'>        
                    <h1 className='title'>{props.item.title}</h1>
                    <div className='location'>
                        <img src='./placeholder.png' className='location--img'/>
                        <h3 className='location--h2'><a href={props.item.map}>{props.item.location}</a></h3>
                    </div>
                        <p><a href={props.item.link}>View website</a></p>
                </div>
                <p className='date'>Visit dates: <i>{props.item.start} - {props.item.end}</i></p>
                <br/>
                <p className='description'>{props.item.description}</p>
                <br/>
                
            </article>
        </main>
    );
}

export default Main;