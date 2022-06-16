import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Wizziteam() {
    return (
        <div>
            <Header />
            <section className='section-one'>
                <div className='lavender-bg'>
                    <h2>Wizziteam</h2> 
                </div>
            </section>
            <section className='margin'>
                <h3>
                    Notre mission
                </h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget risus est id turpis pellentesque tortor donec. Velit cum augue sagittis viverra sed in erat sit ut. Enim quam consequat scelerisque id amet leo, id. Morbi ornare feugiat donec nisi, dolor cras. Nam blandit venenatis ac, faucibus lacus egestas consectetur ornare. Nibh dolor libero eu, lacus. Nam pellentesque quam facilisis sapien tincidunt mattis posuere.
                </p>
            </section>
            <section className='margin'>
                <h3>Notre team</h3>
                <div className='content-col'>
                    <div className='column-3'>
                        test
                    </div>
                    <div className='column-3'>
                        test
                    </div>
                    <div className='column-3'>
                        test
                    </div>
                    <div className='column-3'>
                        test
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
