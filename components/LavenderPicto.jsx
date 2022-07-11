const LavenderPicto = (props) => {
  return (
    <section className='lavender-bg'>
      <div className='margin'>
        <h3 className='padding-tb'>{props.pictos.sixbubbles.title}</h3>
        <div className='content-col'>
          {props.pictos.map(picto => (
            <div key={picto.sixbubbles.bubble.text} className='column-3 six'>
              <img className='picto' src={picto.sixbubbles.bubble.img} />
              <p  className='center'>{picto.sixbubbles.bubble.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LavenderPicto;